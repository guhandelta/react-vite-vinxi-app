/// <reference types="vinxi/types/client" />
import ReactDOM from 'react-dom/client';
import './index.css';
import { useEffect, useMemo, useState } from 'react';

type Photo = {
    photo: string;
    height: number;
    width: number;
};

function pack(images: Photo[], columns: number): Photo[][] {
    // Create an empty 2D array to store the packed images, with 'columns' number of columns.
    const packed: Photo[][] = Array.from({ length: columns }, () => []);

    // Create an array to keep track of the current height of each column, initialized to 0.
    const heights = Array.from({ length: columns }, () => 0);

    // Iterate through each image
    for (const image of images) {
        // Find the column with the minimum current height
        const column = heights.indexOf(Math.min(...heights));

        // Add the image to the selected column
        packed[column].push(image);

        // Update the height of the selected column
        heights[column] += image.height;
    }

    // Return the packed images
    return packed;
}


function ImageDisplay() {
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        fetch('/api/photos')
            .then((res) => res.json())
            .then((data) => setPhotos(data));
    }, []);

    const columns = useMemo(() => pack(photos, 3), [photos]);

    return (
        <div className="flex flex-wrap mt-2 px-1">
            {columns.map((column, i) => (
                <div key={i} className="w-1/3 flex flex-col px-1 gap-2">
                {column.map((p) => (
                    <img
                        src={`/photos/${p.photo}`}
                        alt={p.photo}
                        key={p.photo}
                        style={{
                            aspectRatio: `${p.width}/${p.height}`,
                        }}
                        className="w-full rounded-xl"
                    />
                ))}
                </div>
            ))}
        </div>
    );
}

const rootElement = document.getElementById('root');
// To handle `Returns a reference to the first object with the specified value of the ID attribute.` warning
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <>
            <h1 className='text-center text-5xl'>Hello, world!</h1>
            <ImageDisplay />
        </>
    );
}
import { eventHandler, getRequestURL } from 'vinxi/http'
import fs from "node:fs/promises"
import imageSize from 'image-size';

// This is actually a Nitro event handler Vinxi actually wraps up Vite and Nitro
export default eventHandler(async (event) => {
    const getURLInfo = getRequestURL(event);
    
    if(getURLInfo.pathname.startsWith("/api/photos")){
        const files = await fs.readdir("./photos");
        
        const photos:{
            photo: string,
            height: number,
            width: number,
        }[] = [];

        // Iterate over the files and take only those end with .png
        for (const photo of files.filter(file => file.endsWith('.png'))){
            const { height, width } = imageSize(`./photos/${photo}`);
            photos.push({ photo, height: height!, width: width! })
        }

        return photos;
    }
});
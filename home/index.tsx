/// <reference types="vinxi/types/client" />
import ReactDOM from 'react-dom/client';
import './index.css';

const rootElement = document.getElementById('root');
// To handle `Returns a reference to the first object with the specified value of the ID attribute.` warning
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <h1 className='text-center text-5xl'>Hello, world!</h1>
    );
}
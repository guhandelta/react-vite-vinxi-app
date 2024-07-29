import { eventHandler, getRequestURL } from 'vinxi/http'
import fs from "node:fs/promises"

// This is actually a Ntro event handler Vinxi actually wraps up Vite and Nitro
export default eventHandler(async (event) => {
    const getURLInfo = getRequestURL(event);
    
    if(getURLInfo.pathname.startsWith("/api/photos")){
        const files = await fs.readdir("./photos");
        return files;
    }
});
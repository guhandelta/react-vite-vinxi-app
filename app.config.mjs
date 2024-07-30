// Creating the server api
import reactRefresh from "@vitejs/plugin-react";
import { createApp } from "vinxi";

export default createApp({
    // List of routers, to instruct the app to use which router for which route
    routers:[
        {
            name: "photos",
            type: "static",
            base: "/photos",
            dir: "./photos",
        },
        {
            name: "client",
            type: "spa",
            handler: "./index.html",
            target: "browser",
            // to enable HMR
            plugins: () => [reactRefresh()],
        },
        {
            // Instructing that any HTTP request to /api should be handled here, by calling /index.ts
            name: "api",
            type: "http",
            base: "/api",
            handler: "./api/index.ts",
        },
    ],
});
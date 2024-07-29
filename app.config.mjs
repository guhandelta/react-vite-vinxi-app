import { createApp } from "vinxi";

export default createApp({
    // List of routers, to instruct the app to use which router for which route
    routers:[
        {
            name: 'photos',
            type: 'static',
            base: '/photos',
            dir: './photos',
        }
    ],
});
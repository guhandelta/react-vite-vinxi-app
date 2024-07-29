// app.config.mjs
import { createApp } from "vinxi";
var app_config_default = createApp({
  // List of routers, to instruct the app to use which router for which route
  routers: [
    {
      name: "photos",
      type: "static",
      base: "/photos",
      dir: "./photos"
    },
    {
      // Instructing that any HTTP request to /api should be handled here, by calling /index.ts
      name: "api",
      type: "http",
      base: "/api",
      dir: "./api/index.ts"
    }
  ]
});
export {
  app_config_default as default
};

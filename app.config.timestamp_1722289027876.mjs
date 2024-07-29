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

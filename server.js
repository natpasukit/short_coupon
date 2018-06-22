"use strict";
/**
 * @author natpaphon sukitpaneenit
 * @description main server files to include all part of express , start server from this files
 * @version 1.0.1
 */
require("dotenv").config({ path: `${__dirname}/configs/.env` });
const express = require("express");
const http = require("http");
var app = express();
var server = http.createServer(app);
var appPort = process.env.EXPRESS_PORT || 9000;

// import middlewares
var middleware = require("./middlewares/middlewareIndex");
app.use("/", middleware);
// import router
var router = require("./routes/routeIndex");
app.use("/", router);

// Start server and export for any modules to use
module.exports = server.listen(appPort, () => {
    console.log(`Main : Server start! serving at Port ${appPort}`);
    console.log(`Main : Server enviroment is ${process.env.SERVER_ENV}`);
    console.log(`Main : Server API versioning ${process.env.API_VERSION}`);
});
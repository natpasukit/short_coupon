/**
 * @author natpaphon sukitpaneenit
 * @description route index files to handle any route
 * @version 1.0.0
 */
const express = require("express");
const path = require("path");
var router = express.Router();
const ROOT_API = `${process.env.API_PATH}/${process.env.API_VERSION}`;
const routerRedirect = require("./routeRedirect");
router.use("/*", routerRedirect);
module.exports = router;
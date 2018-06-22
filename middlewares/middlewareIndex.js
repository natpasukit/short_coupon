/**
 * @author natpaphon sukitpaneenit
 * @description middleware index for any middleware files
 * @version 1.0.1
 */
var express = require("express");
var router = express.Router();
var middlewareXheader = require("./middlewareXheader");
var middlewareSecurity = require("./middlewareSecurity");
var middlewareBodyParser = require("./middlewareBodyParser");
var middlewareFavicon = require("./middlewareFavicon");
router.use("*", middlewareXheader);
router.use("*", middlewareBodyParser);
router.use("*", middlewareSecurity);
router.use("*", middlewareFavicon);
module.exports = router;
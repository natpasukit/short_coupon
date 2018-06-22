/**
 * @author natpaphon sukitpaneenit
 * @description middleware to allow use bodyParser in project
 * @version 1.0.1
 */
var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
router.use("*", bodyParser.urlencoded({ extended: false }));
router.use("*", bodyParser.json());
module.exports = router;
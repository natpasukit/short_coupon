/**
 * @author natpaphon sukitpaneenit
 * @description middleware to use as security middleware index such as helmet , firewall
 * @version 1.0.0
 */
var express = require("express");
var helmet = require("helmet");
var router = express.Router();
router.use("*", helmet());
module.exports = router;
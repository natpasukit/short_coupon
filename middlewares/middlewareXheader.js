/**
 * @author natpaphon sukitpaneenit
 * @description middleware to allow CORS on certain API path
 * @version 1.0.0
 */
var express = require("express");
var router = express.Router();
router.use(`/${process.env.API_PATH}`, (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
module.exports = router;
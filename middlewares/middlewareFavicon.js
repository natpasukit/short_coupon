/**
 * @author natpaphon sukitpaneenit
 * @description use to response json text instead of undefined favicon.ico to by pass favico error
 * @version 1.0.1
 */
var express = require("express");
var router = express.Router();
router.use("*", (req, res, next) => {
    if (req.originalUrl === "/favicon.ico") {
        res.status(204).json({ nope: true });
    } else {
        next();
    }
});
module.exports = router;
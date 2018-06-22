/**
 * @author natpaphon sukitpaneenit
 * @description route redirect to redirect any incoming request
 * Should place in bottom of routeindex files to handle non exists path
 * @version 1.0.0
 */
const express = require('express');
var controller = require('../controllers/controllerRedirect');
var router = express.Router();
router.get('/*', controller.getRedirect);
module.exports = router
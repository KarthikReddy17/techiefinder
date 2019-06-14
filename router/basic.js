const express = require("express");

const router = express.Router();

const controller = require('../controller/basic');

router.get('/v1/basic',controller.basicData);
module.exports = router;
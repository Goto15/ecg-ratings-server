const express = require('express');
const router = express.Router();

const matchController = require('../controllers/matchController');


router.get('/matches', matchController.allMatches)
router.get('/matches/:IGN', matchController.playerMatches);
router.get('/matches/round/:num', matchController.roundMatches);

module.exports = router
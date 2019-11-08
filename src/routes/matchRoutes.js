const express = require('express');
const router = express.Router();

const matchController = require('../controllers/matchController');


router.get('/allMatches', matchController.allMatches)
router.get('/playerMatches', matchController.playerMatches);
router.get('/roundMatches', matchController.roundMatches);

module.exports = router
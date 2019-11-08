const express = require('express');
const router = express.Router();

const playerController = require('../controllers/playerController');


router.get('/players', playerController.allPlayers);
router.get('/players/:IGN', playerController.player);

module.exports = router
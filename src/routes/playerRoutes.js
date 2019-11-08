const express = require('express');
const router = express.Router();

const playerController = require('../controllers/playerController');


router.get('/allPlayers', playerController.allPlayers);
router.get('/player', playerController.player);

module.exports = router
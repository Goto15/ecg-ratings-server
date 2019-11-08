const express = require('express');
const router = express.Router();

const tournamentController = require('../controllers/tournamentController');


router.get('/tournaments', tournamentController.allTournaments);
router.get('/tournaments/format/:format', tournamentController.tournamentsByFormat);
// Add format, name(done), date, type queries
router.get('/tournaments/:Name', tournamentController.tournament);

module.exports = router
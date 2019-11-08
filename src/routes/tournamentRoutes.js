const express = require('express');
const router = express.Router();

const tournamentController = require('../controllers/tournamentController');


router.get('/allTournaments', tournamentController.allTournaments);
router.get('/darkTournaments', tournamentController.darkTournaments);
router.get('/constructedTournaments', tournamentController.constructedTournaments);
// Add format, name(done), date, type queries
router.get('/tournament', tournamentController.tournament);

module.exports = router
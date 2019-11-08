const matchModel = require('../models/matchModel')
const tournamentModel = require('../models/tournamentModel');


tournamentModel.sequelize
    .authenticate()
    .then(() => {
        console.log('Tournament DB connection established.')
    })
    .catch(error => {
        console.error('Unable to connect to the Tournament table: ', error);
    });

//Returns a date ordered array of all tournaments
exports.allTournaments = function(req, res) {
    tournamentModel.findAll({
        attributes: ['Name', 'Format', 'Date']
    })
    .then(Tournament => {
        res.json(Tournament)
    }).catch(error => console.log(error));
}

//Returns all Dark Draft tournaments name and date only
exports.darkTournaments = function(req, res) {
    tournamentModel.findAll({
        attributes: ['Name', 'Date'],
        where: {
            Format: 'Dark Draft'
        }
    })
    .then(results => {
        res.json(results)
    }).catch(error => console.log(error));
}

//Returns all constructed tournaments by name and date only
exports.constructedTournaments = function(req, res) {
    tournamentModel.findAll({
        attributes: ['Name', 'Date'],
        where: {
            Format: 'Constructed'
        }
    })
    .then(results => {
        res.json(results)
    }).catch(error => console.log(error));
}

//Returns a queried tournament with all the matches played
exports.tournament = function(req, res) {
    try {
        if(req.query['Name'] != undefined){
            query = req.query['Name']
            query = query.replace(/-/g, ' ')
            tournamentModel.findAll({
                where: {
                    'Name': query
                }
            }).then(tournaments => {
                if(tournaments.length > 1){
                    res.json(tournaments)
                } else {
                    tournamentsJSON = JSON.stringify(tournaments[0])
                    tournamentsJSON = JSON.parse(tournamentsJSON)
                    console.log(tournamentsJSON.Name)
                    matchModel.findAll({
                        attributes: ['Player1', 'Player2', 'Winner', 'Round'],
                        where: {
                            'Tournament': tournamentsJSON.Name
                        }
                    }).then(matchResults => {
                        tournamentsJSON["Matches"] = matchResults
                        res.json(tournamentsJSON)
                    })
                }
            })
        }
    }catch(error) { console.log(error) }
}
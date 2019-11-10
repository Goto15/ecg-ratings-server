const playerModel = require('../models/playerModel');


playerModel.sequelize
    .authenticate()
    .then(() => {
        console.log('Player DB connection established.');
    })
    .catch(error => {
        console.error('Unable to connect to the Player table: ', error);
    });

//Returns an alphabetically sorted array of all players except "bye"
exports.allPlayers = function(req, res) {
    playerModel.findAll({
        attributes: ['IGN', 'Elo', 'IRL_Name'],
    })
    .then(Player => {
        all_players = JSON.stringify(Player)
        all_players = JSON.parse(all_players)

        //Sort by alphabetical case insensitve.
        all_players = all_players.sort(function (a,b){
            return a.IGN.toLowerCase().localeCompare(b.IGN.toLowerCase());
        });

        //Removes the bye player placeholder
        for(i in all_players){
            if(all_players[i].IGN == 'bye'){
                all_players.splice(i, 1)
            }
        }

        res.json(all_players)
    }).catch(error => console.log(error));
}

//Returns an error when no routing param given
exports.player = function(req, res) {
    try {
        if(req.params['IGN'] != undefined){
            let queries = req.params['IGN']
            playerModel.findAll({
                where: {
                    'IGN': queries
                }
            })
            .then(results => {
                res.json(results[0])
            })
        } else {
            res.json("error: No or incorrect query")
        }
    }catch(error) {
        console.log(error)
    }
}
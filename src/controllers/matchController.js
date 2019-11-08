const matchModel = require('../models/matchModel');
const Sequelize = require('sequelize');

const Op = Sequelize.Op

matchModel.sequelize
    .authenticate()
    .then(() => {
        console.log('Match DB connection established.')
    })
    .catch(error => {
        console.error('Unable to connect to the Match table: ', error);
    });

exports.allMatches = function(req, res) {
    matchModel.findAll({
        attributes: ['Player1', 'Player2', 'Winner', 'Tournament', 'Round']
    })
    .then(results => {
        res.json(results)
    }).catch(error => { console.log(error) });
}

exports.playerMatches = function(req, res) {
    try {
        if(req.params['IGN'] != undefined){
            query = req.params['IGN']
            matchModel.findAll({
                where: {
                    [Op.or]: {
                        'Player1': query,
                        'Player2': query
                    }
                }
            }).then(results => {
                res.json(results)
            })
        }
    } catch(error) { console.log(error) }
}

exports.roundMatches = function(req, res) {
    try {
        if(req.params['num'] != undefined){
            query = req.params['num']
            matchModel.findAll({
                where: {
                    'Round': query
                }
            }).then(results => {
                res.json(results)
            })
        }
    }catch(error) { console.log(error) }
}
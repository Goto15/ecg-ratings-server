const Sequelize = require('sequelize');


// Create connection to SQLite DB
const ratingsDB = new Sequelize({
    dialect: 'sqlite',
    storage: './ratings.db',
    define: {
        timestamps: false
    }
});

const Player = ratingsDB.define('Players', {
    //Columns
    IGN: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    Elo: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    IRL_Name: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Player
const Sequelize = require('sequelize');

//Connect to the SQLite DB
const ratingsDB = new Sequelize({
    dialect: 'sqlite',
    storage: './ratings.db',
    define: {
        timestamps: false
    }
});

const Match = ratingsDB.define('Match', {
    //Columns
    Player1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Player2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Winner: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Number_of_Games: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Tournament: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    Round: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Match
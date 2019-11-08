const Sequelize = require('sequelize');

//Connect to SQLite DB
const ratingsDB = new Sequelize({
    dialect: 'sqlite',
    storage: './ratings.db',
    define: {
        timestamps: false
    }
});

const Tournament = ratingsDB.define('Tournament', {
    //Columns
    Name: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true
    },
    Format: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Date: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Tournament
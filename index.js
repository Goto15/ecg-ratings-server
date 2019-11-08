var cors = require('cors');

const express = require('express');
const app = express();

const matchRoutes = require('./src/routes/matchRoutes');
const playerRoutes = require('./src/routes/playerRoutes');
const tournamentRoutes = require('./src/routes/tournamentRoutes');

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) =>
    res.send(`Epic Ratings up on:  ${PORT}`)
);

app.use('/api', matchRoutes);
app.use('/api', playerRoutes);
app.use('/api', tournamentRoutes);

app.listen(PORT || PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
)

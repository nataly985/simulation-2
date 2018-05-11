const express = require('express');
const bodyParser = require('body-Parser');
// const session = require('session');
const hc = require('./controller.js');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );
massive( process.env.CONNECTION_STRING ).then( db => {
    console.log(db)
app.set( 'db', db)
});

app.get('/api/houses', hc.read);
app.post('/api/house', hc.create);
app.delete('api/house/:id', hc.delete);

const port = process.env.PORT || 3002
app.listen( port, () => {console.log (`Server listening on port ${port}.`);})
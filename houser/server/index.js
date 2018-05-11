const express = require('express');
const bodyParser = require('body-Parser');
// const session = require('session');
const sc = require('./controller.js');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );
massive( process.env.CONNECTION_STRING ).then( db => {
    console.log(db)
app.set( 'db', db)
});

// app.get('/api/house', (req,res, next))
// receive: nothing
// send: [{
//     id: 1,
//     name: 'Example',
//     address: '123 Example st',
//     city: 'Orem',
//     state: 'UT',
//     zip: 84320

// }]
// app.get('/api/', sc.read);
// app.post('/api/', sc.create);
// app.put('api/', sc. update);
// app.delete('api/', sc.delete);

const port = process.env.PORT || 3002
app.listen( port, () => {console.log (`Server listening on port ${port}.`);})
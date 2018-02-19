const express = require('express');
const app = express(); //binds to express server
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

//API file for interacting with MongoDB
const api = require('./server/routes/api');


//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Angular DIST output folder- look for the dist path
app.use(express.static(path.join(__dirname, 'dist')));

//API location
app.use('/api', api);

//send all other requests to the Angular app

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


//port

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log('running on localhost:' + port));
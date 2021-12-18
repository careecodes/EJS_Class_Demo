let ejs = require('ejs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

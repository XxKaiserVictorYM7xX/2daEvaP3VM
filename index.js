//module.exports = require('./lib/express');

const express = require('express')
const app = express()

app.get('/dashboard', (req, res) => {res.render('dashboard',);
});
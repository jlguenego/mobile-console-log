'use strict';

const express = require('express');
const serveIndex = require('serve-index');
const jlgConsole = require('../jlg-console-middleware.js');

var app = express();

app.use(jlgConsole);

const port = 8000;

app.listen(port, function () {
	console.log('server started on port %d', port);
});

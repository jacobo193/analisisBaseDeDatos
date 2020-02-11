require('./config/config');
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const Usuario = require('./models/usuario');
const Archivo = require('./models/archivo');
const login = require('./routes/login');
const bodyParser = require('body-parser');
const path = require('path');
const _ = require('underscore');
const categorias = require('./routes/categorias')
const producto = require('./routes/producto')
const upload = require('./routes/upload')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//habilitacion de public
app.use(express.static(path.resolve(__dirname, '../public')));

app.use(require('./routes/upload'));
app.use(require('./routes/producto'));
app.use(require('./routes/index'));
mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {

    if (err) throw err;

    console.log('the database is currently online');

});


app.listen(process.env.PORT, () => {
    console.log('listening port:', process.env.PORT);
});
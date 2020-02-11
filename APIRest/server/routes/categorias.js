const express = require('express');
const app = express();
let Categorias = require('../models/categorias');

app.post('/categoria', (req, res) => {

    let body = req.body;

    let Categorias = new Categoria({
        descripcion: body.descripcion,

    });


    Categorias.save((err, categoriasDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!categoriasDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            categoria: categoriasDB
        });


    });


});
module.exports = app;
const express = require('express');
const app = express();
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const { verficarToken } = require('../middleware/autenticacion');



app.get('/usuario/:id', (req, res) => {

    /*     let desde = req.query.desde || 0;
        desde = Number(desde);

        let limite = req.query.limite || 5;
        limite = Number(limite);

        Usuario.find({ estado: true }, 'nombre email role estado google img')
            .skip(desde)
            .limit(limite)
            .exec((err, usuarios) => { */



    let id = req.params.id;
    if (id === "" || id === undefined) {
        return res.status(400).json({

            status: 400,
            message: "Nombre no válido",
            data: usuario,
            success: "FAIL!"

        });
    } else {
        Usuario.findById(id)
            .exec((err, userBD) => {

                if (err) {
                    return res.status(500).json({
                        status: 500,
                        message: err,
                        data: userBD,
                        success: "FAIL!"
                    });
                }

                if (userBD.length === 0) {
                    return res.status(404).json({
                        status: 404,
                        message: "Usuario no encontrando",
                        data: userBD,
                        success: "FAIL!"
                    });
                } else {
                    let user = new Usuario({
                        nombre: userBD.nombre,
                        email: userBD.email,
                        edad: userBD.edad,
                        _id: userBD.id,
                        password: userBD.password,
                        role: userBD.role
                    });

                    res.json({
                        status: 200,
                        message: "Usuario encontrado",
                        data: user,
                        success: "SUCCESS!"
                    });
                }
            })

        // Usuario.findById(req.params.nombre)
        //     .exec((err, usuario) => {

        //         if (err || usuario.length === 0) {
        //             return res.status(404).json({
        //                 ok: false,
        //                 err
        //             });
        //         }

        //         res.json({
        //             ok: true,
        //             usuario
        //         });
        //     })
    }


});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        let user = new Usuario({
            nombre: body.nombre,
            email: body.email,
            edad: body.edad,
            _id: body.id,
            password: bcrypt.hashSync(body.password, 10),
            role: body.role
        });

        user.save((err, userBd) => {

            if (err) {
                return res.status(500).json({
                    status: 500,
                    messege: err,
                    data: userBd,
                    success: "FAIL"

                });
            }

            res.json({
                status: 200,
                message: "Usuario creado",
                data: userBd,
                success: "SUCCESS!"
            });
        });

    }

});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'edad']);

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, userBd) => {

        if (err) {
            return res.status(500).json({
                status: 500,
                messege: "ha ocurrido un error!",
                data: userBd,
                succes: "FAIL!"
            });
        }

        res.json({
            status: 200,
            message: "se ha actualizado",
            data: userBd,
            success: "SUCCESS!"
        });
    });
});

app.delete('/usuario/:id', function(req, res) {
    let id = req.params.id;

    Usuario.findByIdAndDelete(id, (err, userBd) => {

        if (err) {
            return res.status(500).json({
                status: 500,
                messege: "ha ocurrido un error!",
                data: userBd,
                succes: "FAIL!"
            });
        }

        if (userBd === null) {
            return res.status(404).json({
                status: 404,
                message: "Usuario no encontrando",
                data: userBd,
                success: "FAIL!"
            });
        } else {

            res.json({
                status: 200,
                message: "se borrado",
                data: userBd,
                success: "SUCCESS!"
            });
        }
    })

});
module.exports = app;
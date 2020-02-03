require('./config/config');
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const Usuario = require('./models/usuario');
const Archivo = require('./models/archivo');

const bodyParser = require('body-parser');

const _ = require('underscore');
const cryptoJs = require('crypto-js');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// app.post('/usuario/file', function(req, res) {

//     let algo = req.body;
//     let archivo = new Archivo({
//         file: req.body
//     })

//     archivo.save((err, ok) => {

//         if (err) {
//             return res.json({
//                 error: err
//             })
//         }

//         res.json({
//             status: 200,
//             data: algo,
//             success: "SUCCESS!"
//         });
//     })


// });


app.get('/usuario/:id', function(req, res) {

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
                        password: cryptoJs.AES.decrypt(userBD.password, "1").toString(cryptoJs.enc.Utf8)
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
            password: cryptoJs.AES.encrypt(body.password, "1")
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


mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});



app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});
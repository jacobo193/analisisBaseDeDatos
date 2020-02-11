const express = require('express');
const app = express();
const fileUplaod = require('express-fileupload')

// opciones por defecto
app.use(fileUplaod())

app.post('/upload', function(req, res) {
    if (!req.files) {
        return res.status(400).
        json({
            ok: false,
            messege: 'no file were selected'
        })
    }

    let archivo = req.files.archivo;

    //extenciones validad
    let extencionesValidas = ['jpeg', 'png', 'gif', 'jpg'];


    archivo.mv('./upload/filename.jpg', function(err) {
        if (err) {
            return res.status().json({
                ok: true,
                err

            })



        }
        res.json({
            ok: true,
            messege: 'file upload'
        })

    });


});

module.exports = app;
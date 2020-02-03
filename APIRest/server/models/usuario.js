const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');



let Schema = mongoose.Schema;


let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    edad: {
        type: String,
        required: [true, 'La edad es necesaria']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    _id: {
        type: String,
        required: [true, "el id es necesario"]
    },

    password: {
        type: String,
        required: [true, "la contraseña es necesaria "]
    }
});




module.exports = mongoose.model('Usuario', usuarioSchema);
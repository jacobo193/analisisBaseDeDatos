const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');



let Schema = mongoose.Schema;


let archivoSchema = new Schema({
    file: {
        type: Buffer,
        required: [true, 'El archivo es necesario']
    }
});


module.exports = mongoose.model('archivo', archivoSchema);
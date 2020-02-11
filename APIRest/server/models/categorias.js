const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let categoriasSchema = new Schema({
    descripcion: { type: String, unique: true, required: [true, 'La descripción es obligatoria'] },

});


module.exports = mongoose.model('Categorias', categoriasSchema);
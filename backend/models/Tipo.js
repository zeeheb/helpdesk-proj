const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipoSchema = new Schema({
  codigo: {
    type: Number
  },

  descricao: {
    type: String
  }
});

module.exports = Tipo = mongoose.model('Tipo', TipoSchema);

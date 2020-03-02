const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChamadoSchema = new Schema({
  tipo: {
    type: String
  },

  contato: {
    type: String
  },

  criticidade: {
    type: String
  },

  assunto: {
    type: String
  },

  descricao: {
    type: String
  },

  status: {
    type: String
  },

  exec: {
    type: String
  },

  status: {
    type: String
  },

  id: {
    type: String
  },

  anexo: {
    type: String
  }

  // id: mongoose.Schema.Types.ObjectId

  // anexos: {
  //   type: String
  // }

  //   codigo: {
  //     type: String
  //   },

  //   descricao: {
  //     type: String
  //   }
});

module.exports = Chamado = mongoose.model('Chamado', ChamadoSchema);

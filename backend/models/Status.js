const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatusSchema = new Schema({
  codigo: {
    type: String
  },

  descricao: {
    type: String
  }
});

module.exports = Status = mongoose.model('Status', StatusSchema);

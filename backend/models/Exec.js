const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExecSchema = new Schema({
  //   codigo: {
  //     type: Number
  //   },

  user: {
    type: String
  }
});

module.exports = Exec = mongoose.model('Exec', ExecSchema);

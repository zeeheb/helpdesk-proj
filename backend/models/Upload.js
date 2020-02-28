const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
  img: {
    data: Buffer,
    contentType: String
  }
});

module.exports = Upload = mongoose.model('Upload', UploadSchema);

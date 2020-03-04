const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const uuid = require('uuid');
// const multer = require('multer');
const fs = require('fs');

const app = express();

app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect('mongodb://127.0.0.1:27020/admin', { useNewUrlParser: true })
  .then(() => console.log('mongodb connected !!!!!!!'))
  .catch(err => console.log(err));

const Chamado = require('./models/Chamado');

const DIR = './uploads/';
// ================= CHAMADOS =================

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, DIR);
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname
//       .toLowerCase()
//       .split(' ')
//       .join('-');
//     cb(null, uuidv4() + '-' + fileName);
//   }
// });

// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype == 'image/png' ||
//       file.mimetype == 'image/jpg' ||
//       file.mimetype == 'image/jpeg'
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//     }
//   }
// });

/////////////////////////////////////////

app.post('/chamado', (req, res) => {
  //   console.log(req);
  console.log(req.body);

  const url = req.protocol + '://' + req.get('host');

  // const str = `${url}/uploads/${req.body.anexoNome}`;
  const str = `/home/desenv01/estagio/novoprojeto/backend/uploads/${req.body.anexoNome}`;

  // const str = `/home/desenv01/estagio/novoprojeto/front/src/components/chamados/uploads/${req.body.anexoNome}`;

  const newChamado = new Chamado({
    tipo: req.body.tipo,
    contato: req.body.contato,
    criticidade: req.body.criticidade,
    assunto: req.body.assunto,
    descricao: req.body.descricao,
    status: req.body.status,
    exec: req.body.exec,
    id: req.body.id,
    anexo: str,
    nomeArq: req.body.nomeArq

    // anexos: req.body.anexos
  });

  newChamado.save().then(() => res.send('Chamado salvo com sucesso!!!!!!'));
});

app.get('/chamado', async (req, res) => {
  const chamados = await Chamado.find({});
  res.send(chamados);
});

app.get('/chamado/filter/:value', async (req, res) => {
  const chamados = await Chamado.find({ exec: req.params.exec });
  res.send(chamados);
});

app.delete('/chamado', async (req, res) => {
  const params = req.query;

  // const todo = await Todo.find({id: params})
  await Chamado.findOneAndRemove({ _id: params._id });
  res.send('Apagado com sucesso');
});

app.put('/chamado/:_id', async (req, res) => {
  const params = req.params;
  const body = req.body;
  // const todo = await Todo.find({id: params})
  await Chamado.findOneAndUpdate(
    { _id: params._id },
    { descricao: body.descricao, exec: req.body.exec, status: req.body.status },
    { new: true }
  );

  res.send('Editado com sucesso');
});

// ================= STATUS =================
const Status = require('./models/Status');

app.post('/status', (req, res) => {
  //   console.log(req);
  console.log(req.body);

  const newStatus = new Status({
    codigo: req.body.codigo,
    descricao: req.body.descricao
  });

  newStatus.save().then(() => res.send('Status salvo com sucesso!!!!!!'));
});

app.get('/status', async (req, res) => {
  const statuses = await Status.find({});
  res.send(statuses);
});

app.delete('/status', async (req, res) => {
  const params = req.query;

  // const todo = await Todo.find({id: params})
  await Status.findOneAndRemove({ _id: params._id });
  res.send('Apagado com sucesso');
});

app.put('/status/:_id', async (req, res) => {
  const params = req.params;
  const body = req.body;
  // const todo = await Todo.find({id: params})
  await Status.findOneAndUpdate(
    { _id: params._id },
    { descricao: body.descricao },
    { new: true }
  );
  res.send('Editado com sucesso');
});

// ================= TIPO =================
const Tipo = require('./models/Tipo');

app.post('/tipo', (req, res) => {
  //   console.log(req);
  console.log(req.body);

  const newTipo = new Tipo({
    codigo: req.body.codigo,
    descricao: req.body.descricao
  });

  newTipo.save().then(() => res.send('Tipo salvo com sucesso!!!!!!'));
});

app.get('/tipo', async (req, res) => {
  const tipos = await Tipo.find({});
  res.send(tipos);
});

app.delete('/tipo', async (req, res) => {
  const params = req.query;

  // const todo = await Todo.find({id: params})
  await Tipo.findOneAndRemove({ codigo: params.codigo });
  res.send('Apagado com sucesso');
});

app.put('/tipo/:_id', async (req, res) => {
  const params = req.params;
  const body = req.body;
  // const todo = await Todo.find({id: params})
  await Tipo.findOneAndUpdate(
    { _id: params._id },
    { descricao: body.descricao },
    { new: true }
  );
  res.send('Editado com sucesso');
});

//  GET POST - EXEC

const Exec = require('./models/Exec');

app.post('/exec', (req, res) => {
  //   console.log(req);
  console.log(req.body);

  const newExec = new Exec({
    user: req.body.user
  });

  newExec.save().then(() => res.send('Exec salvo com sucesso!!!!!!'));
});

app.get('/exec', async (req, res) => {
  const execs = await Exec.find({});
  res.send(execs);
});

//
// const Upload = require('./models/Upload');

app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  // const id = uuid.v4();
  const file = req.files.file;
  const id = req.body.id;
  const str = `${id}-${file.name}`;

  // const newUpload = new Upload({
  //   img: file.buffer
  // });

  // newUpload.save().then(() => res.send('Upload salvo'));

  file.mv(`${__dirname}/uploads/${str}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    // const fileStream = fs.createReadStream(
    //   `/home/desenv01/estagio/novoprojeto/backend/uploads/${str}`
    // );

    // fileStream.pipe(res);

    res.json({
      fileName: file.name,
      filePath: `/uploads/${str}`
    });
  });
});

app.get('/upload/:_id', async (req, res) => {
  const chamado = await Chamado.find({ _id: req.params._id });

  const fileStream = fs.createReadStream(`${chamado[0].anexo}`);

  fileStream.pipe(res);
});

// ========== SPECS

const port = 3001;

app.listen(port, () => console.log('Server running....!!!!'));

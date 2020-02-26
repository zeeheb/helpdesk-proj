const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect('mongodb://127.0.0.1:27020/admin', { useNewUrlParser: true })
  .then(() => console.log('mongodb connected !!!!!!!'))
  .catch(err => console.log(err));

const Chamado = require('./models/Chamado');

// ================= CHAMADOS =================

app.post('/chamado', (req, res) => {
  //   console.log(req);
  console.log(req.body);

  const newChamado = new Chamado({
    tipo: req.body.tipo,
    contato: req.body.contato,
    criticidade: req.body.criticidade,
    assunto: req.body.assunto,
    descricao: req.body.descricao,
    status: req.body.status,
    exec: req.body.exec
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

// ========== SPECS

const port = 3001;

app.listen(port, () => console.log('Server running....!!!!'));

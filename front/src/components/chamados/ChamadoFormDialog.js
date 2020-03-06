import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Actions from '../../actions/Actions';
import SelectTipo from './SelectTipo';
import FileUpload from './FileUpload';
import uuid from 'uuid';

export default function ChamadoFormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [tipo, setTipo] = React.useState('');
  const [contato, setContato] = React.useState('');
  const [criticidade, setCriticidade] = React.useState('');
  const [assunto, setAssunto] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [file, setFile] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    checkInputs();
  });

  const checkInputs = () => {
    if (!contato || !descricao || !criticidade || !assunto || !tipo || !file) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    Actions.getChamadosFromDb();
    setDisabled(true);
    setOpen(false);
  };

  const changeContato = e => {
    setContato(e.target.value);
  };

  const changeCriticidade = e => {
    setCriticidade(e.target.value);
  };

  const changeAssunto = e => {
    setAssunto(e.target.value);
  };

  const changeDescricao = e => {
    setDescricao(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!contato || !descricao || !criticidade || !assunto || !tipo || !file) {
      setDisabled(true);
      return alert('Informações faltando');
    }

    const myid = uuid.v4();
    const anexoNome = `${myid}-${file.name}`;

    const data = {
      tipo,
      contato,
      criticidade,
      assunto,
      descricao,
      exec: props.exec,
      status: 'Status inicial',
      id: myid,
      anexoNome,
      nomeArq: file.name
    };
    setDisabled(true);
    saveFile(myid);
    Actions.saveChamadoToDb(data);
    setOpen(false);
  };

  const handleChangeTipo = value => {
    setTipo(value);
  };

  const handleUpload = value => {
    setFile(value);
  };

  const saveFile = async id => {
    const data = new FormData();
    data.append('file', file);
    data.append('id', id);

    Actions.saveUploadToDb(data);
  };

  const handleSubmitFile = () => {
    setDisabled(false);
  };

  return (
    <div>
      <Button
        variant='outlined'
        color='Black'
        fullWidth
        onClick={handleClickOpen}
        className='btn'
        type='submit'
      >
        <AddIcon></AddIcon>
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Novo chamado!</DialogTitle>
        <DialogContent>
          <TextField
            margin='dense'
            id='name'
            label='Usuário'
            type='text'
            fullWidth
            value={props.exec}
            helperText='Definido na tela de chamados'
            InputProps={{
              readOnly: true
            }}
          />
          <SelectTipo onChangeTipo={handleChangeTipo}></SelectTipo>

          <TextField
            margin='dense'
            id='name'
            label='Contato'
            type='text'
            fullWidth
            onChange={changeContato}
          />
          <TextField
            margin='dense'
            id='name'
            label='Criticidade'
            type='text'
            fullWidth
            onChange={changeCriticidade}
          />
          <TextField
            margin='dense'
            id='name'
            label='Assunto'
            type='text'
            fullWidth
            onChange={changeAssunto}
          />
          <TextField
            margin='dense'
            id='name'
            label='Descrição'
            type='text'
            fullWidth
            onChange={changeDescricao}
          />

          <FileUpload onSubmitBtn={handleSubmitFile} onUpload={handleUpload} />
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose} color='black'>
            Cancelar
          </Button>
          <Button
            disabled={disabled}
            onClick={e => {
              onSubmit(e);
              handleClose();
            }}
            variant='outlined'
            color='black'
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

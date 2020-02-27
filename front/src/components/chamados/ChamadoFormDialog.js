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
// import { Typography } from '@material-ui/core';
// import SelectStatus from './SelectStatus';
// import Store from '../../stores/Store';

export default function ChamadoFormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [tipo, setTipo] = React.useState('');
  // const [execs] = React.useState(props.execs);
  // const [exec, setExec] = React.useState('');
  const [contato, setContato] = React.useState('');
  const [criticidade, setCriticidade] = React.useState('');
  const [assunto, setAssunto] = React.useState('');
  const [descricao, setDescricao] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    Actions.getChamadosFromDb();
    setOpen(false);
  };

  // const changeExec = e => {
  //   setExec(e.target.value);
  // };

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
    if (!contato || !descricao || !criticidade || !assunto || !tipo) {
      Actions.getChamadosFromDb();
      return alert('sem codigo ou descricao');
    }

    const data = { tipo, contato, criticidade, assunto, descricao };
    Actions.saveChamadoToDb(data);
    setOpen(false);
  };

  const handleChangeTipo = value => {
    setTipo(value);
  };

  // const handleChangeStatus = value => {
  //   setStatus(value);
  // };

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
          {/* <Typography variant='h6'>Chamado para: {props.exec}</Typography> */}

          <TextField
            margin='dense'
            id='name'
            label='Executante'
            type='text'
            fullWidth
            value={props.exec}
            helperText='Definido na tela de chamados'
            // onChange={changeContato}
          />
          <SelectTipo onChangeTipo={handleChangeTipo}></SelectTipo>

          {/* <SelectStatus onChangeStatus={handleChangeStatus}></SelectStatus> */}

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
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose} color='black'>
            Cancelar
          </Button>
          <Button
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

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Actions from '../../actions/Actions';

export default function TipoFormDialog() {
  const [open, setOpen] = React.useState(false);
  const [codigo, setCodigo] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    checkInputs();
  });

  const checkInputs = () => {
    if (!codigo || !descricao) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeCodigo = e => {
    setCodigo(e.target.value);
  };

  const changeDescricao = e => {
    setDescricao(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!codigo || !descricao) {
      return alert('sem codigo ou descricao');
    }

    const data = { codigo, descricao };
    Actions.saveTipoToDb(data);
    setDisabled(true);
    setOpen(false);
  };

  return (
    <div>
      <Button
        fullWidth
        variant='outlined'
        color='Black'
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
        <DialogTitle id='form-dialog-title'>Novo tipo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Código'
            type='number'
            fullWidth
            onChange={changeCodigo}
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
            disabled={disabled}
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

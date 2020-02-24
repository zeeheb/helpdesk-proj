import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import Actions from '../../actions/Actions';

export default function EditFormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [descricao, setDescricao] = React.useState(props.data.descricao);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeDescricao = e => {
    setDescricao(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!descricao) {
      return alert('sem descricao');
    }

    const data = { descricao };
    Actions.editTipoFromDb(data, props.data._id);
    setOpen(false);
  };

  return (
    <div>
      <Button style={{ float: 'right' }} onClick={handleClickOpen}>
        <EditIcon></EditIcon>
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Editar descrição</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Nova descrição'
            type='text'
            fullWidth
            onChange={changeDescricao}
            value={descricao}
          />
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            variant='outlined'
            onClick={handleClose}
            color='black'
          >
            Cancelar
          </Button>
          <Button
            fullWidth
            variant='outlined'
            color='black'
            onClick={e => {
              onSubmit(e);
              handleClose();
            }}
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SelectStatus from './SelectStatus';
import Actions from '../../actions/Actions';
import {
  TableRow,
  Table,
  Typography,
  TableCell
  // InputLabel
} from '@material-ui/core';
// import Store from '../../stores/Store';
import SelectExec from './SelectExec';

export default function MoveChamadoDialog(props) {
  const typoStyle = {
    float: 'left',
    paddingTop: '5px'
    // textAlign: 'center'
  };

  const rowStyle = {
    display: 'flex'
  };

  //   React.useEffect(() => {
  //       Store.addChangeListener(onChange);
  //       Actions.get
  //   })

  const [open, setOpen] = React.useState(false);
  // const [tipo] = React.useState(props.data.tipo);
  //   const [contato] = React.useState(props.data.contato);
  // const [criticidade] = React.useState(props.data.criticidade);
  // const [assunto] = React.useState(props.data.assunto);
  // const [descricao] = React.useState(props.data.descricao);
  const [exec, setExec] = React.useState(props.data.chamado);
  const [status, setStatus] = React.useState(props.data.chamado);

  const handleClickOpen = () => {
    Actions.getChamadosFromDb();
    setOpen(true);
  };

  const handleClose = () => {
    Actions.getChamadosFromDb();
    setOpen(false);
  };

  const handleChangeStatus = value => {
    // Actions.getChamadosFromDb();
    setStatus(value);
  };

  const handleChangeExec = value => {
    setExec(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!status || !exec) {
      return alert('sem status');
    }

    const data = { status, exec };
    Actions.editChamadoFromDb(data, props.data._id);
    setOpen(false);
  };

  return (
    <div>
      <Button
        color='Black'
        onClick={handleClickOpen}
        className='btn'
        type='submit'
        style={{ float: 'right' }}
      >
        <ArrowForwardIcon></ArrowForwardIcon>
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          <Typography variant='h4'>Movimentação de chamado</Typography>
        </DialogTitle>
        <DialogContent>
          <Table size='small'>
            <TableRow style={rowStyle}>
              <TableCell style={{ flex: 1 }}>
                <Typography variant='h6'>Tipo: </Typography>
              </TableCell>
              <TableCell style={{ flex: 3 }}>
                <Typography style={typoStyle}>{props.data.tipo} </Typography>
              </TableCell>
            </TableRow>

            <TableRow style={rowStyle}>
              <TableCell style={{ flex: 1 }}>
                <Typography variant='h6'>Contato: </Typography>
              </TableCell>
              <TableCell style={{ flex: 3 }}>
                <Typography style={typoStyle}>{props.data.contato} </Typography>
              </TableCell>
            </TableRow>

            <TableRow style={rowStyle}>
              <TableCell style={{ flex: 1 }}>
                <Typography variant='h6'>Criticidade: </Typography>
              </TableCell>
              <TableCell style={{ flex: 3 }}>
                <Typography style={typoStyle}>
                  {props.data.criticidade}{' '}
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow style={rowStyle}>
              <TableCell style={{ flex: 1 }}>
                <Typography variant='h6'>Assunto: </Typography>
              </TableCell>
              <TableCell style={{ flex: 3 }}>
                <Typography style={typoStyle}>{props.data.assunto} </Typography>
              </TableCell>
            </TableRow>
            <TableRow style={rowStyle}>
              <TableCell style={{ flex: 1 }}>
                <Typography variant='h6'>Descrição: </Typography>
              </TableCell>
              <TableCell style={{ flex: 3 }}>
                <Typography style={typoStyle}>
                  {props.data.descricao}{' '}
                </Typography>
              </TableCell>
            </TableRow>
          </Table>

          <Typography variant='h5' style={{ marginTop: '20px' }}>
            Novas informações
          </Typography>
          <SelectExec onChangeExec={handleChangeExec}></SelectExec>
          <SelectStatus onChangeStatus={handleChangeStatus}></SelectStatus>
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
            Movimentar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

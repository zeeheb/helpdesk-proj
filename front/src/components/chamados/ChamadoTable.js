import React, { Component } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import {
  Table,
  TableRow,
  TableCell,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions
} from '@material-ui/core';
import Actions from '../../actions/Actions';

export class ChamadoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      fileURL:
        'https://www.arteshowestruturas.com.br/wp-content/uploads/sites/699/2017/01/SEM-IMAGEM-9.jpg'
    };
  }

  //   componentDidMount() {
  //     this.loadImage();
  //   }

  handleClickOpen = () => {
    this.setState({ open: true });
    this.loadImage();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  loadImage = async () => {
    const blob = await Actions.showImage(this.props.chamado);
    const fileURL = URL.createObjectURL(new Blob([blob]), {
      type: 'image/*'
    });
    this.setState({ fileURL: fileURL || this.state.fileURL });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} style={{ float: 'right' }}>
          <InfoIcon></InfoIcon>
        </Button>

        <Dialog
          fullWidth
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle> Informações do chamado.</DialogTitle>
          <DialogContent>
            <Table size='small'>
              <TableRow style={rowStyle}>
                <TableCell style={{ flex: 1 }}>
                  <Typography variant='h6'>Usuário: </Typography>
                </TableCell>
                <TableCell style={{ flex: 3 }}>
                  <Typography style={typoStyle}>
                    {this.props.chamado.exec}{' '}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow style={rowStyle}>
                <TableCell style={{ flex: 1 }}>
                  <Typography variant='h6'>Tipo: </Typography>
                </TableCell>
                <TableCell style={{ flex: 3 }}>
                  <Typography style={typoStyle}>
                    {this.props.chamado.tipo}{' '}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow style={rowStyle}>
                <TableCell style={{ flex: 1 }}>
                  <Typography variant='h6'>Status: </Typography>
                </TableCell>
                <TableCell style={{ flex: 3 }}>
                  <Typography style={typoStyle}>
                    {this.props.chamado.status}{' '}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow style={rowStyle}>
                <TableCell style={{ flex: 1 }}>
                  <Typography variant='h6'>Contato: </Typography>
                </TableCell>
                <TableCell style={{ flex: 3 }}>
                  <Typography style={typoStyle}>
                    {this.props.chamado.contato}{' '}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow style={rowStyle}>
                <TableCell style={{ flex: 1 }}>
                  <Typography variant='h6'>Criticidade: </Typography>
                </TableCell>
                <TableCell style={{ flex: 3 }}>
                  <Typography style={typoStyle}>
                    {this.props.chamado.criticidade}{' '}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow style={rowStyle}>
                <TableCell style={{ flex: 1 }}>
                  <Typography variant='h6'>Assunto: </Typography>
                </TableCell>
                <TableCell style={{ flex: 3 }}>
                  <Typography style={typoStyle}>
                    {this.props.chamado.assunto}{' '}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow style={rowStyle}>
                <TableCell style={{ flex: 1 }}>
                  <Typography variant='h6'>Descrição: </Typography>
                </TableCell>
                <TableCell style={{ flex: 3 }}>
                  <Typography style={typoStyle}>
                    {this.props.chamado.descricao}{' '}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <Typography
                  style={{ marginBottom: '10px', marginLeft: '16px' }}
                  variant='h6'
                >
                  Anexo:
                </Typography>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <img
                    height='200'
                    width='300'
                    alt='imagem'
                    src={this.state.fileURL}
                  ></img>
                </TableCell>
              </TableRow>
            </Table>
          </DialogContent>
          <DialogActions>
            <Button variant='outlined' onClick={this.handleClose} color='black'>
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
const rowStyle = {
  display: 'flex'
  // overflow: 'hidden'
  // flex: 1
};

const typoStyle = {
  float: 'left',
  paddingTop: '5px'
  // textAlign: 'center'
};

export default ChamadoTable;

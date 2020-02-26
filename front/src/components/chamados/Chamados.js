import React, { Component } from 'react';
import Store from '../../stores/Store';
import Actions from '../../actions/Actions';
import AddChamado from './AddChamado';
import ChamadoItem from './ChamadoItem';
import { TableRow, TableCell, Typography } from '@material-ui/core';
import Snackbar from './Snackbar';

class Chamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chamados: []
      // execs: ['admin', 'user']
    };
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
    Actions.getChamadosFromDb();
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange = () => {
    const dataFromStore = Store.getChamadosData();
    this.setState({ chamados: dataFromStore });
  };

  delChamado = (_id, callback) => {
    Actions.deleteChamadoFromDb(_id, callback);
  };

  onDelete = () => {
    this.setState({ showError: true });
  };

  onDeleteClose = () => {
    this.setState({ showError: false });
  };

  render() {
    return (
      <div>
        <AddChamado execs={this.state.execs}> </AddChamado>

        <TableRow
          style={{
            display: 'flex',
            backgroundColor: '#e3ddcc',
            marginTop: '10px'
          }}
        >
          <TableCell style={{ flex: 1 }}>
            <Typography variant='h6' align='left'>
              Tipo
            </Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography variant='h6'>Contato</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography variant='h6'>Criticidade</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography variant='h6'>Assunto</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography variant='h6'>Descrição</Typography>
          </TableCell>
          <TableCell style={{ flex: 2 }}>
            <Typography></Typography>
          </TableCell>
        </TableRow>

        {this.state.showError && (
          <Snackbar onDeleteClose={this.onDeleteClose}></Snackbar>
        )}

        {this.state.chamados.map(chamado => (
          <ChamadoItem
            onDelete={this.onDelete}
            delChamado={this.delChamado}
            chamado={chamado}
          ></ChamadoItem>
        ))}
      </div>
    );
  }
}

export default Chamados;

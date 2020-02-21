import React, { Component } from 'react';
import Store from '../../stores/Store';
import Actions from '../../actions/Actions';
import AddChamado from './AddChamado';
import ChamadoItem from './ChamadoItem';
import { TableRow, TableCell, Typography } from '@material-ui/core';

class Chamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chamados: []
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
    const dataFromStore = Store.getItemData();
    this.setState({ chamados: dataFromStore });
  };

  delChamado = (codigo, callback) => {
    Actions.deleteChamadoFromDb(codigo, callback);
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
        <AddChamado> </AddChamado>

        <TableRow style={{ display: 'flex' }}>
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

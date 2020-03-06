import React, { Component } from 'react';
import TiposItem from './TiposItem';
import Store from '../../stores/Store';
import Actions from '../../actions/Actions';
import AddTipo from './AddTipo';
import { TableRow, TableCell, Typography } from '@material-ui/core';
import SnackBar from './SnackBar';

export class Tipos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipos: []
    };
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
    Actions.getTiposFromDb();
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange = () => {
    const dataFromStore = Store.getTiposData();
    this.setState({ tipos: dataFromStore });
  };

  addTipo = (codigo, descricao) => {
    Actions.saveItemToDb({
      codigo,
      descricao
    });
  };

  delTipo = (codigo, callback) => {
    Actions.deleteTipoFromDb(codigo, callback);
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
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ flex: 6 }}></div>
          <div style={{ flex: 5 }}>
            <AddTipo addTipo={this.addTipo}></AddTipo>
          </div>
          <div style={{ flex: 6 }}></div>
        </div>

        <TableRow
          style={{
            display: 'flex',
            backgroundColor: '#e3ddcc',
            marginTop: '10px',
            marginBottom: '5px'
          }}
        >
          <TableCell style={{ flex: 1 }}>
            <Typography variant='h6' align='left'>
              Código
            </Typography>
          </TableCell>
          <TableCell style={{ flex: 13, float: 'left' }}>
            <Typography variant='h6'>Descrição</Typography>
          </TableCell>
        </TableRow>

        {this.state.showError && (
          <SnackBar onDeleteClose={this.onDeleteClose} />
        )}

        {this.state.tipos.map(tipo => (
          <TiposItem
            onDelete={this.onDelete}
            delTipo={this.delTipo}
            tipo={tipo}
          ></TiposItem>
        ))}
      </div>
    );
  }
}

export default Tipos;

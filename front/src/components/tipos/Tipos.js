import React, { Component } from 'react';
import TiposItem from './TiposItem';
import Store from '../../stores/Store';
import Actions from '../../actions/Actions';
import AddTipo from './AddTipo';
import { TableRow, TableCell, Typography } from '@material-ui/core';

export class Tipos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipos: []
    };
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
    Actions.getTipoFromDb();
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange = () => {
    const dataFromStore = Store.getItemData();
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

  render() {
    return (
      <div>
        <AddTipo addTipo={this.addTipo}></AddTipo>
        <TableRow style={{ display: 'flex' }}>
          <TableCell style={{ flex: 1 }}>
            <Typography align='left'>Código</Typography>
          </TableCell>
          <TableCell style={{ flex: 13, float: 'left' }}>
            <Typography>Descrição</Typography>
          </TableCell>
        </TableRow>

        {this.state.tipos.map(tipo => (
          <TiposItem
            onDelete={this.props.onDelete}
            delTipo={this.delTipo}
            tipo={tipo}
          ></TiposItem>
        ))}
      </div>
    );
  }
}

export default Tipos;

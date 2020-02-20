import React, { Component } from 'react';
import StatusItem from './StatusItem';
import Store from '../../stores/Store';
import Actions from '../../actions/Actions';
import AddStatus from './AddStatus';
import { TableRow, TableCell, Typography } from '@material-ui/core';
import SnackBar from './SnackBar';

export class Statuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statuses: []
    };
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
    Actions.getStatusFromDb();
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange = () => {
    const dataFromStore = Store.getItemData();
    this.setState({ statuses: dataFromStore });
  };

  addStatus = (codigo, descricao) => {
    Actions.saveItemToDb({
      codigo,
      descricao
    });
  };

  delStatus = (codigo, callback) => {
    Actions.deleteStatusFromDb(codigo, callback);
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
        <AddStatus addTipo={this.addTipo}></AddStatus>
        <TableRow style={{ display: 'flex' }}>
          <TableCell style={{ flex: 1 }}>
            <Typography align='left'>Código</Typography>
          </TableCell>
          <TableCell style={{ flex: 13, float: 'left' }}>
            <Typography>Descrição</Typography>
          </TableCell>
        </TableRow>

        {this.state.showError && (
          <SnackBar onDeleteClose={this.onDeleteClose} />
        )}

        {this.state.statuses.map(status => (
          <StatusItem
            onDelete={this.onDelete}
            delStatus={this.delStatus}
            status={status}
          ></StatusItem>
        ))}
      </div>
    );
  }
}

export default Statuses;

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
    Actions.getStatusesFromDb();
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange = () => {
    const dataFromStore = Store.getStatusesData();
    this.setState({ statuses: dataFromStore });
  };

  // addStatus = (codigo, descricao) => {
  //   Actions.saveItemToDb({
  //     codigo,
  //     descricao
  //   });
  // };

  delStatus = (_id, callback) => {
    Actions.deleteStatusFromDb(_id, callback);
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
            <AddStatus></AddStatus>
          </div>
          <div style={{ flex: 6 }}></div>
        </div>

        <TableRow
          style={{
            display: 'flex',
            backgroundColor: '#e3ddcc',
            marginTop: '10px'
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

        {/* <TableRow
          style={{
            display: 'flex',
            backgroundColor: '#edeadf',
            marginTop: '5px'
          }}
        >
          <TableCell style={{ flex: 1 }}>
            <Typography>0</Typography>
          </TableCell>
          <TableCell style={{ flex: 13 }}>
            <Typography>Status Inicial</Typography>
          </TableCell>
        </TableRow> */}

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

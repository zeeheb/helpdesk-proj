import React, { Component } from 'react';
import Store from '../../stores/Store';
import EditFormDialog from './StatusFormDialog';
// import TextField from '@material-ui/core/TextField';

export class AddStatus extends Component {
  state = {
    codigo: ' ',
    descricao: ' '
  };

  componentDidMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange = () => {
    const dataFromDb = Store.getItemData();
    if (dataFromDb) {
      this.setState({
        codigo: dataFromDb.codigo,
        descricao: dataFromDb.descricao
      });
    }
  };

  render() {
    return (
      <div>
        <EditFormDialog></EditFormDialog>
      </div>
    );
  }
}

export default AddStatus;

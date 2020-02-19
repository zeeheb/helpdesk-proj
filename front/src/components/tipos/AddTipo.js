import React, { Component } from 'react';
import Store from '../../stores/Store';
import TipoFormDialog from './TipoFormDialog';
// import TextField from '@material-ui/core/TextField';

export class AddTipo extends Component {
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
        <TipoFormDialog></TipoFormDialog>
      </div>
    );
  }
}

export default AddTipo;

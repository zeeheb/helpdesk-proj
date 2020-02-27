import React, { Component } from 'react';
// import Store from '../../stores/Store';
import ChamadoFormDialog from './ChamadoFormDialog';

class AddChamado extends Component {
  render() {
    return (
      <div>
        <ChamadoFormDialog exec={this.props.exec}></ChamadoFormDialog>
      </div>
    );
  }
}

export default AddChamado;

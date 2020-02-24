import React, { Component } from 'react';
// import Store from '../../stores/Store';
import ChamadoFormDialog from './ChamadoFormDialog';

class AddChamado extends Component {
  // state = {
  //   tipo: ' ',
  //   contato: ' ',
  //   criticidade: ' ',
  //   assunto: ' ',
  //   descricao: ' ',
  //   anexo: ' '
  // };

  // componentDidMount() {
  //   Store.addChangeListener(this.onChange);
  // }

  // componentWillUnmount() {
  //   Store.removeChangeListener(this.onChange);
  // }

  // // onChange = () => {
  // //   const dataFromDb = Store.getItemData();
  // //   if (dataFromDb) {
  // //     this.setState({
  // //       tipo: dataFromDb.tipo,
  // //       contato: dataFromDb.contato,
  // //       criticidade: dataFromDb.criticidade,
  // //       assunto: dataFromDb.assunto,
  // //       descricao: dataFromDb.descricao,
  // //       anexo: dataFromDb.anexo
  // //     });
  // //   }
  // // };

  render() {
    return (
      <div>
        <ChamadoFormDialog></ChamadoFormDialog>
      </div>
    );
  }
}

export default AddChamado;

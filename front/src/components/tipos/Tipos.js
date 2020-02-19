import React, { Component } from 'react';
import TiposItem from './TiposItem';
import Store from '../../stores/Store';
import Actions from '../../actions/Actions';
import AddTipo from './AddTipo';

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

  render() {
    return (
      <div>
        <AddTipo addTipo={this.addTipo}></AddTipo>
        {this.state.tipos.map(tipo => (
          <TiposItem tipo={tipo}></TiposItem>
        ))}
      </div>
    );
  }
}

export default Tipos;

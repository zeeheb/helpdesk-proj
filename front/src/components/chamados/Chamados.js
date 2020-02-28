import React, { Component } from 'react';
import Store from '../../stores/Store';
import Actions from '../../actions/Actions';
import AddChamado from './AddChamado';
import ChamadoItem from './ChamadoItem';
import { TableRow, TableCell, Typography } from '@material-ui/core';
import Snackbar from './Snackbar';
import SelectExec from './SelectExec';
import _ from 'lodash';

class Chamados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chamados: [],
      exec: 'admin',
      file: '',
      filename: ''

      // exec: ''
    };
  }

  componentDidMount() {
    Store.addChangeListener(this.onChangeFunc);
    Actions.getChamadosFromDb();
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChangeFunc);
  }

  onChangeFunc = () => {
    const dataFiltered = Store.getChamadosFilterData();
    if (!dataFiltered) {
      const dataFromStore = Store.getChamadosData();
      this.setState({ chamados: dataFromStore });
    } else {
      this.setState({ chamados: dataFiltered });
    }

    // const dataFromStore = Store.getChamadosData();
    // this.setState({ chamados: dataFromStore });
  };

  delChamado = (_id, callback) => {
    Actions.deleteChamadoFromDb(_id, callback);
  };

  onDelete = () => {
    this.setState({ showError: true });
  };

  onDeleteClose = () => {
    this.setState({ showError: false });
  };

  handleChangeExec = value => {
    this.setState({ exec: value });
    // Actions.getChamadosFilterFromDb(value);
    const dataFromStore = Store.getChamadosData();
    let dataFiltered = [];
    if (value !== 'admin') {
      dataFromStore.forEach(data => {
        if (data.exec === value) {
          // REVISAR
          dataFiltered = _.concat(dataFiltered, data);
        }
      });
      Store.setChamadosFilterData(dataFiltered);
      this.setState({ chamados: dataFiltered });
    } else {
      this.setState({ chamados: dataFromStore });
    }
  };

  render() {
    return (
      <div>
        <div style={divStyle}>
          <div style={{ flex: 2 }}>
            {/* <SelectExec></SelectExec> */}
            <SelectExec onChangeExec={this.handleChangeExec}></SelectExec>
          </div>
          <div style={{ flex: 4 }}></div>
          <div style={{ flex: 5, marginTop: '15px' }}>
            <AddChamado exec={this.state.exec}> </AddChamado>
          </div>
          <div style={{ flex: 6 }}> </div>
        </div>
        <div style={{ padding: '10px' }}></div>

        <TableRow
          style={{
            display: 'flex',
            backgroundColor: '#e3ddcc',
            marginTop: '10px'
          }}
        >
          <TableCell style={{ flex: 1 }}>
            <Typography variant='h6' align='left'>
              Tipo
            </Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography variant='h6'>Usuário</Typography>
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

        {this.state.showError && (
          <Snackbar onDeleteClose={this.onDeleteClose}></Snackbar>
        )}

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

const divStyle = {
  display: 'flex',
  width: '100%'
  // margin: '0 auto',
  // background: '#333',
  // color: '#fff'
};

export default Chamados;

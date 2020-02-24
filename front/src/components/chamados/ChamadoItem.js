import React, { Component } from 'react';
import { TableRow, TableCell, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoveChamadoDialog from './MoveChamadoDialog';

class ChamadoItem extends Component {
  onClickDel = () => {
    const _id = this.props.chamado._id;
    this.props.delChamado(_id, this.props.onDelete);
  };

  render() {
    const {
      tipo,
      contato,
      criticidade,
      assunto,
      descricao
    } = this.props.chamado;

    return (
      <div>
        {/* <Button style={{ display: 'flex' }}> */}
        <TableRow style={rowStyle}>
          <TableCell style={{ flex: 1 }}>
            <Typography>{tipo}</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography>{contato}</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography>{criticidade}</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography>{assunto}</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography>{descricao}</Typography>
          </TableCell>

          <TableCell style={{ flex: 1.5 }}>
            <MoveChamadoDialog data={this.props.chamado}></MoveChamadoDialog>
          </TableCell>
          <TableCell style={{ flex: 0 }}>
            <Button onClick={this.onClickDel} style={{ float: 'right' }}>
              <DeleteIcon></DeleteIcon>
            </Button>
          </TableCell>
        </TableRow>
        {/* </Button> */}
      </div>
    );
  }
}

const rowStyle = {
  display: 'flex'
  // flex: 1
};

export default ChamadoItem;

import React, { Component } from 'react';
import { TableRow, TableCell, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class ChamadoItem extends Component {
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

          <TableCell style={{ flex: 2 }}>
            <Button style={{ float: 'right' }}>
              <DeleteIcon></DeleteIcon>
            </Button>
          </TableCell>
        </TableRow>
      </div>
    );
  }
}

const rowStyle = {
  display: 'flex'
};

export default ChamadoItem;

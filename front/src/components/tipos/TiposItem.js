import React, { Component } from 'react';
import { TableRow, TableCell, Typography, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export class TiposItem extends Component {
  onClickDel = () => {
    const codigo = this.props.tipo.codigo;
    this.props.delTipo(codigo, this.props.onDelete);
  };

  render() {
    const descricao = this.props.tipo.descricao;
    const codigo = this.props.tipo.codigo;

    return (
      <div>
        <TableRow style={rowStyle}>
          <TableCell style={{ flex: 1 }}>
            <Typography>{codigo}</Typography>
          </TableCell>
          <TableCell style={{ flex: 10 }}>
            <Typography>{descricao}</Typography>
          </TableCell>
          <TableCell style={{ flex: 1, float: 'right' }}>
            <Button>
              <EditIcon></EditIcon>
            </Button>
          </TableCell>
          <TableCell style={{ flex: 1, float: 'right' }}>
            <Button onClick={this.onClickDel}>
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

export default TiposItem;

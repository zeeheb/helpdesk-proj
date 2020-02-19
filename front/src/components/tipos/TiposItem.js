import React, { Component } from 'react';
import { TableRow, TableCell, Typography, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export class TiposItem extends Component {
  render() {
    const descricao = this.props.tipo.descricao;

    return (
      <div>
        <TableRow style={rowStyle}>
          <TableCell style={{ flex: 4 }}>
            <Typography>{descricao}</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Button>
              <EditIcon></EditIcon>
            </Button>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Button>
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

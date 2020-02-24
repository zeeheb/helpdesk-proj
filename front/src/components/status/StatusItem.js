import React, { Component } from 'react';
import { TableRow, TableCell, Typography, Button } from '@material-ui/core';
// import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EditFormDialog from './EditFormDialog';

export class StatusItem extends Component {
  onClickDel = () => {
    const _id = this.props.status._id;
    this.props.delStatus(_id, this.props.onDelete);
  };

  render() {
    const descricao = this.props.status.descricao;
    const codigo = this.props.status.codigo;

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
            <EditFormDialog data={this.props.status}></EditFormDialog>
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

export default StatusItem;

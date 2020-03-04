import React, { Component } from 'react';
import { TableRow, TableCell, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoveChamadoDialog from './MoveChamadoDialog';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileSaver from 'file-saver';

class ChamadoItem extends Component {
  // this.state = {

  // }

  onClickDel = () => {
    const _id = this.props.chamado._id;
    this.props.delChamado(_id, this.props.onDelete);
  };

  onDownload = () => {
    // const _id = this.props.chamado._id;
    // downloadImage = async id =>
    fetch(`http://localhost:3001/upload/${this.props.chamado._id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.blob())
      .then(res => {
        this.setState({
          fileURL: URL.createObjectURL(new Blob([res]), { type: 'image/*' })
        });
        // const blobUrl = res.blob();
        FileSaver.saveAs(
          `${this.state.fileURL}`,
          `${this.props.chamado.nomeArq}`
        );
      });

    // FileSaver.saveAs(
    //   `${this.props.chamado.anexo}`,
    //   `${this.props.chamado.nomeArq}`
    // );
  };

  render() {
    return (
      <div>
        {/* <Button style={{ display: 'flex' }}> */}
        <TableRow style={rowStyle}>
          <TableCell style={{ flex: 1 }}>
            <Typography>{this.props.chamado.tipo}</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography>{this.props.chamado.exec}</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography>{this.props.chamado.contato}</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography>{this.props.chamado.criticidade}</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography>{this.props.chamado.assunto}</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography>{this.props.chamado.descricao}</Typography>
          </TableCell>

          <TableCell style={{ flex: 0 }}>
            <Button style={{ float: 'right' }} onClick={this.onDownload}>
              <GetAppIcon></GetAppIcon>
            </Button>
          </TableCell>
          <TableCell style={{ flex: 0 }}>
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
  // overflow: 'hidden'
  // flex: 1
};

export default ChamadoItem;

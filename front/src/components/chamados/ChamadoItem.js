import React, { Component } from 'react';
import { TableRow, TableCell, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoveChamadoDialog from './MoveChamadoDialog';
import GetAppIcon from '@material-ui/icons/GetApp';
// import FileSaver from 'file-saver';
import Actions from '../../actions/Actions';
import ChamadoTable from './ChamadoTable';

class ChamadoItem extends Component {
  componentDidMount() {
    this.getURLInfo();
  }

  onClickDel = () => {
    const _id = this.props.chamado._id;
    this.props.delChamado(_id, this.props.onDelete);
  };

  onDownload = () => {
    // const _id = this.props.chamado._id;
    Actions.downloadImage(this.props.chamado);
    // .then(this.setState(fileURL);
  };

  getURLInfo = () => {
    const fileURL = Actions.showImage(this.props.chamado);
    this.setState({ fileURL: fileURL });
  };

  render() {
    return (
      <div>
        {/* <Button style={{ display: 'flex' }}> */}
        <TableRow style={rowStyle}>
          {/* <TableCell style={{ flex: 1 }}>
            <Typography>{this.props.chamado.tipo}</Typography>
          </TableCell> */}
          <TableCell style={{ flex: 4 }}>
            <Typography>{this.props.chamado.exec}</Typography>
          </TableCell>
          {/* <TableCell style={{ flex: 1 }}>
            <Typography>{this.props.chamado.contato}</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography>{this.props.chamado.criticidade}</Typography>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <Typography>{this.props.chamado.assunto}</Typography>
          </TableCell> */}
          <TableCell style={{ flex: 1 }}>
            <Typography></Typography>
          </TableCell>
          <TableCell style={{ flex: 100 }}>
            <Typography>{this.props.chamado.descricao}</Typography>
          </TableCell>

          <TableCell style={{ flex: 1 }}>
            <ChamadoTable
              chamado={this.props.chamado}
              url={this.fileURL}
              // onClickInfo={this.onInfo}
            ></ChamadoTable>
          </TableCell>

          <TableCell style={{ flex: 1 }}>
            <Button
              style={{ float: 'right' }}
              // onSubmitBtn={this.onSubmitFile}
              onClick={this.onDownload}
            >
              <GetAppIcon></GetAppIcon>
            </Button>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
            <MoveChamadoDialog data={this.props.chamado}></MoveChamadoDialog>
          </TableCell>
          <TableCell style={{ flex: 1 }}>
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

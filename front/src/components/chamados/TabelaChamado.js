import React, { Component } from 'react';

export class TabelaChamado extends Component {
  render() {
    return (
      <div>
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

          <TableCell style={{ flex: 1.5 }}>
            <MoveChamadoDialog data={this.props.chamado}></MoveChamadoDialog>
          </TableCell>
          <TableCell style={{ flex: 0 }}>
            <Button onClick={this.onClickDel} style={{ float: 'right' }}>
              <DeleteIcon></DeleteIcon>
            </Button>
          </TableCell>
        </TableRow>
      </div>
    );
  }
}

export default TabelaChamado;

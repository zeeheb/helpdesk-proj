import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tipos from '../tipos/Tipos';
import { Typography } from '@material-ui/core';
// import { TableRow, TableCell } from '@material-ui/core';

class Tipo extends Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
          <Typography variant='h3'>Tipos</Typography>
          <Link style={linkStyle} to='/'>
            {' '}
            <Typography>Voltar</Typography>{' '}
          </Link>
        </header>

        <Tipos></Tipos>
      </div>
    );
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px'
};

const linkStyle = {
  color: 'orange',
  textDecoration: 'none'
};

export default Tipo;

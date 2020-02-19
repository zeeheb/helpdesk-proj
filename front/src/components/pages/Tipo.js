import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tipos from '../tipos/Tipos';

class Tipo extends Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
          <h1>Tipos</h1>
          <Link style={linkStyle} to='/'>
            {' '}
            Voltar{' '}
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
  marginBottom: '10px'
};

const linkStyle = {
  color: 'orange',
  textDecoration: 'none'
};

export default Tipo;

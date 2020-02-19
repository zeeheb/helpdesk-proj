import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Chamado extends Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
          <h1>Chamados</h1>
          <Link style={linkStyle} to='/tipos'>
            {' '}
            Tipos{' '}
          </Link>{' '}
          {'|'}
          <Link style={linkStyle} to='/status'>
            {' '}
            Status{' '}
          </Link>
        </header>
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

export default Chamado;

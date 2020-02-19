import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Status extends Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
          <h1>Status</h1>

          <Link style={linkStyle} to='/'>
            {' '}
            Voltar{' '}
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

export default Status;

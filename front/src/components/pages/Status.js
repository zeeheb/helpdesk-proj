import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Statuses from '../status/Statuses';
import { Typography } from '@material-ui/core';

export class Status extends Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
          <Typography variant='h3'>Status</Typography>
          <Link style={linkStyle} to='/'>
            {' '}
            <Typography>Voltar</Typography>{' '}
          </Link>
        </header>

        <Statuses></Statuses>
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

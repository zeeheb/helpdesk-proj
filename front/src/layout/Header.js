import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <Link style={linkStyle} to='/'>
        Home
      </Link>
      <Link style={linkStyle} to='/tipo'>
        Tipos
      </Link>
      <Link style={linkStyle} to='status'>
        Status
      </Link>
    </header>
  );
};

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

export default Header;

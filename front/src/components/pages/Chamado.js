import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Chamados from '../chamados/Chamados';
import SelectExec from '../chamados/SelectExec';

function Chamado() {
  // const users = {
  //   execs: [{ user: 'admin' }, { user: 'user1' }]
  // };
  // const [exec, setExec] = React.useState(0);
  // const changeExec = e => {
  //   setExec(e.target.value);
  // };

  return (
    <div>
      <header style={headerStyle}>
        <Typography variant='h3'>Chamados</Typography>
        <Link style={linkStyle} to='/tipos'>
          <Typography>Tipos</Typography>
        </Link>
        <Link style={linkStyle} to='/status'>
          <Typography>Status</Typography>
        </Link>

        {/* <SelectExec></SelectExec> */}
      </header>

      <Chamados></Chamados>
    </div>
  );
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
  textDecoration: 'none',
  marginBottom: '5px'
};

export default Chamado;

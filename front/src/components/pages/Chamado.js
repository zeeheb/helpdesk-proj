import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Chamados from '../chamados/Chamados';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// // import FolderIcon from '@material-ui/icons/Folder';
// import RestoreIcon from '@material-ui/icons/Restore';

function Chamado() {
  return (
    <div style={{ positon: 'relative', minHeight: '100vh' }}>
      <header style={headerStyle}>
        <Typography variant='h3'>Chamados</Typography>
        <Link style={linkStyle} to='/tipos'>
          <Typography>Tipos</Typography>
        </Link>
        <Link style={linkStyle} to='/status'>
          <Typography>Status</Typography>
        </Link>
      </header>

      <Chamados></Chamados>

      {/* <footer style={footerStyle}>

      </footer> */}
      {/* <div style={{ paddingBottom: '2.5rem' }}>
        <footer style={footerStyle}>
          <BottomNavigation>
            <BottomNavigationAction
              label='Recents'
              value='recents'
              icon={<RestoreIcon />}
            />
          </BottomNavigation>
          <p>teste</p>
        </footer>
      </div> */}
    </div>
  );
}

// const footerStyle = {
//   background: '#333',
//   color: '#fff',
//   position: 'absolute',
//   bottom: '0',
//   width: '100%',
//   height: '2.5rem'
//   // textAlign: 'center',
//   // padding: '2px',
//   // marginTop: '10px',
//   // borderRadius: '5px'
// };

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  // width: '50%',
  margin: '0 auto'
};

const linkStyle = {
  color: 'orange',
  textDecoration: 'none',
  marginBottom: '5px'
};

export default Chamado;

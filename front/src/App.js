import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chamado from './components/pages/Chamado';
import Status from './components/pages/Status';
import Tipo from './components/pages/Tipo';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/' component={Chamado} />
          <Route path='/tipos' component={Tipo} />
          <Route path='/status' component={Status} />
        </div>
      </Router>
    );
  }
}

export default App;

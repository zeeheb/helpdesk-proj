import { dispatch } from '../AppDispatcher';
import ActionTypes from '../ActionTypes';
// import _ from 'lodash';
import axios from 'axios';

class Actions {
  // GET, POST -  TIPOS

  saveTipoToDb = data => {
    axios
      .post('http://localhost:3001/tipo', data, {
        headers: {
          'content-type': 'application/json',
          // Accept: 'application/json'
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(() => {
        this.getTipoFromDb();
      })
      .catch(err => console.log(err));
  };

  getTipoFromDb() {
    axios
      .get('http://localhost:3001/tipo/')
      .then(res => {
        dispatch(ActionTypes.GETITEM_FROM_DB, res);
      })
      .catch(err => console.log(err));
  }

  deleteTipoFromDb(codigo, callback) {
    axios
      .delete(`http://localhost:3001/tipo?codigo=${codigo}`)
      .then(res => {
        // callback();
        this.getTipoFromDb();
      })
      .catch(err => console.log(err));
  }
}

export default new Actions();

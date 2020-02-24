import { dispatch } from '../AppDispatcher';
import ActionTypes from '../ActionTypes';
// import _ from 'lodash';
import axios from 'axios';

class Actions {
  // GET, POST, REMOVE, PUT -  TIPOS =====================================

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
        callback();
        this.getTipoFromDb();
      })
      .catch(err => console.log(err));
  }

  editTipoFromDb(data, _id) {
    axios
      .put(`http://localhost:3001/tipo/${_id}`, data)
      .then(res => {
        // callback();
        this.getTipoFromDb();
      })
      .catch(err => console.log(err));
  }

  //  GET, POST, REMOVE, PUT - STATUS =====================================

  saveStatusToDb = data => {
    axios
      .post('http://localhost:3001/status', data, {
        headers: {
          'content-type': 'application/json',
          // Accept: 'application/json'
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(() => {
        this.getStatusFromDb();
      })
      .catch(err => console.log(err));
  };

  getStatusFromDb() {
    axios
      .get('http://localhost:3001/status/')
      .then(res => {
        dispatch(ActionTypes.GETITEM_FROM_DB, res);
      })
      .catch(err => console.log(err));
  }

  deleteStatusFromDb(_id, callback) {
    axios
      .delete(`http://localhost:3001/status?_id=${_id}`)
      .then(res => {
        callback();
        this.getStatusFromDb();
      })
      .catch(err => console.log(err));
  }

  editStatusFromDb(data, _id) {
    axios
      .put(`http://localhost:3001/status/${_id}`, data)
      .then(res => {
        // callback();
        this.getStatusFromDb();
      })
      .catch(err => console.log(err));
  }

  //  GET, POST, REMOVE, PUT - CHAMADOS =====================================
  saveChamadoToDb = data => {
    axios
      .post('http://localhost:3001/chamado', data, {
        headers: {
          'content-type': 'application/json',
          // Accept: 'application/json'
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(() => {
        this.getChamadosFromDb();
      })
      .catch(err => console.log(err));
  };

  getChamadosFromDb() {
    axios
      .get('http://localhost:3001/chamado/')
      .then(res => {
        dispatch(ActionTypes.GETITEM_FROM_DB, res);
      })
      .catch(err => console.log(err));
  }

  deleteChamadoFromDb(_id, callback) {
    axios
      .delete(`http://localhost:3001/chamado?_id=${_id}`)
      .then(res => {
        callback();
        this.getStatusFromDb();
      })
      .catch(err => console.log(err));
  }

  editChamadoFromDb(data, _id) {
    axios
      .put(`http://localhost:3001/chamado/${_id}`, data)
      .then(res => {
        // callback();
        this.getChamadoFromDb();
      })
      .catch(err => console.log(err));
  }
}

export default new Actions();

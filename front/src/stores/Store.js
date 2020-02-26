import BaseStore from './BaseStore';
import ActionTypes from '../ActionTypes';

class Store extends BaseStore {
  constructor() {
    super();
    this.subscribe(() => this.registerToActions.bind(this));
    this.itemData = null;
    this.data = null;
    this.tipoItemData = null;
    this.statusItemData = null;
    this.contatoItemData = null;
    this.tiposData = null;
    this.statusesData = null;
    this.chamadosData = null;
    this.chamadoItemData = null;
    this.execsData = null;
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  setItemData(data) {
    this.itemData = data;
  }

  setExecsData(data) {
    this.execsData = data;
  }

  setChamadosData(data) {
    /////////////////
    this.chamadosData = data;
  }

  setChamadoItemData(data) {
    this.chamadoItemData = data; /////////////////
  }

  // getContatoItemData() {
  //   return this.chamadoItemData;
  // }

  setTiposData(data) {
    this.tiposData = data; ///////////////
  }

  setStatusesData(data) {
    this.statusesData = data; ////////////
  }

  setStatusItemData(data) {
    this.statusItemData = data;
  }

  setTipoItemData(data) {
    this.tipoItemData = data;
  }

  setContatoItemData(data) {
    this.contatoItemData = data;
  }

  getTiposData() {
    return this.tiposData; ////////////////
  }

  getStatusesData() {
    return this.statusesData; /////////////
  }

  getChamadosData() {
    return this.chamadosData; ////////////////
  }

  getItemData() {
    return this.itemData;
  }

  getStatusItemData() {
    return this.statusItemData;
  }

  getContatoItemData() {
    return this.contatoItemData;
  }

  getTipoItemData() {
    return this.tipoItemData;
  }

  getExecsData() {
    return this.execsData;
  }

  registerToActions(action) {
    switch (action.type) {
      case ActionTypes.GET_EXECS_FROM_DB:
        this.setExecsData(action.data);
        this.emitChange();
        break;
      case ActionTypes.GET_CHAMADOS_FROM_DB:
        this.setChamadosData(action.data);
        this.emitChange();
        break;
      case ActionTypes.GET_TIPOS_FROM_DB:
        this.setTiposData(action.data);
        this.emitChange();
        break;
      case ActionTypes.GET_STATUSES_FROM_DB:
        this.setStatusesData(action.data);
        this.emitChange();
        break;
      case ActionTypes.GETITEM_FROM_DB:
        this.setItemData(action.data);
        this.emitChange();
        break;
      case ActionTypes.GET_FROM_DB:
        this.setData(action.data);
        this.emitChange();
        break;
      case ActionTypes.GET_CHAMADO_ITEM_FROM_DB:
        this.setChamadoItemData(action.data);
        this.emitChange();
        break;
      case ActionTypes.GET_STATUS_ITEM_FROM_DB:
        this.setStatusItemData(action.data);
        this.emitChange();
        break;
      case ActionTypes.GET_TIPO_ITEM_FROM_FROM_DB:
        this.setTipoItemData(action.data);
        this.emitChange();
        break;
      case ActionTypes.GET_CONTATO_ITEM_FROM_DB:
        this.setContatoItemData(action.data);
        this.emitChange();
        break;
      default:
        break;
    }
  }
}

export default new Store();

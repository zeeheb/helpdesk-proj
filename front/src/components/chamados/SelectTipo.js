import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';

import Select from '@material-ui/core/Select';
import Store from '../../stores/Store';
import Actions from '../../actions/Actions';
import { MenuItem } from '@material-ui/core';

export default function SelectTipo(props) {
  const [tipoValor, setTipoValor] = React.useState('');
  const [tipos, setTipos] = React.useState([]);

  // const [tipoStatus, setStatusValor] = React.useState('');
  // const [statuses, setStatuses] = React.useState([]);

  React.useEffect(() => {
    Store.addChangeListener(onChange);
    Actions.getTipoFromDb();
    // Actions.getStatusFromDb();
  }, []);

  const onChange = () => {
    const dataFromStore = Store.getItemData();
    setTipos(dataFromStore);
  };

  const handleChange = event => {
    props.onChangeTipo(event.target.value);
    setTipoValor(event.target.value);
  };

  return (
    <div>
      <InputLabel>Tipo</InputLabel>
      <Select
        fullWidth
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={tipoValor}
        onChange={handleChange}
        variant='standard'
      >
        {tipos.map(tipo => (
          <MenuItem value={tipo.descricao}>{tipo.descricao}</MenuItem>
        ))}
      </Select>

      <InputLabel>Status</InputLabel>

      {/* <Select
        fullWidth
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={tipoValor}
        onChange={handleChange}
        variant='standard'
      >
        {tipos.map(tipo => (
          <MenuItem value={tipo.descricao}>{tipo.descricao}</MenuItem>
        ))}
      </Select> */}
    </div>
  );
}

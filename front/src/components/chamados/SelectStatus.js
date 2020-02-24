import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';

import Select from '@material-ui/core/Select';
import Store from '../../stores/Store';
import Actions from '../../actions/Actions';
import { MenuItem } from '@material-ui/core';

export default function SelectStatus(props) {
  const [tipoStatus, setStatusValor] = React.useState('');
  const [statuses, setStatuses] = React.useState([]);

  React.useEffect(() => {
    Store.addChangeListener(onChange);
    Actions.getStatusFromDb();
  }, []);

  const onChange = () => {
    const dataFromStore = Store.getItemData();
    setStatuses(dataFromStore);
  };

  const handleChange = event => {
    props.onChangeStatus(event.target.value);
    setStatusValor(event.target.value);
  };

  return (
    <div>
      <InputLabel>Status</InputLabel>
      <Select
        fullWidth
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={tipoStatus}
        onChange={handleChange}
        variant='standard'
      >
        {statuses.map(status => (
          <MenuItem value={status.descricao}>{status.descricao}</MenuItem>
        ))}
      </Select>
    </div>
  );
}

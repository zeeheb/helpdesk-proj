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
    Store.addChangeListener(onChangeStatusFunc);
    Actions.getStatusesFromDb();

    return () => {
      Store.removeChangeListener(onChangeStatusFunc);
    };
  }, []);

  const onChangeStatusFunc = () => {
    const dataFromStore = Store.getStatusesData();
    setStatuses(dataFromStore || []);
  };

  const handleChange = event => {
    props.onChangeStatus(event.target.value);
    setStatusValor(event.target.value);
  };

  return (
    <div style={{ marginTop: '10px' }}>
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

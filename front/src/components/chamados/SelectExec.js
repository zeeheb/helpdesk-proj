import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Store from '../../stores/Store';
import Actions from '../../actions/Actions';
import { MenuItem } from '@material-ui/core';

export default function SelectExec(props) {
  const [execValor, setExecValor] = React.useState('admin');
  const [execs, setExecs] = React.useState([]);

  React.useEffect(() => {
    // initExec();
    Store.addChangeListener(onChangeExecFunc);
    Actions.getExecsFromDb();

    return () => {
      Store.removeChangeListener(onChangeExecFunc);
    };
  }, []);

  // const initExec = () => {
  //   const dataFromStore = Store.getExecsData();
  //   if (dataFromStore) {
  //     handleChange({ target: { value: dataFromStore[0].user } });
  //     setExecs(dataFromStore || []);
  //   }
  // };

  const onChangeExecFunc = () => {
    const dataFromStore = Store.getExecsData();
    if (dataFromStore) {
      // handleChange({ target: { value: dataFromStore[0].user } });
      setExecs(dataFromStore || []);
    }
  };

  const handleChange = event => {
    props.onChangeExec(event.target.value);
    setExecValor(event.target.value);
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <InputLabel>Usuário</InputLabel>
      <Select
        fullWidth
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={execValor}
        onChange={handleChange}
        variant='standard'
      >
        {execs.map(exec => (
          <MenuItem value={exec.user}>{exec.user}</MenuItem>
        ))}
      </Select>
    </div>
  );
}

import React from 'react';
import Store from '../../stores/Store';
import Actions from '../../actions/Actions';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';

export default function SelectContato(props) {
  const [contatoValor, setContatoValor] = React.useState(props.contato);
  const [contatos, setContatos] = React.useState([]);

  React.useEffect(() => {
    Store.addChangeListener(onChange);
    Actions.getChamadosFromDb();
    // Store.removeChangeListener(onChange);
  }, []);

  const onChange = () => {
    const dataFromStore = Store.getChamadosData();
    setContatos(dataFromStore);
  };

  const handleChange = event => {
    props.onChangeContato(event.target.value);
    setContatoValor(event.target.value);
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <InputLabel>Para o contato:</InputLabel>
      <Select
        fullWidth
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={contatoValor}
        onChange={handleChange}
        variant='standard'
      >
        {contatos.map(contato => (
          <MenuItem value={contato.contato}>{contato.contato}</MenuItem>
        ))}
      </Select>
    </div>
  );
}

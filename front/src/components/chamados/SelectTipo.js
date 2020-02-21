import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Store from '../../stores/Store';
// import MenuTipo from './MenuTipo';
import Actions from '../../actions/Actions';
import { MenuItem } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2)
//   }
// }));

export default function SelectTipo(props) {
  //  const [ ]

  //   const classes = useStyles();
  const [tipoValor, setTipoValor] = React.useState('');
  const [tipos, setTipos] = React.useState([]);

  //   const inputLabel = React.useRef(null);
  //   const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    Store.addChangeListener(onChange);
    Actions.getTipoFromDb();

    // setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const onChange = () => {
    const dataFromStore = Store.getItemData();
    setTipos(dataFromStore);
  };

  const handleChange = event => {
    // console.log(event.target.value);
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
        // labelWidth={labelWidth}
        variant='standard'
      >
        {tipos.map(tipo => (
          <MenuItem value={tipo.descricao}>{tipo.descricao}</MenuItem>
        ))}
      </Select>

      {/* <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={tipoValor}
          onChange={handleChange}
        >
          {tipos.map(tipo => (
            <MenuItem value={tipo.descricao}>{tipo.descricao}</MenuItem>
          ))}
        </Select>
      </FormControl> */}
    </div>
  );
}

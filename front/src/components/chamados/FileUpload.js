import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import ActionTypes from '../../ActionTypes';
// import Actions from '../../actions/Actions';
// import axios from 'axios';
// import uuid from 'uuid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: 'none'
  }
}));

export default function FileUpload(props) {
  const classes = useStyles();
  const [showUploadBt, setShowUploadBt] = React.useState(false);
  const [showImageBt, setShowImageBt] = React.useState(true);
  const [file, setFile] = React.useState('');
  const [filename, setFilename] = React.useState('Escolha uma imagem');
  const [showAlert, setShowAlert] = React.useState(false);
  const onChange = e => {
    // const id = uuid.v4();

    const auxfiletype = e.target.files[0].type;

    if (auxfiletype !== 'image/jpeg' && 'image/jpg' && 'image/png') {
      return alert('Apenas imagens');
    } else if (e.target.files[0].size > 5 * 1024 * 1024) {
      return alert('Tamanho maior que 5 gb');
    }
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setShowImageBt(false);
    setShowUploadBt(true);
  };

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmitBtn();
    props.onUpload(file);
    setShowUploadBt(false);
    setShowAlert(true);
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <div>
        <input
          accept='image/*'
          className={classes.input}
          id='contained-button-file'
          multiple
          type='file'
          onChange={onChange}
        />
        <label htmlFor='contained-button-file'>
          {showImageBt && (
            <Button
              fullWidth
              variant='outlined'
              color='primary'
              component='span'
            >
              FOTO
            </Button>
          )}
        </label>
      </div>

      <div style={{ marginTop: '10px' }}>
        {showUploadBt && (
          <Button
            fullWidth
            color='secondary'
            variant='contained'
            onClick={onSubmit}
          >
            <Typography>Enviar {filename} </Typography>
          </Button>
        )}
      </div>

      {showAlert && (
        <Alert>
          <AlertTitle>Imagem enviada com sucesso!</AlertTitle>
        </Alert>
      )}
      {/* </form> */}
    </div>
  );
}

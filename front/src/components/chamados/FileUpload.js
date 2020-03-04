import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import ActionTypes from '../../ActionTypes';
// import Actions from '../../actions/Actions';
// import axios from 'axios';
import uuid from 'uuid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

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
  const [file, setFile] = React.useState('');
  const [filename, setFilename] = React.useState('Escolha uma imagem');
  // const [uploadedFile, setUploadedFile] = React.useState({});

  const onChange = e => {
    const id = uuid.v4();

    setFile(e.target.files[0]);
    setFilename(`${id + '-' + e.target.files[0].name}`);

    setShowUploadBt(true);
  };

  const onSubmit = e => {
    e.preventDefault();
    props.onUpload(file);
  };

  return (
    <div style={{ marginTop: '10px' }}>
      {/* <form onSubmit={onSubmit}> */}
      {/* <div>
          <Input type='file' onChange={onChange}></Input>
          <label>{filename}</label>
      </div> */}
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
          <Button fullWidth variant='outlined' color='primary' component='span'>
            FOTO
          </Button>
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
            <Typography>Enviar</Typography>
          </Button>
        )}
      </div>
      {/* </form> */}
    </div>
  );
}

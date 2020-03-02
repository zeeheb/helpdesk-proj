import React, { Fragment } from 'react';
// import ActionTypes from '../../ActionTypes';
// import Actions from '../../actions/Actions';
// import axios from 'axios';
import uuid from 'uuid';

export default function FileUpload(props) {
  const [file, setFile] = React.useState('');
  const [filename, setFilename] = React.useState('');
  // const [uploadedFile, setUploadedFile] = React.useState({});

  const onChange = e => {
    const id = uuid.v4();

    setFile(e.target.files[0]);
    // setFilename(`${id + '-' + e.target.files[0].name}`);
  };

  const onSubmit = async e => {
    e.preventDefault();

    // const data = new FormData();
    // data.append('file', file);
    // data.append('id', id);

    props.onUpload(file);
    // const data = { file, id };

    // try {
    //   const res = await axios.post('http://localhost:3001/upload', data, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });

    //   const { filename, filePath } = res.data;
    //   setUploadedFile({ filename, filePath });
    // } catch (err) {
    //   console.log(err);
    // }

    // Actions.saveUploadToDb(data);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div>
          <input type='file' onChange={onChange}></input>
          <label>{filename}</label>
        </div>

        <input type='submit' value='Upload'></input>
      </form>
    </Fragment>
  );
}

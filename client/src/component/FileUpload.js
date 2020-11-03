import React, { Fragment, useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose file...');

  const onChangeHandler= e => {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
  }

  return (
    <Fragment>
      <form>
        <div className="custom-file mb-4">
          <input type="file" className="custom-file-input" id="customFile" onChange={onChangeHandler}/>
          <label className="custom-file-label" htmlFor="customFile">
            { fileName }
            </label>
        </div>
        <input type='submit' className='btn btn-primary btn-block mt-4' value='uplaod' />
      </form>
    </Fragment>
  )
}

export default FileUpload

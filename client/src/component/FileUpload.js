import React, { Fragment, useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose file...');
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


import { useState } from 'react';
import './UpdateProductData.css';


export default function UpdateProductData() {
  const [file, setFile] = useState(null);
  const [successMsg , setSuccessMsg] = useState(false);
  const [apiMsg,setApiMsg] = useState("")
  const [apiMsgClass,setApiMsgClass] = useState("");
  const [displayUploadFile,setDisplayUploadFile] = useState(true)

  const handleFileUpload = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      if (
        fileType === 'application/vnd.ms-excel' ||
        fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ) {
        setFile(selectedFile);
      } else {
        alert('Please upload a valid Excel file.');
      }
    }
  };

  const uploadFile = async () => {
    setDisplayUploadFile(false);
    if (!file) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://localhost:7234/api/Products/upload-excel', {
        method: 'POST',
        body: formData,
      });
      console.log(response);
      if (response.ok) {
        setApiMsg("🎉 Product data updated successfully! 😀 🚀")
       setSuccessMsg(true);
       setApiMsgClass("success-msg");
        
      }
      else if(response.status === 400) {
        setApiMsg("Invalid data format in the Excel file. ❌")
        setSuccessMsg(true);
        setApiMsgClass("failure-msg ")
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Failed to update product data.');
      }
    } catch (error) {
      console.error('Error updating product data:', error.message);
     
    }
  };
  const onClickReUpload = () => {
    setDisplayUploadFile(true);
    setFile(null);
  }
  return (
    <div className="update-products-container">
      <div className="excel-upload-container">
        {displayUploadFile ? 
        <div>
        <h2 className="upload-section-heading">Update Product Data</h2>
        <div className='upload-file'>
        <label className='upload-excel-file-container' htmlFor="excel-file-upload">
        <img src="https://res.cloudinary.com/dy2gsniki/image/upload/v1703675169/upload_2716054_jszapf.png" alt="upload file" className='upload-file-img'/>
        <p className='file-upload-label'>Select an Excel file:</p>
        <input
          id="excel-file-upload"
          type="file"
          accept=".xls,.xlsx"
          onChange={handleFileUpload}
          className="file-input"
        />
        </label></div>
        {file && (
            <div className="file-details">
              <div className="file-icon">
                <img
                  src="https://res.cloudinary.com/dy2gsniki/image/upload/v1703673755/google-docs_2991108_nlxrwr.png"
                  alt="file icon"
                  className="file-icon-img"
                />
              </div>
              <div className="file-name-size">
                <p className="file-name">{file.name}- Uploaded</p>
                <p className="file-size">{(file.size / 1024).toFixed(2)} KB</p>
              </div>
            </div>
          )}
        {file &&<button onClick={uploadFile} className="upload-button">
          Upload File
        </button>}</div>:
        <div>
        {successMsg &&<p className={apiMsgClass}>{apiMsg}</p>}
        <button className="upload-button" onClick={onClickReUpload}>Re-Upload</button></div>}
      </div>
      
    </div>
  );
}

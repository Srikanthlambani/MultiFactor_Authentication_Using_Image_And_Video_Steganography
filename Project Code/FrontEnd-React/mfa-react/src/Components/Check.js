import React, { useState } from 'react'


function Check() {
  let [videoFile,setvideoFile] = useState('');
  function uploadFile(event) {
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = (event) => {
          var media = event.target.result;
  
          setvideoFile(media);
      };
      reader.readAsDataURL(file);
  }
  return (
    <form>
      <input type='file' accept='video/*' onChange={uploadFile}/>
      <p>
        {videoFile}
      </p>
    </form>
  )
}

export default Check
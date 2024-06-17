import React from 'react'

function Iconupload() {
  return (
    <div>
       <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>UploadImage</button>
       <dialog id="my_modal_1" className="modal">
     <div className="modal-box">
       <h3 className="font-bold text-lg pb-2">Upload File</h3>
       
       <input type="file" className="file-input w-full max-w-xs" />

     <div className="modal-action">
      <form method="dialog">
        
        <button className="btn">Close</button>
      </form>
     </div>
     </div>
</dialog>



    </div>
  )
}

export default Iconupload
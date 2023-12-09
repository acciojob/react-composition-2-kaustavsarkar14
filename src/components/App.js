
import React, { useState } from "react";
import './../styles/App.css';

const Modal = ({setShow}) => {
  return <div className="model-overlay model" style={{border:"2px solid black"}}>
    <button className="model-close" onClick={()=>setShow(false)} >Close</button>
    <p className="modal-p" >This is the content of the modal.</p>
  </div>
}

const App = () => {
  const [show, setShow] = useState(false)
  document.addEventListener('click',(e)=>{
    if(!e.target.classList.contains('model') && !e.target.classList.contains('show'))
    setShow(false)
  })
  return (
    <div>
      <button className="show" onClick={() => setShow(true)} >Show Modal</button>
      {
        show && <Modal setShow={setShow} />
      }
      {/* Do not remove the main div */}
    </div>
  )
}

export default App

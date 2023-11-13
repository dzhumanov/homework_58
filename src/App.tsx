import { useState } from "react";
import Modal from "./Components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const cancel = () => {
    setShowModal(false);
  }
  return (
    <>
      <div className="row w-100">
        <h1>Modal</h1>
        <div className="col"><button className="btn btn-primary" onClick={()=> {setShowModal(true)}}>Show Modal</button></div>
      </div>
      <Modal show={showModal} title="Modal title" onClose={cancel}>
        <div className="modal-body">Modal content</div>
      </Modal>
    </>
  );
}

export default App;

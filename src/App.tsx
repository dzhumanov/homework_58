import { useState } from "react";
import Modal from "./Components/Modal/Modal";
import Alert from "./Components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const cancel = () => {
    setShowModal(false);
  };

  const continueMod = () => {
    setShowAlert(true);
  };

  const buttonConfig = [
    { type: "primary", label: "Continue", onClick: continueMod },
    { type: "danger", label: "Close", onClick: cancel },
  ];

  const cancelAlert = () => {
    setShowAlert(false);
  }

  return (
    <>
      <div className="row w-100">
        <div className="col">
          <h1>Modal</h1>
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Show Modal
          </button>
        </div>
        <div className="col">
          <h1>Alert</h1>
          <button className="btn btn-primary" onClick={() => {setShowAlert(true)}}>Show Alert</button>
            <Alert show={showAlert} type="success" onDismiss={cancelAlert}>Alert content</Alert>
        </div>
      </div>
      <Modal
        show={showModal}
        title="Modal title"
        onClose={cancel}
        buttons={buttonConfig}
      >
        <div className="modal-body">Modal content</div>
      </Modal>
    </>
  );
}

export default App;

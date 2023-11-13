import Backdrop from "../Backdrop/Backdrop";

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({ show, title, onClose, children }) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <div className="modal show" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button className="btn fw-bold fs-3 p-0" onClick={onClose}>x</button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

import React from "react";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

interface buttonConfig {
  type: string;
  label: string;
  onClick: () => void;
}

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  buttons: buttonConfig[];
}

const Modal: React.FC<Props> = ({
  show,
  title,
  onClose,
  buttons,
  children,
}) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <CSSTransition in={show} timeout={300} classNames="compon" unmountOnExit>
        <div
          className="modal show"
          style={{ display: show ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">{title}</h1>
                <button className="btn fw-bold fs-3 p-0" onClick={onClose}>
                  x
                </button>
              </div>
              {children}
              <div className="modal-footer">
                {buttons.map((buttonItem) => (
                  <button
                    key={buttonItem.label}
                    className={`btn btn-${buttonItem.type}`}
                    onClick={buttonItem.onClick}
                  >
                    {buttonItem.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;

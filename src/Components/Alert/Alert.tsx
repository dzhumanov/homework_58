import React from "react";
import { CSSTransition } from "react-transition-group";

interface Props extends React.PropsWithChildren {
  show: boolean;
  type: string;
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({ show, type, onDismiss, children }) => {
  return (
    <>
      <CSSTransition in={show} timeout={300} classNames="compon" unmountOnExit>
        <div
          className={`alert alert-${type} position-fixed top-25 start-50 translate-middle w-50 customAlert`}
          style={{ display: show ? "block" : "none" }}
        >
          <div className="row">
            <div className="col">{children}</div>
            {onDismiss && (
              <button className="btn-close col-3" onClick={onDismiss}></button>
            )}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Alert;

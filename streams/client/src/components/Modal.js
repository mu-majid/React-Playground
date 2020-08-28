import React from "react";
import ReactDOM from 'react-dom';
import history from "../history";

// modals are common case to use portals
// another case is SSR react compoenent from backend like java...
const Modal = props => {
  return ReactDOM.createPortal(

    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">
          {props.title}
        </div>
        <div className="content">
          {props.content}
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default Modal;
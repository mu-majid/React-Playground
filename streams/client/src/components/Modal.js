import React from "react";
import ReactDOM from 'react-dom';

// modals are common case to use portals
// another case is SSR react compoenent from backend like java...
const Modal = props => {
  return ReactDOM.createPortal(

    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
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
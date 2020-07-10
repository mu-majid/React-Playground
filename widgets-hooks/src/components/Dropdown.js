import React, { useState } from 'react';

const DropDown = ({ options, selected, onSelectChange }) => {

  const [open, setOpen] = useState(false);

  const renderedOpts = options.map(opt => {
    if (opt.value === selected.value) {
      return null;
    }
    return (
      <div 
        key={opt.value}
        className="item"
        onClick={() => onSelectChange(opt)}
      >
        {opt.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select A Color</label>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOpts}</div>
        </div>
      </div>
    </div>
  )
}

export default DropDown;
import React, { useState, useEffect, useRef } from 'react';

// Note :
// addEventListener get handled first, then React events (onClick for example)
// events get handled from most inner child to parent

const DropDown = ({ options, selected, onSelectChange, label }) => {

  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Manual Eventlistener to handle event on elements that are nor children of DropDown component
  useEffect(() => {

    const onBodyClick = (event) => {
      // if click event is from react component, then don't run this body event manual handler
      // React v17 update on handlin events
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    }

    document.body.addEventListener('click', onBodyClick);

    // run every time useEffect is about to execute, and also whena component gets destroyed (show null)
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []); // only run once, when the component first renders

  const renderedOptions = options.map(opt => {
    // remove selected from list
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
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        {/* <br></br> */}
        {/* <div>
          <label>You Selected Color with value of {selected.value}</label>
        </div> */}
        {/* <br></br> */}
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
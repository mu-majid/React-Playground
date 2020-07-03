import React, { useState } from 'react';

const Accordion = ({ items }) => {
  // null is init value, when we rerender, it will not be used 
  // but the new index value is used as the activeIndex
  const [ activeIndex, setActiveIndex ] = useState(null); 

  const titleClicked = (idx) => {
    console.log('index : ', idx);
    setActiveIndex(idx);
  }

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div 
          className={`title ${active}`}
          onClick={() => titleClicked(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
    
  );
}

export default Accordion;
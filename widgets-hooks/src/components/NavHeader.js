import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">

      <Link className="item" href="/">
        Accordion
      </Link>

      <Link className="item" href="/list">
        Search
      </Link>

      <Link className="item" href="/dropdown">
        DropDown
      </Link>

      <Link className="item" href="/translate">
        Translate
      </Link>

    </div>
  );
}

export default Header;
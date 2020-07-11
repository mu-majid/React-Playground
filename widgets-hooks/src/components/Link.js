import React from 'react';

const Link = ({ href, className, children }) => {

  const onClick= (e) => {

    // open link in new tab and make a full page refresh(load)
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    // prevent full page reload(refresh)
    e.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
}

export default Link;
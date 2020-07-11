import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  // the sole purpose of this state is to make our Route component re-render when window pathname changes
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }

  }, []); // register event listener only one time when component initially renders

  return currentPath === path
    ? children
    : null
}

export default Route;
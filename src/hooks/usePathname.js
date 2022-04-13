import { useEffect, useState } from 'react';

function getPathname() {
  const { pathname } = window.location;

  let PN = pathname.split('/').pop();
  let isHome = true;
  let isSearch = false;
  let isPlayer = false;

  if (pathname === '/search') {
    isHome = false;
    isSearch = true;
    isPlayer = false;
  }
  if (pathname === '/player') {
    isHome = false;
    isSearch = false;
    isPlayer = true;
  }

  return {
    PN,
    isHome,
    isSearch,
    isPlayer,
  };
}

export const usePathname = () => {
  const [pathname, setPathname] = useState(getPathname());

  const updatePathname = () => {
    setPathname(getPathname());
  };

  useEffect(() => {
    window.addEventListener('load', updatePathname);
    return () => window.removeEventListener('load', updatePathname);
  }, []);

  return {
    ...pathname,
  };
};

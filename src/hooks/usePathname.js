import { useEffect, useState } from 'react';

function getPathname() {
  const { pathname } = window.location;

  let PN = pathname;
  let isHome = true;
  let isSearch = false;
  let isVideo = false;

  if (pathname === '/search') {
    isHome = false;
    isSearch = true;
    isVideo = false;
  }
  if (pathname === '/video') {
    isHome = false;
    isSearch = false;
    isVideo = true;
  }

  return {
    PN,
    isHome,
    isSearch,
    isVideo,
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

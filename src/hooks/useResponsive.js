import { useEffect, useState } from 'react';
import { theme } from '../styles';
import { stripPx } from '../styles/utils';

function getResponsive() {
  const { innerWidth } = window;

  let bp = 'M';
  let isMobile = true;
  let isTablet = false;
  let isDesktop = false;

  if (innerWidth > stripPx(theme.breakpoints.tablet)) {
    bp = 'T';
    isMobile = false;
    isTablet = true;
  }
  if (innerWidth > stripPx(theme.breakpoints.desktop)) {
    bp = 'D';
    isTablet = false;
    isDesktop = true;
  }

  return {
    bp,
    isMobile,
    isTablet,
    isDesktop,
  };
}

export const useResponsive = () => {
  const [responsive, setResponsive] = useState(getResponsive());

  const updateResponsive = () => {
    setResponsive(getResponsive());
  };

  useEffect(() => {
    window.addEventListener('resize', updateResponsive);
    return () => window.removeEventListener('resize', updateResponsive);
  }, []);

  return {
    ...responsive,
  };
};

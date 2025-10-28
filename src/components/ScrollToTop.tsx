import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Handle hash navigation
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Smooth scroll to the target element
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Only scroll to top if there's no hash
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
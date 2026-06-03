import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' as ScrollBehavior, // bypass smooth scrolling for instant feel on transition
    });
  }, [pathname]);

  return null;
}

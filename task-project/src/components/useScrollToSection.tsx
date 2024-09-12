// useScrollToSection.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
};

export default useScrollToSection;

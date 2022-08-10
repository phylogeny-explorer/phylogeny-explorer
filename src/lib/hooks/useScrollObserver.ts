import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useScrollObserver = (id?: string) => {
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const el = document.getElementById(id);
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            router.push(`#${id}`);
            return;
          }
        },
        {
          root: null,
          threshold: 0.1, // set offset 0.1 means trigger if at least 10% of element in viewport
        }
      );

      if (el) {
        observer.observe(el);
      }
    }
  }, [id, router]);
};

export default useScrollObserver;

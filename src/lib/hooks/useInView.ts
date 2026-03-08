import { i } from "motion/react-client";
import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);


  useEffect(() => {
    if (!ref.current) return;
    console.log('ref.current');
    const observer = new IntersectionObserver(([entry]) => {
       if (entry.isIntersecting) {
        console.log('entry.isIntersecting');
         setInView(true);
       } 
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

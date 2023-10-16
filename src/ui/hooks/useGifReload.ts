import { useEffect, useRef } from "react";

export function useGifReload(gifSrc: string) {
  const gifRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8, // Adjust this value as needed
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gifRef.current?.setAttribute("src", gifSrc);
      } else {
        gifRef.current?.setAttribute("src", ""); // Reset the GIF by setting an empty source
      }
    }, options);

    if (gifRef.current) {
      observer.observe(gifRef.current);
    }

    return () => {
      if (gifRef.current) {
        observer.unobserve(gifRef.current);
      }
    };
  }, []);

  return { gifRef };
}

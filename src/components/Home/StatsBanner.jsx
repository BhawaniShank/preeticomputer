import { useEffect, useRef, useState } from 'react';

const StatsBanner = () => {
  const [hasCounted, setHasCounted] = useState(false);
  const statsRef = useRef(null);

  const counters = [
    { id: "stat1", target: 30, suffix: " min", label: "Response Time" },
    { id: "stat2", target: 99, suffix: "%", label: "Success Rate" },
    { id: "stat3", target: 10, suffix: "+", label: "Years Experience" }
  ];

  const animateCount = (setCount, target, suffix, duration = 2000) => {
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const counter = () => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(progress * target);
      setCount(current + suffix);

      if (frame < totalFrames) {
        requestAnimationFrame(counter);
      } else {
        setCount(target + suffix);
      }
    };

    requestAnimationFrame(counter);
  };

  const startCounting = () => {
    if (hasCounted) return;
    setHasCounted(true);

    counters.forEach(({ id, target, suffix }) => {
      const setCount = (value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
      };
      animateCount(setCount, target, suffix);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className=" md:absolute md:-bottom-28 overflow-hidden z-20 w-full flex items-center justify-center md:px-4">
      <div
        ref={statsRef}
        className=" flex  w-full md:flex-row justify-center overflow-x-hidden items-center gap-2 lg:gap-12 py-2 md:py-12"
      >
        {counters.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-[#111729] to-[#253146] px-4 min-w-24   md:px-8 min-h-24 py-3 md:py-6 rounded-xl text-center w-full lg:w-64 shadow-md"
          >
            <p
              id={item.id}
              className="text-xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-400"
            >
              0
            </p>
            <p className="small text-white md:mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;

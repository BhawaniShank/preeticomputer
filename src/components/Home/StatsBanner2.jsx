import { Fragment, useEffect, useRef, useState } from "react";
import { FaSmile, FaRocket, FaUserPlus, FaAward } from "react-icons/fa";

const StatsBanner2 = () => {
  const [hasCounted, setHasCounted] = useState(false);
  const statsRef = useRef(null);

  const counters = [
    { id: "happyClients", target: 173, label: "Happy Clients", icon: <FaSmile size={40} /> },
    { id: "repairs", target: 86, label: "Repair Done", icon: <FaRocket size={40} /> },
    { id: "experts", target: 8, label: "Expert Team", icon: <FaUserPlus size={40} /> },
    { id: "awards", target: 2, label: "Award Won", icon: <FaAward size={40} /> }
  ];

  const animateCount = (setCount, target, duration = 2000) => {
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const counter = () => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(progress * target);
      setCount(current);

      if (frame < totalFrames) {
        requestAnimationFrame(counter);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(counter);
  };

  const startCounting = () => {
    if (hasCounted) return;
    setHasCounted(true);

    counters.forEach(({ id, target }) => {
      const setCount = (value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
      };
      animateCount(setCount, target);
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
    <section className="px-4">
    <div
        className="w-full bg-[#0b325b]  rounded-2xl py-10 mt-10 sm:mt-16 lg:mt-20 max-w-[80em] mx-auto text-white relative"
        ref={statsRef}
        style={{
            backgroundImage: `linear-gradient(rgba(11, 50, 91, 0.95), rgba(11, 50, 91, 0.95)), url('compressed_images/bglines.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <div className="max-w-6xl h-full w-full mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 text-center">
            {counters.map(({ id, label, icon }) => (
                <div key={id} className="flex flex-col items-center gap-2 md:gap-5">
                    <div className="text-white">{icon}</div>
                    <p id={id} className="large font-bold">
                        0
                    </p>
                    <p className="medium font-semibold">{label}</p>
                </div>
            ))}
        </div>
    </div>
    </section>
);
};

export default StatsBanner2;

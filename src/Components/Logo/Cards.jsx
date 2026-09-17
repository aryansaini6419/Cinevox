import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

// Imported as modules from src/assets/Images so the bundler resolves and
// serves them correctly, rather than relying on files sitting in /public.
// Rename these imports if your actual filenames differ.
import scroll1 from "../../assets/Images/Notesfromlastrow.jpg";
import scroll2 from "../../assets/Images/TaxiDriver.jpg";
import scroll3 from "../../assets/Images/Vincenzo.jpg";
import scroll4 from "../../assets/Images/Mobland.jpg";
import scroll5 from "../../assets/Images/Car2.jpg";
import scroll6 from "../../assets/Images/Toxic.jpg";


const images = [scroll1, scroll2, scroll3, scroll4, scroll5, scroll6];

const AUTOPLAY_DELAY = 3000;

export default function CardSlider() {
  const [active, setActive] = useState(0);
  const cards = useRef([]);
  const intervalRef = useRef(null);

  const next = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  // Restart the autoplay timer on manual navigation so a click doesn't
  // fight with an autoplay tick that's about to fire right after it.
  const restartAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, AUTOPLAY_DELAY);
  };

  useEffect(() => {
    restartAutoplay();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    cards.current.forEach((card, i) => {
      if (!card) return;

      let offset = i - active;

      if (offset > images.length / 2) offset -= images.length;
      if (offset < -images.length / 2) offset += images.length;

      gsap.to(card, {
        duration: 0.8,
        x: offset * 230,
        scale: offset === 0 ? 1 : 0.8,
        rotateY: offset * -35,
        opacity: Math.abs(offset) > 2 ? 0 : 1,
        zIndex: 10 - Math.abs(offset),
        ease: "power3.out",
      });
    });
  }, [active]);

  const handlePrev = () => {
    prev();
    restartAutoplay();
  };

  const handleNext = () => {
    next();
    restartAutoplay();
  };

  return (
    <div
      className="relative flex h-screen items-center justify-center overflow-hidden"
      onMouseEnter={() => clearInterval(intervalRef.current)}
      onMouseLeave={restartAutoplay}
    >
      <div
        className="relative w-250 h-125"
        style={{ perspective: "1800px" }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            ref={(el) => (cards.current[i] = el)}
            className="absolute left-1/2 top-1/2 w-[320px] h-105
            rounded-3xl overflow-hidden shadow-2xl
            -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={`Slide ${i + 1}`}
            />
          </div>
        ))}
      </div>

    </div>
  );
}
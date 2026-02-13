import { useEffect, useState } from "react";

const images = [
  "/hero/1.jpg",
  "/hero/2.jpg",
  "/hero/3.jpg",
  "/hero/4.jpg",
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} src={img} className="hero-image" alt="Diagnostics" />
        ))}
      </div>

      
      <div className="hero-overlay">
        <img src="/logo.png" className="hero-logo" alt="Capricorn Diagnostics" />
        <h1 className="hero-title">Diagnostics . Hospital Supplies . Lab Consumables . Medical Devices</h1>
      </div>
    </section>
  );
}

export default Hero;

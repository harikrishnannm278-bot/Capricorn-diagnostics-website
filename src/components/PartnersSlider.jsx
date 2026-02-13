import { useEffect, useState } from "react";

/* 11 partner logos */
const groups = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10], // slide with 4 logos
];

function PartnersSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % groups.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="partners">
      <h2 className="partners-title">Authorised Distributor For</h2>

      <div className="partners-row">
        {groups[index].map((n) => (
          <div className="partner-card" key={n}>
            <img src={`/partners/${n}.png`} alt="partner logo" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PartnersSlider;

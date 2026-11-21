import { useEffect, useRef, useState } from "react";
import { config } from "../config";
import "./styles/Stats.css";

const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-section section-container" id="stats" ref={ref}>
      <div className={`stats-grid ${visible ? "stats-grid-in" : ""}`}>
        {config.stats.map((stat, index) => (
          <div
            key={stat.label}
            className="stat-item"
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
      <p className="stats-footnote">
        Open source at{" "}
        <a
          href={config.contact.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/vi5hnuraj
        </a>{" "}
        · Building in public across AI, Web3 and cloud
      </p>
    </div>
  );
};

export default Stats;

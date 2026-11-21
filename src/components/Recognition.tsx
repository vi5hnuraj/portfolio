import { config } from "../config";
import "./styles/Recognition.css";

const Recognition = () => {
  return (
    <div className="recognition-section section-container" id="recognition">
      <div className="recognition-head">
        <h2>
          Hackathons <span>&</span>
          <br /> recognition
        </h2>
        <p className="recognition-intro">
          Twelve builds submitted to some of the most competitive programs in
          AI, Web3 and open source — from ETHGlobal and Ethereum Mexico to
          Colosseum, Tether, IBM and AMD. Each one shipped with tests,
          deployment proof and a working product rather than a slide deck.
        </p>
      </div>

      <div className="recognition-grid">
        {config.hackathons.map((item, index) => (
          <a
            key={`${item.title}-${item.project}`}
            className="recognition-card"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
            style={{ animationDelay: `${(index % 3) * 80}ms` }}
          >
            <div className="recognition-card-top">
              <span className="recognition-event">{item.title}</span>
              <span className="recognition-track">{item.track}</span>
            </div>
            <h3>{item.project}</h3>
            <p>{item.description}</p>
            <span className="recognition-cta">View project ↗</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Recognition;

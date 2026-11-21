import { Link } from "react-router-dom";
import { config } from "../config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-inner">
        <h2 className="cta-heading">
          Looking for an engineer who can ship <span>AI, Web3 and cloud</span>?
        </h2>
        <p className="cta-sub">
          Open to full-time roles and interesting contract work — AI engineering,
          blockchain / Web3, cloud & platform, and full-stack development.
        </p>

        <div className="cta-buttons">
          <a
            href={config.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn-resume"
            data-cursor="disable"
          >
            Download Resume ↓
          </a>

          <Link to="/play" className="cta-btn cta-btn-play" data-cursor="disable">
            Play With Me →
          </Link>

          <a
            href={config.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn-hire"
            data-cursor="disable"
          >
            Hire Me →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

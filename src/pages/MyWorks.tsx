import { useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";

const getInitials = (value?: string) =>
  (value || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase() || "DEV";

const ProjectImage = ({ title, image }: { title: string; image: string }) => {
  const [hasFailed, setHasFailed] = useState(false);

  if (!image || hasFailed) {
    return (
      <div
        className="work-image-fallback myworks-fallback"
        role="img"
        aria-label={title}
      >
        <span className="work-image-fallback-initials">{getInitials(title)}</span>
        <span className="work-image-fallback-label">Case study</span>
      </div>
    );
  }

  return <img src={image} alt={title} onError={() => setHasFailed(true)} />;
};

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>
          {config.projects.length} projects across AI engineering, Web3, cloud
          infrastructure and full-stack product development
        </p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => (
          <div className="myworks-card" key={project.id} data-cursor="disable">
            <div className="myworks-card-number">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="myworks-card-image">
              <ProjectImage title={project.title} image={project.image} />
            </div>
            <div className="myworks-card-info">
              <h3>{project.title}</h3>
              <p className="myworks-card-category">{project.category}</p>
              <p className="myworks-card-description">{project.description}</p>
              <p className="myworks-card-tech">{project.technologies}</p>
              <div className="myworks-card-links">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="myworks-card-link"
                  >
                    Live Demo ↗
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="myworks-card-link myworks-card-link-ghost"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;

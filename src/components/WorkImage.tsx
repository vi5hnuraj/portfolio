import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const getInitials = (value?: string) =>
  (value || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase() || "DEV";

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [hasFailed, setHasFailed] = useState(false);

  const showFallback = !props.image || hasFailed;

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link || "#"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target={props.link ? "_blank" : undefined}
        rel="noreferrer"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {showFallback ? (
          <div
            className="work-image-fallback"
            role="img"
            aria-label={props.alt || "Project preview"}
          >
            <span className="work-image-fallback-initials">
              {getInitials(props.alt)}
            </span>
            <span className="work-image-fallback-label">
              {props.link ? "Open project" : "Case study"}
            </span>
          </div>
        ) : (
          <img
            src={props.image}
            alt={props.alt}
            onError={() => setHasFailed(true)}
          />
        )}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;

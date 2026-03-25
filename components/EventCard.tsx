"use client";

import { Event } from "@/data/events";

interface EventCardProps {
  event: Event;
  globalIndex: number;
  side: "left" | "right";
  isVisible: boolean;
  isExpanded: boolean;
  onToggleExpand: (id: number) => void;
}

export default function EventCard({
  event,
  globalIndex,
  side,
  isVisible,
  isExpanded,
  onToggleExpand,
}: EventCardProps) {
  const classNames = [
    "event",
    event.category,
    event.superhuman ? "superhuman" : "",
    side,
    !isVisible ? "hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      <div
        className={`card${isExpanded ? " expanded" : ""}`}
        onClick={() => onToggleExpand(globalIndex)}
      >
        <div className="card-header">
          <span className="card-year">{event.year}</span>
          <div className="card-badges">
            <span className="badge-type">
              {event.category === "machine" ? "Machine Victory" : "Human Resistance"}
            </span>
            {event.superhuman && (
              <span className="badge-superhuman" title="Superhuman milestone">
                👑
              </span>
            )}
          </div>
        </div>
        {event.image && (
          <div className={`card-image-wrap${event.imageInvert ? " inverted" : ""}`}>
            <img src={event.image} alt="" className="card-image-bg" aria-hidden="true" />
            <img src={event.image} alt="" className="card-image" />
          </div>
        )}
        <p className="card-text">{event.text}</p>
        {isExpanded && event.wikipediaExtract && (
          <div className="card-excerpt" onClick={(e) => e.stopPropagation()}>
            <div className="card-excerpt-inner">
              {event.wikipediaThumbnail && (
                <img
                  src={event.wikipediaThumbnail}
                  alt=""
                  className="card-excerpt-thumb"
                />
              )}
              <div className="card-excerpt-text">
                <p className="card-excerpt-title">{event.wikipediaTitle}</p>
                <p>{event.wikipediaExtract}</p>
              </div>
            </div>
            <a
              href={event.link}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more on Wikipedia ↗
            </a>
            <p className="card-excerpt-attribution">
              Text from{" "}
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="card-link">
                Wikipedia
              </a>
              {" "}under{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="card-link">
                CC BY-SA 4.0
              </a>
            </p>
          </div>
        )}
        {isExpanded && !event.wikipediaExtract && event.link && (
          <div className="card-excerpt" onClick={(e) => e.stopPropagation()}>
            <a
              href={event.link}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more ↗
            </a>
          </div>
        )}
        {!isExpanded && (
          <span className="card-expand-hint">Click to expand ↓</span>
        )}
        {isExpanded && (
          <span className="card-expand-hint">Click to collapse ↑</span>
        )}
      </div>
      <span className="spine-year">{event.year}</span>
    </div>
  );
}

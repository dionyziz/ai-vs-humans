"use client";

import { useEffect, useRef, useState } from "react";
import { Event, Era } from "@/data/events";

interface TimelineProps {
  events: Event[];
  eras: Era[];
}

const ERA_ROMAN = ["I", "II", "III", "IV", "V", "VI"];

export default function Timeline({ events, eras }: TimelineProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [machineCount, setMachineCount] = useState(0);
  const [humanCount, setHumanCount] = useState(0);
  const timelineRef = useRef<HTMLElement>(null);

  function isVisible(event: Event): boolean {
    if (activeFilter === "all") return true;
    if (activeFilter === "machine") return event.category === "machine";
    if (activeFilter === "human") return event.category === "human";
    if (activeFilter === "superhuman") return event.superhuman;
    return true;
  }

  // Update score counts + ensure newly-revealed events have the visible class
  useEffect(() => {
    setMachineCount(events.filter((e) => e.category === "machine").length);
    setHumanCount(events.filter((e) => e.category === "human").length);

    // Events that were display:none while the scroll observer ran never received
    // the "visible" class. Mark them all visible now that the filter has changed.
    document.querySelectorAll<HTMLElement>(".event:not(.hidden)").forEach((el) => {
      el.classList.add("visible");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter, events]);

  // Scroll animations
  useEffect(() => {
    const eventEls = document.querySelectorAll<HTMLElement>(".event");
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );
    eventEls.forEach((el) => {
      // Already in or above the viewport — show immediately without animation
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      } else {
        scrollObserver.observe(el);
      }
    });
    return () => scrollObserver.disconnect();
  }, []);

  // Spine dots
  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

    function buildDots() {
      if (!timeline) return;
      timeline.querySelectorAll(".spine-dot").forEach((d) => d.remove());
      const eventEls = Array.from(timeline.querySelectorAll<HTMLElement>(".event"));
      eventEls.forEach((event, i) => {
        const dot = document.createElement("span");
        dot.className = "spine-dot";
        dot.dataset.eventIndex = String(i);
        dot.style.top = event.offsetTop + 1.5 * rem + "px";
        if (event.classList.contains("hidden")) {
          dot.classList.add("hidden");
        }
        timeline.appendChild(dot);
      });
    }

    buildDots();
    const resizeObserver = new ResizeObserver(buildDots);
    resizeObserver.observe(timeline);
    return () => resizeObserver.disconnect();
  }, [activeFilter]);

  // Build era-grouped events with side (left/right alternating per era)
  const eraGroups = eras.map((era) => {
    let sideCounter = 0;
    const eraEvents = events
      .map((event, globalIndex) => ({ event, globalIndex }))
      .filter(({ event }) => event.era === era.number)
      .map(({ event, globalIndex }) => {
        const side = sideCounter % 2 === 0 ? "left" : "right";
        sideCounter++;
        return { event, globalIndex, side };
      });
    return { era, eraEvents };
  });

  return (
    <>
      <header>
        <img src="/flag-machine.svg" alt="" className="faction-flag faction-flag-machine" aria-hidden="true" />
        <img src="/flag-human.svg"   alt="" className="faction-flag faction-flag-human"   aria-hidden="true" />
        <h1>Machines vs Humans:<br />The War</h1>
        <p className="subtitle">A Timeline of Victories &amp; Defeats — 100 BCE to 2025</p>
        <div className="score-counter">
          <div className="score-machine">
            <span className="count" id="machine-count">{machineCount}</span>
            Machine Victories
          </div>
          <div className="score-human">
            <span className="count" id="human-count">{humanCount}</span>
            Human Resistance
          </div>
        </div>
      </header>

      <nav className="filters">
        {[
          { key: "all", label: "All", icon: null },
          { key: "machine", label: "Machine Victories", icon: "/flag-machine.svg" },
          { key: "human", label: "Human Resistance", icon: "/flag-human.svg" },
          { key: "superhuman", label: "Superhuman 👑", icon: null },
        ].map(({ key, label, icon }) => (
          <button
            key={key}
            className={`filter-btn${activeFilter === key ? " active" : ""}`}
            data-filter={key}
            onClick={() => setActiveFilter(key)}
          >
            {icon && <img src={icon} alt="" className="filter-btn-flag" aria-hidden="true" />}
            {label}
          </button>
        ))}
      </nav>

      <main className="timeline" ref={timelineRef}>
        {eraGroups.map(({ era, eraEvents }) => (
          <div key={era.number}>
            <div className="era-divider">
              <span>
                Era {ERA_ROMAN[era.number - 1]} — {era.label}
              </span>
            </div>
            <img src={era.image} alt="" className="era-image" style={era.imagePosition ? { objectPosition: era.imagePosition } : undefined} />
            {eraEvents.map(({ event, globalIndex, side }) => {
              const hidden = !isVisible(event);
              const classNames = [
                "event",
                event.category,
                event.superhuman ? "superhuman" : "",
                side,
                hidden ? "hidden" : "",
              ]
                .filter(Boolean)
                .join(" ");

              const isExpanded = expandedId === globalIndex;
              return (
                <div key={globalIndex} className={classNames}>
                  <div
                    className={`card${isExpanded ? " expanded" : ""}`}
                    onClick={() => setExpandedId(isExpanded ? null : globalIndex)}
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
            })}
          </div>
        ))}
      </main>

      <footer>
        <p className="footer-legend">
          👑 = Superhuman milestone: machine exceeds the best humans, not just average
          &nbsp;—&nbsp; Data spans 100 BCE – 2025
        </p>

        <section className="bibliography">
          <h2 className="bib-heading">Image Credits</h2>

          <div className="bib-section">
            <h3 className="bib-subheading">Era Banners</h3>
            <ol className="bib-list">
              {eras.filter(e => e.imageCredit).map(era => {
                const c = era.imageCredit!;
                return (
                  <li key={era.number}>
                    <span className="bib-creator">{c.creator}</span>.{" "}
                    <em>{c.title}</em> ({c.date}).{" "}
                    <span className="bib-license">{c.license}</span>.{" "}
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="bib-link">
                      Wikimedia Commons
                    </a>.
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="bib-section">
            <h3 className="bib-subheading">Event Illustrations &amp; Photographs</h3>
            <ol className="bib-list">
              {(() => {
                const seen = new Set<string>();
                return events
                  .filter(e => e.imageCredit)
                  .filter(e => {
                    if (seen.has(e.imageCredit!.url)) return false;
                    seen.add(e.imageCredit!.url);
                    return true;
                  })
                  .map((e, i) => {
                    const c = e.imageCredit!;
                    return (
                      <li key={i}>
                        <span className="bib-creator">{c.creator}</span>.{" "}
                        <em>{c.title}</em> ({c.date}).{" "}
                        <span className="bib-license">{c.license}</span>.{" "}
                        <a href={c.url} target="_blank" rel="noopener noreferrer" className="bib-link">
                          Wikimedia Commons
                        </a>.
                      </li>
                    );
                  });
              })()}
            </ol>
          </div>

          <p className="bib-note">
            Remaining event card thumbnails are sourced from their linked Wikipedia articles.
            Each image is © its respective creator under the licence stated on its Wikimedia Commons page.
            Flag emblems: Font Awesome Free 6.7 (CC BY 4.0, Fonticons Inc.).
          </p>
        </section>
      </footer>
    </>
  );
}

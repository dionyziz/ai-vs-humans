import { Event, Era } from "@/data/events";

interface FooterProps {
  eras: Era[];
  events: Event[];
}

export default function Footer({ eras, events }: FooterProps) {
  const seen = new Set<string>();
  const uniqueEventCredits = events
    .filter((e) => e.imageCredit)
    .filter((e) => {
      if (seen.has(e.imageCredit!.url)) return false;
      seen.add(e.imageCredit!.url);
      return true;
    });

  return (
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
            {uniqueEventCredits.map((e, i) => {
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
            })}
          </ol>
        </div>

        <p className="bib-note">
          Remaining event card thumbnails are sourced from their linked Wikipedia articles.
          Each image is © its respective creator under the licence stated on its Wikimedia Commons page.
          Flag emblems: Font Awesome Free 6.7 (CC BY 4.0, Fonticons Inc.).
        </p>
      </section>

      <p className="site-credit">
        Created by{" "}
        <a href="https://dionyziz.com" target="_blank" rel="noopener noreferrer" className="bib-link">
          Dionysis Zindros
        </a>
      </p>
    </footer>
  );
}

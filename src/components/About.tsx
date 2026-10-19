export function About() {
  return (
    <section className="about section wrap" id="about">
      <div className="about-grid">
        <div className="reveal">
          <div className="eyebrow">03 / A little about me</div>
          <h2>
            Curiosity first.
            <br />
            <i style={{ color: "var(--accent)", fontWeight: 400 }}>
              Craft always.
            </i>
          </h2>
          <p>
            I enjoy making complicated technical ideas approachable — whether
            that&apos;s designing a better user interface, understanding why a
            system behaves the way it does, or helping teammates find a simpler
            solution.
          </p>
          <p>
            Outside of work, I like learning new things, exploring new places,
            and following an interesting conversation wherever it leads.
          </p>
        </div>
        <div className="details reveal">
          <div className="detail-row">
            <strong>Currently</strong>
            <span>
              Team Lead responsibilities in WMS frontend delivery, alongside
              backend integrations, cloud infrastructure, and AI automation at
              Anchanto.
            </span>
          </div>
          <div className="detail-row">
            <strong>Working with</strong>
            <span>
              Angular, React, TypeScript, Ruby on Rails, Node.js, and cloud
              integrations.
            </span>
          </div>
          <div className="detail-row">
            <strong>Exploring</strong>
            <span>
              AI-assisted workflows, systems design, and product engineering.
            </span>
          </div>
          <div className="detail-row">
            <strong>Based in</strong>
            <span>Pune, India.</span>
          </div>
          <div className="detail-row">
            <strong>Background</strong>
            <span>
              B.Tech in Information Technology, IIEST Shibpur (CGPA 8.98).
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

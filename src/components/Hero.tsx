export function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-main reveal">
        <div className="eyebrow">
          Full-stack software engineer / Team lead · Pune, India
        </div>
        <h1>
          Building software that makes <em>complex things</em> simple.
        </h1>
        <p className="lead">
          I&apos;m Nikhil, a software engineer who enjoys turning challenging
          technical problems into intuitive, dependable products. I work across
          full-stack development, system design, cloud infrastructure, and
          applied AI.
        </p>
        <div className="hero-actions" style={{ marginTop: 32 }}>
          <a className="btn" href="#work">
            Explore my work <span>↗</span>
          </a>
          <a
            className="btn outline"
            download="Nikhil_Kumar_Resume.pdf"
            href="/Nikhil_Kumar_Resume.pdf"
          >
            Download resume <span>↓</span>
          </a>
        </div>
      </div>
      <div className="hero-right reveal">
        <div className="hero-note">
          <div className="eyebrow">What I care about</div>
          <p>
            Reliable systems.
            <br />
            Useful experiences.
            <br />
            Engineering that lasts.
          </p>
        </div>
        <div className="hero-foot">
          <span>
            <span className="dot"></span> Selected work / 2022–2026
          </span>
          <span>Scroll to explore ↓</span>
        </div>
      </div>
    </section>
  );
}

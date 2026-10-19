"use client";
import { useState } from "react";
export function ReleaseDemo({ steps }: { steps: string[][] }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section
      className="interactive"
      aria-label="Release pipeline demonstration"
    >
      <div className="minihead">
        <span>Explore the delivery flow</span>
        <span>Choose a stage</span>
      </div>
      <div className="demo-controls">
        {steps.map(([title], index) => (
          <button
            key={title}
            className={`mini-btn ${active === index ? "selected" : ""}`}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          >
            {String(index + 1).padStart(2, "0")} · {title}
          </button>
        ))}
      </div>
      <div className="demo-result" aria-live="polite">
        {active === null
          ? "Choose a stage."
          : `${steps[active][0]} — ${steps[active][1]}`}
      </div>
      <p className="mini-copy">
        Independent architectural illustration. No live company data. Selecting
        a stage explains it and does not run or promote a release.
      </p>
    </section>
  );
}

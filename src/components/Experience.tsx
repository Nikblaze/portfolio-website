"use client";
import { useRef, useState, type KeyboardEvent } from "react";

const stages = [
  {
    tab: "Team Lead",
    time: "RECENT ↗",
    eyebrow: "CURRENT RESPONSIBILITIES / ANCHANTO",
    title: "Team Lead — owning delivery and decisions.",
    description:
      "Leading WMS frontend delivery through solution design, technical reviews, mentoring, release coordination, and production support, alongside full-stack integrations and AI initiatives. Formal title: Senior Software Developer.",
    bottom: "TEAM LEAD RESPONSIBILITIES · CURRENT",
  },
  {
    tab: "Senior software development",
    time: "ANCHANTO ↗",
    eyebrow: "CHAPTER 02 / ANCHANTO",
    title: "From feature ownership to systems thinking.",
    description:
      "Work across user-facing applications, backend services, secure integrations, delivery automation, and applied AI. Employed at Anchanto India since June 2022; current formal title: Senior Software Developer.",
    bottom: "ANCHANTO INDIA · JUNE 2022–PRESENT",
  },
  {
    tab: "Building the foundation",
    time: "2021–2022 ↗",
    eyebrow: "CHAPTER 01 / ANCHANTO + PWC",
    title: "Building a broad engineering foundation.",
    description:
      "Software Development Intern at Anchanto India, March–April 2022, building CI/CD for AWS QA/UAT environments. Previously a Technology Consultant Intern at PwC India, June–August 2021, working on Azure voice sentiment analysis with Twilio and Dynamics CRM.",
    bottom: "INTERNSHIPS · 2021–2022",
  },
];
export function Experience() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = (index + 1) % stages.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = (index + stages.length - 1) % stages.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = stages.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }
  const stage = stages[active];
  return (
    <section className="contrast chapter wrap" id="experience">
      <div className="sec-heading">
        <div>
          <div className="eyebrow">02 / Experience</div>
          <h2>
            Growing through
            <br />
            the work.
          </h2>
        </div>
        <p>
          The best engineering decisions come from understanding both the
          software and the people who depend on it.
        </p>
      </div>
      <div className="tabline">
        <div
          aria-label="Career stages"
          aria-orientation="vertical"
          className="timeline-tabs"
          role="tablist"
        >
          {stages.map((item, index) => (
            <button
              key={item.tab}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              id={`career-tab-${index}`}
              aria-controls="career-panel"
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              className={`time-tab ${active === index ? "active" : ""}`}
              role="tab"
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span>{item.tab}</span>
              <small>{item.time}</small>
            </button>
          ))}
        </div>
        <div
          className="timeline-detail"
          id="career-panel"
          role="tabpanel"
          aria-labelledby={`career-tab-${active}`}
          tabIndex={0}
        >
          <div>
            <div className="tiny">{stage.eyebrow}</div>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
          </div>
          <div className="tiny">{stage.bottom}</div>
        </div>
      </div>
    </section>
  );
}

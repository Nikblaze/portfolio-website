"use client";
import { useId, useState } from "react";

const samples = [
  {
    label: "Require photo proof before dispatch",
    scope: "warehouse",
    setting: "demo.require_dispatch_photo",
  },
  {
    label: "Require manager review before sensitive changes",
    scope: "tenant",
    setting: "demo.require_change_approval",
  },
  {
    label: "Retain an audit trail of configuration changes",
    scope: "company",
    setting: "demo.enable_config_audit_log",
  },
];
export function ConfigurationDemo() {
  const id = useId();
  const [selection, setSelection] = useState(0);
  const [proposal, setProposal] = useState<number | null>(null);
  const [reviewed, setReviewed] = useState(false);
  const sample = proposal === null ? null : samples[proposal];
  return (
    <section className="interactive" aria-label="Configuration demonstration">
      <div className="minihead">
        <span>Try a sample requirement</span>
        <span>Deterministic mock</span>
      </div>
      <label className="mini-copy" htmlFor={id}>
        Illustrative warehouse request
      </label>
      <select
        id={id}
        className="demo-select"
        value={selection}
        onChange={(event) => {
          setSelection(Number(event.target.value));
          setProposal(null);
          setReviewed(false);
        }}
      >
        {samples.map((sample, index) => (
          <option key={sample.setting} value={index}>
            {sample.label}
          </option>
        ))}
      </select>
      <div className="demo-controls">
        <button
          className="mini-btn"
          onClick={() => {
            setProposal(selection);
            setReviewed(false);
          }}
        >
          Generate sample proposal ↗
        </button>
        {sample && (
          <button
            className="mini-btn"
            disabled={reviewed}
            onClick={() => setReviewed(true)}
          >
            Mark reviewed locally
          </button>
        )}
      </div>
      <div className="demo-result" aria-live="polite">
        {sample ? (
          <>
            {reviewed
              ? "Mock proposal · reviewed locally"
              : "Mock proposal · human review required"}
            <pre>
              {JSON.stringify(
                {
                  scope: sample.scope,
                  setting: sample.setting,
                  proposed: true,
                },
                null,
                2,
              )}
            </pre>
            No changes applied.
          </>
        ) : (
          "Select a request and generate a mock proposal."
        )}
      </div>
      <p className="mini-copy">
        Placeholder setting names, not real configuration identifiers. Nothing
        is saved, sent, or applied. The review control only illustrates the
        separation between proposing and approving a change.
      </p>
    </section>
  );
}

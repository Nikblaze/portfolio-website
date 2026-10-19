"use client";
import { useState } from "react";

type Transfer = "idle" | "started" | "interrupted" | "acknowledged";
const messages: Record<Transfer, string> = {
  idle: "Ready to start an illustrative six-part transfer.",
  started: "Parts 1–3 acknowledged. The remaining parts are pending.",
  interrupted:
    "Network interrupted while transferring part 4. Earlier acknowledged parts remain recorded in this simulation.",
  acknowledged:
    "All six parts acknowledged. A real backend must validate them and finalize the file before marking upload complete.",
};
export function UploadDemo() {
  const [state, setState] = useState<Transfer>("idle");
  const count = state === "idle" ? 0 : state === "acknowledged" ? 6 : 3;
  return (
    <section className="interactive" aria-label="Video upload demonstration">
      <div className="minihead">
        <span>Resumable upload concept</span>
        <span>Six synthetic parts</span>
      </div>
      <div className="chunk-grid" aria-label="Simulated transfer parts">
        {Array.from({ length: 6 }, (_, index) => {
          const number = index + 1;
          const status =
            number <= count
              ? "done"
              : state === "interrupted" && number === 4
                ? "failed"
                : "";
          return (
            <div
              key={number}
              className={`chunk ${status}`}
              aria-label={`Part ${number} ${status === "done" ? "acknowledged" : status || "pending"}`}
            >
              <strong>{String(number).padStart(2, "0")}</strong>
              <small>
                {status === "done"
                  ? "ACK"
                  : status === "failed"
                    ? "FAILED"
                    : "WAIT"}
              </small>
            </div>
          );
        })}
      </div>
      <label className="mini-copy block mt-4">
        Acknowledged parts: {count} of 6
        <progress className="block w-full mt-2" value={count} max={6} />
      </label>
      <div className="demo-controls">
        <button
          className="mini-btn"
          disabled={state !== "idle"}
          onClick={() => setState("started")}
        >
          Start transfer
        </button>
        <button
          className="mini-btn"
          disabled={state !== "started"}
          onClick={() => setState("interrupted")}
        >
          Simulate network failure
        </button>
        <button
          className="mini-btn"
          disabled={state !== "started" && state !== "interrupted"}
          onClick={() => setState("acknowledged")}
        >
          Retry remaining parts
        </button>
        <button className="mini-btn" onClick={() => setState("idle")}>
          Reset
        </button>
      </div>
      <div className="demo-result" aria-live="polite">
        {messages[state]}
      </div>
      <p className="mini-copy">
        Educational client-side state machine. No recording or upload takes
        place. Synthetic transfer parts are not claims about MediaRecorder
        chunks, HTTP chunks, or S3 multipart UploadPart. The production protocol
        remains to be validated.
      </p>
    </section>
  );
}

"use client";
import { useId, useState } from "react";

const initialRacks = [
  2, 3, 5, 6, 9, 10, 12, 13, 16, 17, 19, 20, 23, 24, 26, 27,
];
const batches = [
  { cell: 3, id: "B-101", expiry: 4, type: "standard" },
  { cell: 10, id: "B-102", expiry: 2, type: "cold" },
  { cell: 17, id: "B-103", expiry: 8, type: "standard" },
  { cell: 24, id: "B-104", expiry: 6, type: "cold" },
];
export function WarehouseDemo() {
  const id = useId();
  const [racks, setRacks] = useState(initialRacks);
  const [rule, setRule] = useState("expiry");
  const [type, setType] = useState("standard");
  const [revision, setRevision] = useState(0);
  // Eligibility is independent of priority and the conceptual displayed itinerary.
  const eligible = batches.filter(
    (batch) => racks.includes(batch.cell) && batch.type === type,
  );
  const chosen = [...eligible].sort((a, b) =>
    rule === "expiry" ? a.expiry - b.expiry : a.cell - b.cell,
  )[0];
  function toggle(cell: number) {
    setRacks((previous) =>
      previous.includes(cell)
        ? previous.filter((value) => value !== cell)
        : [...previous, cell],
    );
  }
  return (
    <section className="interactive" aria-label="Warehouse demonstration">
      <div className="minihead">
        <span>Picking route explorer</span>
        <span>Simulated inventory</span>
      </div>
      <div className="demo-controls">
        <label className="demo-label" htmlFor={`${id}-priority`}>
          Pick priority
          <select
            id={`${id}-priority`}
            className="demo-select"
            value={rule}
            onChange={(event) => setRule(event.target.value)}
          >
            <option value="expiry">Earliest expiry (FEFO)</option>
            <option value="proximity">Closest eligible stock</option>
          </select>
        </label>
        <label className="demo-label" htmlFor={`${id}-type`}>
          Project type
          <select
            id={`${id}-type`}
            className="demo-select"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="standard">Standard</option>
            <option value="cold">Cold-chain</option>
          </select>
        </label>
      </div>
      <div
        className="warehouse"
        aria-label="Illustrative warehouse picking layout"
      >
        {Array.from({ length: 28 }, (_, cell) => {
          const rack = racks.includes(cell),
            batch = batches.find((batch) => batch.cell === cell);
          return (
            <button
              key={cell}
              className={`cell ${rack ? "rack" : ""} ${chosen?.cell === cell ? "chosen-pick" : ""}`}
              aria-label={`${rack ? "Remove" : "Add"} rack at position ${cell + 1}${batch ? `, ${batch.id}` : ""}`}
              aria-pressed={rack}
              onClick={() => toggle(cell)}
            >
              {rack ? (batch?.id ?? "▤") : "+"}
            </button>
          );
        })}
      </div>
      <div className="demo-controls">
        <button
          className="mini-btn"
          onClick={() => setRevision((value) => value + 1)}
        >
          Recalculate route
        </button>
        <button
          className="mini-btn"
          onClick={() => {
            setRacks(initialRacks);
            setRevision(0);
          }}
        >
          Reset layout
        </button>
      </div>
      <div className="demo-result" aria-live="polite">
        {chosen ? (
          <>
            Selected {chosen.id} ({chosen.type}) · Sample expiry priority{" "}
            {chosen.expiry}.<br />
            Conceptual route: START → aisle {Math.floor(chosen.cell / 7) + 1},
            bay {(chosen.cell % 7) + 1} → PACK.
            <br />
            {rule === "expiry"
              ? "Earliest-expiry eligible batch."
              : "Nearest eligible batch in the sample index-distance model."}
          </>
        ) : (
          "No eligible stocked batch for this project type. Try restoring a rack or switching the project type."
        )}
        {revision > 0 && (
          <span className="block mt-2">
            Route recalculated · revision {revision}.
          </span>
        )}
      </div>
      <p className="mini-copy">
        Click cells to adjust racks. Stock eligibility and picking priority
        precede the displayed route. Synthetic expiry and project-type rules. No
        obstacle avoidance or route optimization is simulated. This is not the
        company allocation engine.
      </p>
    </section>
  );
}

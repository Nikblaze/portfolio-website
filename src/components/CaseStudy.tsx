import type { Project } from "@/data/projects";
import { WarehouseDemo } from "./demos/WarehouseDemo";
import { UploadDemo } from "./demos/UploadDemo";
import { ConfigurationDemo } from "./demos/ConfigurationDemo";
import { ReleaseDemo } from "./demos/ReleaseDemo";

export function CaseStudy({
  project,
  page = false,
}: {
  project: Project;
  page?: boolean;
}) {
  const Heading = page ? "h1" : "h2";
  const Subheading = page ? "h2" : "h3";
  return (
    <>
      <div className="eyebrow">{project.eyebrow}</div>
      <Heading>{project.title}</Heading>
      <p className="modal-desc">{project.desc}</p>
      <p className="project-disclaimer">
        Public-safe reconstruction · Synthetic data · No proprietary code
      </p>
      {project.demo === "warehouse" && <WarehouseDemo />}
      {project.demo === "upload" && <UploadDemo />}
      {project.demo === "ai" && <ConfigurationDemo />}
      {project.demo === "steps" && <ReleaseDemo steps={project.steps ?? []} />}
      <div className="modal-grid">
        <div>
          <Subheading className="case-label">
            The organizational problem
          </Subheading>
          <p>{project.challenge}</p>
          <Subheading className="case-label">My contribution</Subheading>
          <p>{project.role}</p>
          <Subheading className="case-label">System boundaries</Subheading>
          <p>{project.architecture}</p>
        </div>
        <div>
          <Subheading className="case-label">
            Engineering considerations
          </Subheading>
          <ul>
            {project.decisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
          <Subheading className="case-label">Outcome / status</Subheading>
          <p>{project.outcome}</p>
        </div>
      </div>
    </>
  );
}

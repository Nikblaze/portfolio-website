import Image from "next/image";
import { projects } from "@/data/projects";
import { ProjectDialog } from "./ProjectDialog";
import { CaseStudy } from "./CaseStudy";

export function Projects() {
  return (
    <section className="projects section wrap" id="work">
      <div className="sec-heading">
        <div>
          <div className="eyebrow">01 / Selected work</div>
          <h2>Selected Work</h2>
        </div>
        <p>
          A closer look at engineering challenges I have worked on — from
          backend workflows and reliable cloud integration to applied AI and
          interactive products.
        </p>
      </div>
      {projects.map((project) => (
        <article className="project" key={project.slug}>
          <div className="project-art">
            <Image
              src={project.illustration}
              alt={project.illustrationAlt}
              width={700}
              height={390}
            />
            <div className="art-stamp">{project.stamp}</div>
          </div>
          <div className="project-text">
            <div className="p-num">{project.category}</div>
            <h3>{project.headline}</h3>
            <p>{project.summary}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <ProjectDialog slug={project.slug} title={project.title}>
              <CaseStudy project={project} />
            </ProjectDialog>
          </div>
        </article>
      ))}
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { personalProjects, projects } from "@/data/projects";
import { SectionTitle, fadeIn } from "@/lib/presentation";
import RocwinsCaseStudy from "@/components/RocwinsCaseStudy";
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article {...fadeIn} className={`project-card ${project.tone}`}>
      <div className="project-card-top">
        <span className="project-index">
          0{index + 2} / {project.type}
        </span>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${project.name}`}
          >
            <ArrowUpRight size={18} />
          </a>
        ) : (
          <span className="project-role">CONTRIBUTOR</span>
        )}
      </div>
      <div className="project-art">
        <div className="art-orbit" />
        <span>
          {project.name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </span>
        <small>{project.name.toUpperCase()}</small>
      </div>
      <h3>{project.name}</h3>
      <p>{project.desc}</p>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      {project.url && (
        <a
          className="project-bottom-link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          Explore project <ArrowRight size={15} />
        </a>
      )}
    </motion.article>
  );
}
function PersonalProjectCards() {
  const cure = personalProjects.cureConnect,
    hope = personalProjects.nextHope;
  return (
    <section className="section shell">
      <SectionTitle
        eyebrow="06 / PERSONAL BUILDS"
        description="Independent explorations built around people and practical needs."
      >
        Projects with <em>purpose.</em>
      </SectionTitle>
      <div className="personal-grid">
        <motion.article {...fadeIn} className="personal-card cure">
          <div className="personal-top">
            <span>{cure.type}</span>
            <span>01</span>
          </div>
          <div className="personal-visual">
            <div className="pill-shape">+</div>
            <span>CARE, PASSED ON</span>
          </div>
          <h3>{cure.name}</h3>
          <p>{cure.description}</p>
          <div className="personal-features">
            {cure.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
          <div className="tag-row">
            {cure.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="placeholder-links">
            <span>
              Frontend repo <small>URL TO ADD</small>
            </span>
            <span>
              Backend repo <small>URL TO ADD</small>
            </span>
            <span>
              Live project <small>URL TO ADD</small>
            </span>
          </div>
        </motion.article>
        <motion.article {...fadeIn} className="personal-card nexthope">
          <div className="personal-top">
            <span>{hope.type}</span>
            <span>02</span>
          </div>
          <div className="personal-visual">
            <div className="hope-sun" />
            <span>OPPORTUNITY, TOGETHER</span>
          </div>
          <h3>{hope.name}</h3>
          <p>{hope.description}</p>
          <div className="personal-features">
            {hope.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
          <div className="tag-row">
            {hope.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
export default function Projects() {
  return (
    <>
      <section id="projects" className="section shell">
        <SectionTitle
          eyebrow="03 / SELECTED WORK"
          description="A closer look at platforms and systems I’ve helped bring to life."
        >
          Built to solve <em>real problems.</em>
        </SectionTitle>
        <RocwinsCaseStudy />
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </section>
      <PersonalProjectCards />
    </>
  );
}

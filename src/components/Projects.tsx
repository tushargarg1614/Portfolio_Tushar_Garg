"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { personalProjects, projects } from "@/data/projects";
import { SectionTitle, fadeIn } from "@/lib/presentation";
import ProjectImage from "@/components/ProjectImage";
import RocwinsCaseStudy from "@/components/RocwinsCaseStudy";

type Project = (typeof projects)[number];

function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [onClose]);

  return (
    <motion.div
      className="project-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.985 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <header className="project-modal-header">
          <div>
            <span className="project-modal-eyebrow">{project.type}</span>
            <h2 id="project-modal-title">{project.name}</h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="project-modal-close"
            onClick={onClose}
            aria-label={`Close ${project.name} details`}
          >
            <X size={19} aria-hidden="true" />
          </button>
        </header>
        <div className="project-modal-content">
          <ProjectImage
            src={project.image}
            label={project.name}
            className="project-modal-image"
            sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 900px) 80vw, 840px"
          />
          <div className="project-detail-block">
            <h4>Overview</h4>
            <p>{project.overview}</p>
          </div>

          {"platforms" in project && (
            <div className="ravel-platforms">
              <h4>Four connected platforms</h4>
              <div className="ravel-platform-grid">
                {project.platforms.map((platform) => (
                  <article className="ravel-platform" key={platform.name}>
                    <ProjectImage
                      src={platform.image}
                      label={platform.name}
                      className="ravel-platform-image"
                      sizes="(max-width: 650px) calc(100vw - 64px), (max-width: 900px) 38vw, 390px"
                    />
                    <h5>{platform.name}</h5>
                    <p>{platform.description}</p>
                    {platform.features.length > 0 && (
                      <ul>
                        {platform.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </div>
          )}

          {"highlights" in project && (
            <div className="project-highlight-list">
              <h4>Contribution highlights</h4>
              {project.highlights.map((highlight, index) => (
                <article
                  className={
                    index === 0
                      ? "project-highlight ai-search-highlight"
                      : "project-highlight"
                  }
                  key={highlight.title}
                >
                  <h5>{highlight.title}</h5>
                  <p>{highlight.description}</p>
                  {index === 0 && (
                    <div
                      className="ai-search-example"
                      aria-label="AI business search flow example"
                    >
                      <span className="ai-search-eyebrow">
                        WHAT DO YOU NEED?
                      </span>
                      <b>AI Search</b>
                      <p>
                        Describe what you are looking for in plain language and
                        we will find the best matches for you.
                      </p>
                      <div className="ai-search-action">Find for me</div>
                      <div className="ai-search-suggestions">
                        {[
                          "Accountant",
                          "Mechanic",
                          "Counselor",
                          "Plumber",
                          "Electrician",
                        ].map((suggestion) => (
                          <span key={suggestion}>{suggestion}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}

          {project.sections.map((section) => (
            <div className="project-detail-block" key={section.title}>
              <h4>{section.title}</h4>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {project.technologies.length > 0 && (
            <div className="project-detail-block">
              <h4>Technologies</h4>
              <div className="tag-row">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          )}

          {project.url && (
            <a
              className="project-bottom-link"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live website <ArrowRight size={15} />
            </a>
          )}
        </div>
      </motion.section>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  onViewDetails,
}: {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
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
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name}`}
          >
            <ArrowUpRight size={18} />
          </a>
        ) : (
          <span className="project-role">TEAM CONTRIBUTION</span>
        )}
      </div>
      <ProjectImage src={project.image} label={project.name} />
      <h3>{project.name}</h3>
      <p>{project.desc}</p>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <button
        type="button"
        className="project-details-trigger"
        onClick={(event) => {
          event.stopPropagation();
          onViewDetails(project);
        }}
      >
        <span>View details</span>
        <ArrowRight size={15} aria-hidden="true" />
      </button>
      {project.url && (
        <a
          className="project-bottom-link"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit live website <ArrowRight size={15} />
        </a>
      )}
    </motion.article>
  );
}

function PersonalProjectCards() {
  const cure = personalProjects.cureConnect;
  const hope = personalProjects.nextHope;

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="section shell">
        <SectionTitle
          eyebrow="03 / SELECTED WORK"
          description="A closer look at platforms and systems I have helped bring to life."
        >
          Built to solve <em>real problems.</em>
        </SectionTitle>
        <RocwinsCaseStudy />
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>
      </section>
      <PersonalProjectCards />
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            key={selectedProject.name}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

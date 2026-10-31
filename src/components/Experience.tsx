"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { SectionTitle, fadeIn } from "@/lib/presentation";

export default function Experience() {
  return (
    <section id="experience" className="section shell">
      <SectionTitle
        eyebrow="02 / EXPERIENCE"
        description="Product delivery, AI integration and production systems across client teams."
      >
        The work, <em>in context.</em>
      </SectionTitle>
      <div className="timeline">
        {experiences.map((job, index) => (
          <motion.article
            {...fadeIn}
            className="timeline-item"
            key={job.company}
          >
            <div className="timeline-marker">0{index + 1}</div>
            <div className="timeline-main">
              <div className="timeline-heading">
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>
                <span>{job.date}</span>
              </div>
              <p className="experience-summary">{job.summary}</p>
              <div className="experience-groups">
                {job.groups.map((group) => (
                  <section className="experience-group" key={group.title}>
                    <h4>{group.title}</h4>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <strong>{item.label}:</strong> {item.detail}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
              <div className="experience-stack" aria-label="Technologies used">
                <span className="experience-stack-label">TECHNOLOGIES</span>
                <div className="tag-row">
                  {job.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

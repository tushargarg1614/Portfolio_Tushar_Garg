"use client";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { SectionTitle, fadeIn } from "@/lib/presentation";
export default function Experience() {
  return (
    <section id="experience" className="section shell">
      <SectionTitle
        eyebrow="02 / EXPERIENCE"
        description="Growing through real product work, delivery and long-lived systems."
      >
        The work, <em>in context.</em>
      </SectionTitle>
      <div className="timeline">
        {experiences.map((job, i) => (
          <motion.article
            {...fadeIn}
            className="timeline-item"
            key={job.company}
          >
            <div className="timeline-marker">0{i + 1}</div>
            <div className="timeline-main">
              <div className="timeline-heading">
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>
                <span>{job.date}</span>
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

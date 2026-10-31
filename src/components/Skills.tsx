"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { SectionTitle, fadeIn } from "@/lib/presentation";
export default function Skills() {
  return (
    <section id="skills" className="section shell">
      <SectionTitle
        eyebrow="04 / TOOLKIT"
        description="The tools I reach for to design, build and ship dependable software."
      >
        A practical <em>toolkit.</em>
      </SectionTitle>
      <div className="skills-grid">
        {skills.map(({ icon: Icon, name, list }, index) => (
          <motion.div {...fadeIn} className="skill-card" key={name}>
            <span className="skill-number">0{index + 1}</span>
            <Icon size={20} strokeWidth={1.6} />
            <h3>{name}</h3>
            <p>{list}</p>
            <span className="skill-rule" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

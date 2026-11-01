"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { SectionTitle, fadeIn } from "@/lib/presentation";
export default function AISection() {
  return (
    <section className="section shell approach-section">
      <div>
        <SectionTitle
          eyebrow="05 / AI & DEVELOPMENT"
          description="Engineering ownership stays at the center—from the first decision to the shipped behavior."
        >
          Useful AI. <em>Thoughtfully engineered.</em>
        </SectionTitle>
      </div>
      <div className="approach-cards">
        <motion.article {...fadeIn}>
          <div className="approach-icon">
            <Code2 size={20} />
          </div>
          <span className="eyebrow">AI-ASSISTED DEVELOPMENT</span>
          <h3>Move faster with care.</h3>
          <p>
            I use AI coding assistants and Generative AI tools to accelerate
            development, debug issues, explore solutions and improve engineering
            productivity—while owning the implementation and its quality.
          </p>
          <div className="approach-line">
            <span>DEVELOPMENT WORKFLOW</span>
            <ArrowRight size={15} />
          </div>
        </motion.article>
        <motion.article {...fadeIn}>
          <div className="approach-icon">
            <Sparkles size={20} />
          </div>
          <span className="eyebrow">PRODUCTION AI ENGINEERING</span>
          <h3>Build capability into products.</h3>
          <p>
            Hands-on implementation of RAG chatbots, LLM integrations, vector
            search, document processing, product
            recommendations and AI-assisted business workflows.
          </p>
          <div className="approach-line">
            <span>APPLICATION FEATURES</span>
            <ArrowRight size={15} />
          </div>
        </motion.article>
      </div>
    </section>
  );
}

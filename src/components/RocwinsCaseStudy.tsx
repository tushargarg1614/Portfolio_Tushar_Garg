"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { rocwinModules, rocwinProject } from "@/data/projects";
import { fadeIn } from "@/lib/presentation";
function Architecture() {
  const apps = [
    ["01", "Customer web app", "Commerce · RFQ · Accounts"],
    ["02", "Admin & sales", "CRM · Pipeline · Quotations"],
    ["03", "Catalogue & marketing", "PIM · Vendors · Campaigns"],
  ];
  return (
    <div className="architecture" aria-label="Rocwins platform architecture">
      <div className="arch-apps">
        {apps.map(([number, name, summary]) => (
          <div className="arch-node" key={number}>
            <span className="node-icon">{number}</span>
            <b>{name}</b>
            <small>{summary}</small>
          </div>
        ))}
      </div>
      <div className="arch-connector">
        <i />
        <i />
        <i />
      </div>
      <div className="ai-engine">
        <div className="engine-orbit">
          <Sparkles size={20} />
        </div>
        <div>
          <span className="eyebrow">SHARED INTELLIGENCE</span>
          <b>Centralized AI Engine</b>
          <small>RAG · LLMs · OCR · Vector Search</small>
        </div>
      </div>
      <div className="arch-foot">
        <span>ONE CONNECTED PLATFORM</span>
        <span className="live-dot">Core capabilities delivered</span>
      </div>
    </div>
  );
}
export default function RocwinsCaseStudy() {
  return (
    <motion.article {...fadeIn} className="rocwins-feature">
      <div className="feature-top">
        <div>
          <span className="project-index">
            FEATURED CASE STUDY <span>01</span>
          </span>
          <h3>{rocwinProject.name}</h3>
          <p className="feature-subtitle">{rocwinProject.title}</p>
        </div>
        <a
          className="round-link"
          href={rocwinProject.url}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Rocwins website"
        >
          <ArrowUpRight />
        </a>
      </div>
      <div className="feature-body">
        <div className="feature-description">
          <span className="eyebrow">END-TO-END FULL STACK DEVELOPMENT</span>
          <p>
            Rocwins is a Bengaluru-based corporate gifting and branded
            merchandise business. I delivered a connected platform that brings
            customer commerce, sales operations and catalogue workflows together
            with shared AI capabilities.
          </p>
          <div className="tag-row">
            {rocwinProject.technologies.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a
            className="feature-link"
            href={rocwinProject.url}
            target="_blank"
            rel="noreferrer"
          >
            Visit live platform <ArrowUpRight size={15} />
          </a>
        </div>
        <Architecture />
      </div>
      <div className="feature-modules">
        {rocwinModules.map((module) => (
          <div key={module.number}>
            <span>{module.number}</span>
            <h4>{module.name}</h4>
            <p>{module.description}</p>
          </div>
        ))}
      </div>
      <div className="feature-ai-note">
        <Sparkles size={16} />
        <p>
          <b>Centralized AI engine</b> — Reusable AI APIs support document
          processing, embeddings, vector retrieval, OCR extraction,
          recommendations, workflow assistance, confidence scoring, guardrails
          and activity logging.
        </p>
      </div>
    </motion.article>
  );
}

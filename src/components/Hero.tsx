"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";

import ProfilePhoto from "@/components/ProfilePhoto";

export default function Hero() {
  return (
    <section className="hero shell">
      <div className="hero-grid" />

      <div className="hero-copy">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="availability">
            <i />
            CHANDIGARH, INDIA <span>·</span> FULL STACK DEVELOPER
          </span>

          <p className="hero-kicker">ENGINEERING FOR THE REAL WORLD</p>

          <h1>
            TUSHAR
            <br />
            <span>GARG</span>
            <b>.</b>
          </h1>

          <p className="hero-lead">
            Building production-ready SaaS platforms, scalable web applications
            and AI-powered solutions.
          </p>

          <p className="hero-intro">
            I build web applications that solve real business problems — from
            customer-facing platforms and complex backend systems to AI-powered
            automation. I enjoy taking ownership of features from development to
            production.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects
              <ArrowUpRight size={17} />
            </a>

            <a className="button button-outline" href="#contact">
              Contact me
            </a>

            <a className="text-link" href="/TusharGarg_FullStack-Ai" download>
              Download resume
              <ArrowDownRight size={15} />
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/tushargarg1614/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub placeholder"
            >
              <Github size={17} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/tushar-garg-web-developer/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn placeholder"
            >
              <Linkedin size={17} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="hero-side">
        <ProfilePhoto />

        <div className="hero-vertical">
          FULL STACK &middot; AI INTEGRATION &middot; SAAS
        </div>
      </div>

      <a href="#about" className="scroll-cue">
        <span />
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}

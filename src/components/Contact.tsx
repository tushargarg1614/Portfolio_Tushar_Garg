"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { fadeIn } from "@/lib/presentation";
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="shell contact-inner">
        <motion.div {...fadeIn}>
          <span className="eyebrow">07 / START A CONVERSATION</span>
          <h2>
            Have a good
            <br />
            problem to <em>solve?</em>
          </h2>
          <p>
            I’m open to conversations about full-stack roles, product
            engineering and practical AI applications.
          </p>
          <a
            className="button button-primary"
            href="mailto:tushargarg50797@gmail.com"
          >
            Get in touch <ArrowUpRight size={17} />
          </a>
        </motion.div>
        <div className="contact-details">
          <a href="mailto:tushargarg50797@gmail.com">
            <span>
              <Mail size={17} />
            </span>
            <small>EMAIL</small>
            <b>tushargarg50797@gmail.com</b>
            <ArrowUpRight size={15} />
          </a>
          <a href="tel:+919877917501">
            <span>
              <Phone size={17} />
            </span>
            <small>PHONE</small>
            <b>+91 98779 17501</b>
            <ArrowUpRight size={15} />
          </a>
          <a
            href="https://github.com/tushargarg1614/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <Github size={17} />
            </span>
            <small>GITHUB</small>
            <b>https://github.com/tushargarg1614/</b>
            <ArrowUpRight size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-garg-web-developer/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <Linkedin size={17} />
            </span>
            <small>LINKEDIN</small>
            <b>https://www.linkedin.com/in/tushar-garg-web-developer/</b>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

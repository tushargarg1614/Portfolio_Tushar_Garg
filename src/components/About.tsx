"use client";
import { SectionTitle } from "@/lib/presentation";
export default function About() {
  return (
    <section id="about" className="section shell">
      <SectionTitle
        eyebrow="01 / ABOUT"
        description="An engineer who enjoys owning the whole feature lifecycle."
      >
        I build for the <em>business behind</em> the brief.
      </SectionTitle>
      <div className="about-content">
        <p className="about-statement">
          Full stack development with a focus on useful products, dependable
          systems and thoughtful delivery.
        </p>
        <div className="about-detail">
          <p>
            With around 1.5 years of professional experience, I work across
            customer-facing interfaces, backend services and production
            delivery. My work includes SaaS products, multi-tenant platforms and
            AI integrations that support practical business workflows.
          </p>
          <p>
            I partner with design and product teams, integrate APIs,
            troubleshoot existing systems and take features through deployment.
            I’m based in Chandigarh, India.
          </p>
          <div className="about-facts">
            <div>
              <b>1.5+</b>
              <span>YEARS IN PRODUCT TEAMS</span>
            </div>
            <div>
              <b>Full stack</b>
              <span>FROM UI TO DEPLOYMENT</span>
            </div>
            <div>
              <b>Applied AI</b>
              <span>IN PRODUCTION WORKFLOWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

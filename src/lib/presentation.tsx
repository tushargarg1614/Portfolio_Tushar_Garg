import { motion } from "framer-motion";
export const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55 },
} as const;
export function SectionTitle({
  eyebrow,
  children,
  description,
}: {
  eyebrow: string;
  children: React.ReactNode;
  description: string;
}) {
  return (
    <motion.div {...fadeIn} className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
      <p>{description}</p>
    </motion.div>
  );
}

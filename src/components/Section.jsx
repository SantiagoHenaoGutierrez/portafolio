import { motion } from "framer-motion";

export default function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">{title}</h2>
      {children}
    </motion.section>
  );
}

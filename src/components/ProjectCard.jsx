import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const { title, description, tags, image, links } = project;
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <div className="card-media">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p className="muted">{description}</p>
        <ul className="tags">
          {tags.map((t) => <li key={t} className="tag">{t}</li>)}
        </ul>
        <div className="card-actions">
          {links?.demo && <a className="btn btn-primary" href={links.demo} target="_blank" rel="noreferrer">Demo</a>}
          {links?.code && <a className="btn" href={links.code} target="_blank" rel="noreferrer">Código</a>}
        </div>
      </div>
    </motion.article>
  );
}

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const iconMap = { github: FaGithub, linkedin: FaLinkedin, web: FaGlobe };

export default function Hero({ site, social }) {
  return (
    <header className="hero">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow">Hola, soy</div>
        <h1 className="title">
          {site.title}
          <span className="accent"> — {site.role}</span>
        </h1>
        <p className="muted">{site.description}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">Ver proyectos</a>
          <a className="btn" href="#contact">Contáctame</a>
        </div>

        <div className="social">
          {social.map((s) => {
            const Icon = iconMap[s.icon] ?? FaGlobe;
            return (
              <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="social-icon" aria-label={s.name}>
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className="orb"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.2 }}
      />
    </header>
  );
}

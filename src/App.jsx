import { useMemo } from "react";
import { motion } from "framer-motion";
import content from "./content.json";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const { site, social, about, skills, projects, experience, contact } = content;

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <Navbar brand={site.title} />
      <main className="container">
        <Hero site={site} social={social} />

        <Section id="about" title="Sobre mí">
          <p className="muted">{about}</p>
        </Section>

        <Section id="skills" title="Habilidades">
          <ul className="chips">
            {skills.map((s) => (
              <li key={s} className="chip">{s}</li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Proyectos">
          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experiencia">
          <ul className="timeline">
            {experience.map((e, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="tl-dot" />
                <div className="tl-body">
                  <h4>{e.role} • <span className="muted">{e.company}</span></h4>
                  <div className="muted">{e.period}</div>
                  <p className="muted">{e.summary}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contacto">
          <div className="contact-box">
            <div>
              <div className="label">Email</div>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div>
              <div className="label">Ubicación</div>
              <div className="muted">{contact.location}</div>
            </div>
            {contact.cv && (
              <div>
                <a className="btn btn-primary" href={contact.cv} target="_blank" rel="noreferrer">
                  Ver CV
                </a>
              </div>
            )}
          </div>
        </Section>
      </main>

      <Footer text={`© ${year} ${site.title}. Todos los derechos reservados.`} />
    </>
  );
}

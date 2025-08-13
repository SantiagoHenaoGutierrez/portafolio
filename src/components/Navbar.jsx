import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ brand }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "Sobre mí" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Proyectos" },
    { href: "#experience", label: "Experiencia" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <motion.nav
      className="navbar glass"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <a href="#" className="brand">{brand}</a>

      <button className="nav-toggle" aria-label="Abrir menú" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        {links.map((l) => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </motion.nav>
  );
}

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer({ setActiveSection }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="social-links-row">
          <a
            href="https://github.com/isaacarvalho-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/isaac-carvalho-da-mota-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:isaacarvalho_pro@outlook.com"
            className="social-btn"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        
        <p className="footer-text">
          &copy; {currentYear} Isaac Carvalho Da Mota. Desenvolvido com React & CSS Customizado.
        </p>
        <p className="footer-credits">
          Trabalho Final de Interface Humano-Computador — IFSC
        </p>
      </div>
    </footer>
  );
}

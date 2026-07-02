import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Code } from 'lucide-react';

export default function Header({ activeSection, setActiveSection, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'resume', label: 'Currículo' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'contact', label: 'Contato' },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    // Scroll to top when changing views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={() => handleNavClick('home')}>
          <Code size={24} className="text-primary" />
          <span>IsaacMota</span>
          <span className="logo-dot"></span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn-icon theme-toggle-btn"
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon menu-toggle"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <ul className="nav-menu mobile-open">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

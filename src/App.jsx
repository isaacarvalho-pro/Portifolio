import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    // Apply theme to body
    if (theme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return (
          <div className="container" style={{ minHeight: '60vh', padding: '2rem 0' }}>
            <div className="section-header">
              <h2 className="section-title">Contato</h2>
              <p className="section-subtitle">
                Entre em contato preenchendo o formulário abaixo ou pelas redes sociais.
              </p>
              <div className="divider"></div>
            </div>
            <ContactForm />
          </div>
        );
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="app-container">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <main className="main-content">
        {renderContent()}
      </main>

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

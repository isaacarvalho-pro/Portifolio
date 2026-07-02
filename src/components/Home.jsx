import React from 'react';
import { Terminal, Database, Layout, Settings, FileText, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Home({ setActiveSection }) {
  const skills = [
    {
      icon: <Terminal size={24} />,
      title: 'Back-end Java',
      description: 'Desenvolvimento sólido utilizando Java, ecossistema Spring (Spring Boot, Spring MVC, Security, Data JPA), construindo APIs RESTful seguras, otimizadas e bem documentadas.'
    },
    {
      icon: <Database size={24} />,
      title: 'Bancos de Dados',
      description: 'Modelagem relacional de dados, escrita de queries SQL complexas, procedimentos (Stored Procedures) e otimização de desempenho com foco em SQL Server.'
    },
    {
      icon: <Layout size={24} />,
      title: 'Front-end & Web',
      description: 'Criação de páginas responsivas e dinâmicas utilizando HTML5, CSS3, JavaScript ES6+ e interfaces de alta interatividade com a biblioteca React.'
    },
    {
      icon: <Settings size={24} />,
      title: 'Infra & Ferramentas',
      description: 'Versionamento de código estruturado com Git, noções de conteinerização com Docker e metodologias ágeis de desenvolvimento de software.'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-info animate-fade-in-up">
          <div className="badge">
            <span className="logo-dot" style={{ backgroundColor: 'var(--color-primary)' }}></span>
            Disponível para novos desafios
          </div>
          <h1 className="hero-title">
            Olá, eu sou o <br />
            <span className="gradient-text">Isaac Carvalho</span>
          </h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '-0.5rem' }}>
            Desenvolvedor Java & Back-end
          </h2>
          <p className="hero-description">
            Desenvolvedor com experiência prática em sistemas corporativos, especializado no ecossistema **Java/Spring** e bancos de dados **SQL Server**. Focado em entregar regras de negócio robustas e APIs performáticas.
          </p>
          <div className="hero-cta">
            <button onClick={() => setActiveSection('portfolio')} className="btn-primary">
              Ver Portfólio
              <ArrowRight size={18} />
            </button>
            <button onClick={() => setActiveSection('resume')} className="btn-secondary">
              <FileText size={18} />
              Ver Currículo
            </button>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in">
          <div className="blob-bg"></div>
          <div className="avatar-wrapper">
            <img src="/images/avatar.png" alt="Isaac Carvalho Da Mota" className="avatar-img" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container" style={{ padding: '5rem 0' }}>
        <div className="section-header">
          <h2 className="section-title">Habilidades & Interesses</h2>
          <p className="section-subtitle">
            Meu foco técnico está em arquiteturas robustas no back-end, integradas a bancos de dados consolidados e interfaces web interativas.
          </p>
          <div className="divider"></div>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card hover-lift">
              <div className="skill-icon-wrapper">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.title}</h3>
              <p className="skill-desc">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container" id="contact" style={{ padding: '5rem 0 2rem 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="section-header">
          <h2 className="section-title">Contato</h2>
          <p className="section-subtitle">
            Quer discutir uma vaga, projeto freelancer ou tirar dúvidas? Envie uma mensagem!
          </p>
          <div className="divider"></div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}

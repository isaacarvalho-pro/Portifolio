import React, { useState } from 'react';
import { Github, ExternalLink, X, Calendar, Database, Layers } from 'lucide-react';

const INITIAL_PROJECTS = [
  {
    id: 1,
    title: 'Drogaria Amarante',
    category: 'Back-end',
    image: '/images/project1.png',
    description: 'Projeto base para uma drogaria simulando um loja online, com Java e Spring',
    longDescription: 'Projeto acadêmico desenvolvido no Instituto Federal de Santa Catarina – Câmpus Gaspar com intuito de fazer uma loja online para uma drogaria que até então só conseguia vender de forma presencial.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'SQL SERVER', 'JWT'],
    github: 'https://github.com/isaacarvalho-pro/school-management-api',
    demo: 'https://github.com/isaacarvalho-pro'
  },
  {
    id: 3,
    title: 'Barbearia Chico Lemes',
    category: 'Front-end',
    image: '/images/project3.png',
    description: 'Landing page para Barbearia Chico Lemes',
    longDescription: 'Landing Page feita utilizando conceitos de alinhamento flex-box e grid no css',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
    github: 'https://github.com/isaacarvalho-pro/LandingPage',
    demo: 'https://github.com/isaacarvalho-pro'
  }
];

export default function Portfolio() {
  const [projects] = useState(INITIAL_PROJECTS);
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  // Categorias disponíveis para os filtros
  const categories = ['Todos', 'Back-end', 'Front-end'];

  // Filtragem dos projetos
  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="container animate-fade-in">
      <div className="section-header">
        <h2 className="section-title">Portfólio de Projetos</h2>
        <p className="section-subtitle">
          Aqui estão alguns dos meus principais projetos desenvolvidos para consolidar meu conhecimento prático.
        </p>
        <div className="divider"></div>
      </div>

      {/* Filter Buttons */}
      <div className="filters-container no-print">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card hover-lift animate-fade-in-up">
            <div className="project-img-container">
              {/* NOTA DE IHC: Utilização do atributo native 'loading="lazy"' para garantir lazy loading automático e performático de imagens */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-img" 
                loading="lazy" 
              />
              <span className="project-badge-tag">{project.category}</span>
            </div>
            
            <div className="project-body">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-links no-print">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="btn-secondary" 
                  style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar"
            >
              <X size={18} />
            </button>
            
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="modal-hero-img" 
            />
            
            <div className="modal-body">
              <div>
                <span className="badge" style={{ marginBottom: '0.5rem' }}>{selectedProject.category}</span>
                <h3 className="section-title" style={{ textAlign: 'left', fontSize: '1.75rem' }}>{selectedProject.title}</h3>
              </div>

              <p className="hero-description" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {selectedProject.longDescription}
              </p>

              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Tecnologias Utilizadas
                </h4>
                <div className="project-tech">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag" style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem' }}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-links no-print" style={{ marginTop: '1rem', gap: '1rem' }}>
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <Github size={18} />
                    <span>Repositório</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

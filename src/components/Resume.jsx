import React from 'react';
import { Briefcase, GraduationCap, Download, Printer, Languages } from 'lucide-react';

export default function Resume() {
  const experiences = [
    {
      role: 'Desenvolvedor I',
      company: 'Lince Tech',
      period: '06/2024 - Presente',
      description: [
        'Desenvolvimento e manutenção de aplicações corporativas utilizando Java, JavaScript e SQL Server.',
        'Implementação de melhorias em regras de negócio e otimização de consultas SQL.',
        'Correção de inconsistências críticas em ambiente produtivo.',
        'Apoio na análise de requisitos técnicos e funcionais.',
        'Participação em reuniões técnicas e colaboração com equipes sob metodologia ágil.'
      ]
    },
    {
      role: 'Analista de Suporte',
      company: 'Solução Compacta',
      period: '10/2023 - 02/2024',
      description: [
        'Atendimento técnico e resolução de chamados de clientes.',
        'Manipulação de banco de dados SQL Server e desenvolvimento de scripts utilitários.',
        'Desenvolvimento de rotinas e pequenos ajustes em sistemas corporativos.',
        'Elaboração de relatórios gerenciais e documentação técnica.'
      ]
    },
    {
      role: 'Desenvolvedor Web - Estágio',
      company: 'ITPower Softwares',
      period: '05/2022 - 10/2022',
      description: [
        'Desenvolvimento e manutenção de aplicações web (HTML, CSS, JavaScript).',
        'Versionamento de código com Git e colaboração em equipe.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Análise e Desenvolvimento de Sistemas',
      school: 'Instituto Federal de Santa Catarina (IFSC)',
      period: '01/2024 - Em andamento',
      details: 'Foco em Engenharia de Software, Estruturas de Dados, Interface Humano-Computador, Desenvolvimento Web e Back-end.'
    },
    {
      degree: 'Técnico em Informática',
      school: 'Fundação Instituto de Educação de Barueri (FIEB)',
      period: '02/2021 - 12/2023',
      details: 'Ensino Médio Técnico integrado. Aprendizado prático em Lógica de Programação, Bancos de Dados, Redes de Computadores e Desenvolvimento Desktop/Web.'
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container animate-fade-in">
      <div className="section-header">
        <h2 className="section-title">Currículo Profissional</h2>
        <p className="section-subtitle">
          Minha jornada de formação acadêmica e experiências práticas na área de tecnologia.
        </p>
        <div className="divider"></div>
      </div>

      {/* Buttons block (Hidden during print) */}
      <div className="cv-download-section no-print">
        <a href="/cv-isaac.pdf" download="Curriculo_Isaac_Mota.pdf" className="btn-primary">
          <Download size={18} />
          <span>Baixar PDF</span>
        </a>
        <button onClick={handlePrint} className="btn-secondary">
          <Printer size={18} />
          <span>Imprimir Currículo</span>
        </button>
      </div>

      <div className="resume-layout" style={{ marginTop: '3rem' }}>
        {/* Experience Timeline */}
        <div>
          <h3 className="resume-column-title">
            <Briefcase size={22} />
            <span>Experiência Profissional</span>
          </h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card hover-lift resume-card">
                  <span className="time-badge">{exp.period}</span>
                  <h3>{exp.role}</h3>
                  <div className="company">{exp.company}</div>
                  <ul>
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education, Languages & Certs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <h3 className="resume-column-title">
              <GraduationCap size={22} />
              <span>Formação Acadêmica</span>
            </h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card hover-lift resume-card">
                    <span className="time-badge">{edu.period}</span>
                    <h3>{edu.degree}</h3>
                    <div className="company">{edu.school}</div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <h3 className="resume-column-title">
              <Languages size={22} />
              <span>Idiomas & Adicionais</span>
            </h3>
            <div className="timeline-card hover-lift resume-card" style={{ borderLeft: '3px solid var(--color-primary)' }}>
              <span className="time-badge">Inglês</span>
              <h3 style={{ marginBottom: '0.5rem' }}>Inglês — Intermediário/Avançado</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                Wizard by Pearson — W2 concluído | Atualmente cursando nível W4.
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                Capacidade sólida de leitura de documentação técnica, escrita de código autoexplicativo em inglês e comunicação corporativa básica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

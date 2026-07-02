import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Assunto é obrigatório.';
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="animate-fade-in-up">
      <div className="contact-layout">
        
        {/* Contact Info Column */}
        <div className="contact-info-column">
          <div>
            <h3 className="section-title text-primary" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Fale Comigo
            </h3>
            <p className="hero-description" style={{ marginBottom: '1.5rem' }}>
              Tem uma proposta, projeto ou quer apenas trocar uma ideia? Sinta-se à vontade para entrar em contato através do formulário ou pelas redes sociais.
            </p>
          </div>

          <div className="contact-info-list">
            <div className="contact-item">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div className="contact-details">
                <h4>E-mail</h4>
                <a href="mailto:isaacarvalho_pro@outlook.com">isaacarvalho_pro@outlook.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <Phone size={20} />
              </div>
              <div className="contact-details">
                <h4>Telefone</h4>
                <p>(11) 99330-4786</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <MapPin size={20} />
              </div>
              <div className="contact-details">
                <h4>Localização</h4>
                <p>Gaspar - SC</p>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              Redes Sociais
            </h4>
            <div className="social-links-row" style={{ marginTop: 0 }}>
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
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="contact-form-card">
          {isSubmitted && (
            <div className="form-success-alert animate-fade-in">
              <CheckCircle size={20} />
              <span>Mensagem enviada com sucesso! Entrarei em contato em breve.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'input-error' : ''}`}
                placeholder="Seu nome"
                disabled={isSubmitting}
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail Corporativo</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="seu.email@exemplo.com"
                disabled={isSubmitting}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`form-input ${errors.subject ? 'input-error' : ''}`}
                placeholder="Motivo do contato"
                disabled={isSubmitting}
              />
              {errors.subject && <span className="error-msg">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`form-input ${errors.message ? 'input-error' : ''}`}
                placeholder="Escreva sua mensagem aqui..."
                disabled={isSubmitting}
              />
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Enviando...</span>
              ) : (
                <>
                  <Send size={18} />
                  <span>Enviar Mensagem</span>
                </>
              )}
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}

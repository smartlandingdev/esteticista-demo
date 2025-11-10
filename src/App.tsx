import { useEffect } from 'react';
import './App.css';
import lucianeImg from './assets/luciane.jpg';

function App() {
  useEffect(() => {
    // Smooth reveal animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <div className="hero-content-glow"></div>
          <p className="hero-name">Luciane Gonçalves</p>
          <h1 className="hero-title">
            O toque que transforma.<br />
            A beleza que renova.
          </h1>
          <p className="hero-subtitle">
            Estética funcional e terapias corporais que equilibram corpo, mente e autoestima.
          </p>
          <a href="https://wa.me/5545999149281" className="btn-primary" target="_blank" rel="noopener noreferrer">Agende sua avaliação</a>
        </div>
      </section>

      {/* Sobre a Profissional */}
      <section className="section sobre" id="sobre">
        <div className="container">
          <div className="section-grid">
            <div className="section-image reveal">
              <img src={lucianeImg} alt="Luciane Gonçalves - Esteticista" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }} />
            </div>
            <div className="section-content reveal">
              <h2 className="section-title">Cuidar é minha forma de transformar.</h2>
              <div className="section-text">
                <p>Sou <strong>Luciane Gonçalves</strong>, especialista em técnicas avançadas do Método Esculpe Detox e apaixonada por estética funcional — uma abordagem que vai além da beleza, buscando o equilíbrio natural do corpo.</p>

                <p>Cada atendimento é único: realizo avaliações personalizadas para entender suas necessidades e oferecer tratamentos faciais e corporais que respeitam seu tempo, sua pele e seu bem-estar.</p>

                <div className="highlight-box">
                  <div className="highlight-item">
                    <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Sem aparelhos.</span>
                  </div>
                  <div className="highlight-item">
                    <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Sem cremes.</span>
                  </div>
                  <div className="highlight-item">
                    <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Sem dor.</span>
                  </div>
                  <p className="highlight-final"><strong>Apenas o toque certo — com resultados reais.</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamentos */}
      <section className="section tratamentos" id="tratamentos">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Tratamentos que cuidam, equilibram e transformam.</h2>
            <p className="section-subtitle">Protocolos exclusivos que unem estética funcional, bem-estar e resultados naturais.</p>
          </div>

          <div className="tratamentos-grid">
            {/* Corporais */}
            <div className="tratamento-category reveal">
              <div className="category-header">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <h3>Tratamentos Corporais</h3>
              </div>
              <ul className="tratamento-list">
                <li><strong>Esculpe Detox 21:</strong> ciclo de 21 dias com resultados intensos e visíveis.</li>
                <li><strong>Esculpe Detox 2.0:</strong> manutenção e aprimoramento do contorno corporal.</li>
                <li><strong>Esculpe Week:</strong> programa intensivo de 7 dias para desintoxicar e redefinir.</li>
                <li><strong>Esculpe 40+ / Esculpe 60+:</strong> foco em firmeza, circulação e vitalidade.</li>
                <li><strong>Esculpe Gestante:</strong> cuidado seguro e acolhedor durante a gestação.</li>
                <li><strong>Esculpe Detox Pós-Operatório:</strong> suporte na recuperação e redução de edemas.</li>
                <li><strong>Drenagem Linfática Funcional:</strong> técnica suave que reduz inchaços e ativa a circulação.</li>
              </ul>
            </div>

            {/* Faciais */}
            <div className="tratamento-category reveal">
              <div className="category-header">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
                <h3>Tratamentos Faciais</h3>
              </div>
              <ul className="tratamento-list">
                <li>Limpeza de pele profunda</li>
                <li>Spa facial Detox com máscara de carvão ativado</li>
                <li>Revitalização e hidratação facial</li>
                <li>Tratamento para firmeza e rejuvenescimento</li>
                <li>Cuidados anti-poluição e detox facial</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section beneficios" id="beneficios">
        <div className="container">
          <div className="section-grid">
            <div className="section-content reveal">
              <h2 className="section-title">Resultados que vão além da estética.</h2>
              <p className="intro-text">Cada toque ativa o corpo de dentro pra fora — promovendo equilíbrio, leveza e bem-estar visível desde a primeira sessão.</p>

              <ul className="beneficios-list">
                <li>
                  <svg className="beneficio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
                    <path d="M9 21h6"/>
                  </svg>
                  <span>Redução de medidas e celulite</span>
                </li>
                <li>
                  <svg className="beneficio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
                    <path d="M9 21h6"/>
                  </svg>
                  <span>Melhora da circulação e do trato intestinal</span>
                </li>
                <li>
                  <svg className="beneficio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
                    <path d="M9 21h6"/>
                  </svg>
                  <span>Aumento da firmeza e elasticidade da pele</span>
                </li>
                <li>
                  <svg className="beneficio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
                    <path d="M9 21h6"/>
                  </svg>
                  <span>Alívio do inchaço e sensação de leveza</span>
                </li>
                <li>
                  <svg className="beneficio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
                    <path d="M9 21h6"/>
                  </svg>
                  <span>Relaxamento físico e mental</span>
                </li>
                <li>
                  <svg className="beneficio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
                    <path d="M9 21h6"/>
                  </svg>
                  <span>Bem-estar e autoestima renovada</span>
                </li>
              </ul>
            </div>
            <div className="section-image reveal">
              <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" alt="Benefícios dos tratamentos" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Drenagem e Lipedema */}
      <section className="section lipedema" id="lipedema">
        <div className="container-narrow">
          <div className="content-center reveal">
            <h2 className="section-title">Alívio e cuidado para quem convive com lipedema.</h2>
            <p className="intro-text">O lipedema é uma condição que causa acúmulo anormal de gordura, inchaço e sensibilidade — e exige atenção especial. A drenagem linfática funcional é uma aliada poderosa nesse cuidado, ajudando a aliviar a dor, reduzir o inchaço e melhorar a circulação.</p>

            <div className="beneficios-box">
              <h3 className="beneficios-box-title">Benefícios da drenagem linfática</h3>
              <ul className="beneficios-box-list">
                <li>
                  <svg className="beneficios-box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Reduz o inchaço e melhora a oxigenação dos tecidos</span>
                </li>
                <li>
                  <svg className="beneficios-box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Alivia a dor e o desconforto nas áreas afetadas</span>
                </li>
                <li>
                  <svg className="beneficios-box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Estimula o sistema linfático a eliminar toxinas</span>
                </li>
                <li>
                  <svg className="beneficios-box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Promove sensação de leveza e bem-estar</span>
                </li>
              </ul>
              <p className="highlight-text">Um tratamento seguro, humanizado e feito com o toque certo para o seu corpo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Facial */}
      <section className="section spa-facial" id="spa-facial">
        <div className="container-narrow">
          <div className="spa-facial-wrapper reveal">
            <div className="spa-facial-header">
              <h2 className="section-title">Spa Facial Detox</h2>
              <p className="intro-text">Um momento de pausa e renovação para a sua pele. Com a máscara de carvão ativado, o protocolo purifica, renova e devolve o brilho natural — atuando contra poluição, oleosidade e impurezas.</p>
            </div>

            <div className="spa-facial-image">
              <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80" alt="Limpeza de Pele e Spa Facial" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }} />
            </div>

            <div className="spa-facial-benefits">
              <div className="spa-benefit-item">
                <svg className="spa-benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <span>Pele limpa, firme e luminosa</span>
              </div>
              <div className="spa-benefit-item">
                <svg className="spa-benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Efeitos visíveis desde a primeira sessão</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="section resultados" id="resultados">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-header-decoration">
              <svg className="header-decoration-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
                <path d="M9 21h6"/>
              </svg>
              <h2 className="section-title">Antes e Depois</h2>
              <svg className="header-decoration-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
                <path d="M9 21h6"/>
              </svg>
            </div>
            <p className="section-subtitle">Cada resultado é único, mas o sentimento é o mesmo: leveza, confiança e autoestima renovada. Veja como o Método Esculpe Detox e a estética funcional transformam o corpo e o bem-estar.</p>
          </div>

          <div className="gallery reveal">
            <div className="gallery-item">
              <div className="gallery-item-overlay">
                <span className="gallery-label">Transformação Real</span>
              </div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjX65oPhgb8cErP_ztNvzY_9dCVdiN-U9Rg&s" alt="Antes e Depois - Tratamento Corporal" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
            </div>
            <div className="gallery-item">
              <div className="gallery-item-overlay">
                <span className="gallery-label">Resultados Visíveis</span>
              </div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQno2lAgWt_Kp9na8qdUAxKF_0pGT2_jglw&s" alt="Antes e Depois - Drenagem Linfática" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
            </div>
            <div className="gallery-item">
              <div className="gallery-item-overlay">
                <span className="gallery-label">Bem-estar Renovado</span>
              </div>
              <img src="https://antoniassiclinic.com.br/wp-content/uploads/2024/12/134.webp" alt="Antes e Depois - Esculpe Detox" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="section cta" id="contato">
        <div className="container-narrow">
          <div className="content-center reveal">
            <h2 className="section-title">Sua transformação começa no autocuidado.</h2>
            <p className="intro-text">Agende sua sessão e viva a experiência de um toque que vai muito além da estética. Porque quando você se cuida, tudo à sua volta se transforma.</p>
            <a href="https://wa.me/5545999149281" className="btn-primary large" target="_blank" rel="noopener noreferrer">Agendar atendimento</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-main">
              <h3 className="footer-name">Luciane Gonçalves</h3>
              <p className="footer-tagline">Estética Funcional & Bem-estar</p>
            </div>

            <div className="footer-grid">
              <div className="footer-col">
                <h4 className="footer-heading">Contato</h4>
                <div className="footer-links">
                  <a href="https://wa.me/5545999149281" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span>(45) 99914-9281</span>
                  </a>
                  <a href="https://www.instagram.com/esteticalugoncalves" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    <span>@esteticalugoncalves</span>
                  </a>
                  <div className="footer-link">
                    <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Cascavel - PR</span>
                  </div>
                </div>
              </div>

              <div className="footer-col">
                <h4 className="footer-heading">Horário de Atendimento</h4>
                <div className="footer-links">
                  <p className="footer-text">Segunda a Sexta</p>
                  <p className="footer-text">09:00 - 18:00</p>
                  <p className="footer-text-small">Atendimento com hora marcada</p>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-divider"></div>
              <p className="footer-credit">Desenvolvido com cuidado por <span>Smart Landing</span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { useEffect, useRef } from 'react';
import './App.css';
import lucianeImg from './assets/luciane.jpg';
import facialImg from './assets/facial.jpg';

function App() {
  const corporalCarouselRef = useRef<HTMLDivElement>(null);
  const facialCarouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const firstCard = ref.current.querySelector('.tratamento-card') as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        // Pega o gap do CSS computed style
        const computedStyle = window.getComputedStyle(ref.current);
        const gap = parseFloat(computedStyle.gap) || 19.2; // 1.2rem = 19.2px
        const scrollAmount = (cardWidth + gap) * (direction === 'left' ? -1 : 1);
        ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Smooth reveal animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observa todos os elementos com classes de animação
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el));

    // Observa todas as seções para animar elementos decorativos (::before e ::after)
    document.querySelectorAll('.section').forEach(el => observer.observe(el));

    // Observer especial para seções com vinheta
    const tratamentosSection = document.querySelector('.tratamentos');
    const lipedemaSection = document.querySelector('.lipedema');
    const resultadosSection = document.querySelector('.resultados');

    if (tratamentosSection) {
      observer.observe(tratamentosSection);
    }
    if (lipedemaSection) {
      observer.observe(lipedemaSection);
    }
    if (resultadosSection) {
      observer.observe(resultadosSection);
    }

    // Observer para as seções de tratamento individuais
    document.querySelectorAll('.tratamento-section').forEach(el => observer.observe(el));

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
            <div className="section-image reveal-left">
              <img src={lucianeImg} alt="Luciane Gonçalves - Esteticista" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }} />
            </div>
            <div className="section-content reveal-right">
              <h2 className="section-title">Cuidar é minha forma de transformar.</h2>
              <div className="section-text">
                <p>Sou <strong>Luciane Gonçalves</strong>, especialista em Método Esculpe Detox e apaixonada por estética funcional — uma abordagem que busca o equilíbrio natural do corpo.</p>

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

          {/* Tratamentos Corporais */}
          <div className="tratamento-section reveal">
            <div className="tratamento-title-wrapper">
              <svg className="tratamento-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <h3 className="tratamento-section-title">Tratamentos Corporais</h3>
            </div>

            <div className="tratamento-carousel">
              <button
                className="carousel-nav-button prev"
                onClick={() => scrollCarousel(corporalCarouselRef, 'left')}
                aria-label="Tratamento anterior"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>

              <div className="tratamento-cards-wrapper" ref={corporalCarouselRef}>
              <div className="tratamento-card">
                <div className="tratamento-card-image">
                  <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80" alt="Esculpe Detox 21" />
                </div>
                <div className="tratamento-card-content">
                  <h4>Esculpe Detox 21</h4>
                  <p>Ciclo de 21 dias com resultados intensos e visíveis.</p>
                </div>
              </div>

              <div className="tratamento-card">
                <div className="tratamento-card-image">
                  <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80" alt="Esculpe Detox 2.0" />
                </div>
                <div className="tratamento-card-content">
                  <h4>Esculpe Detox 2.0</h4>
                  <p>Manutenção e aprimoramento do contorno corporal.</p>
                </div>
              </div>

              <div className="tratamento-card">
                <div className="tratamento-card-image">
                  <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80" alt="Esculpe Week" />
                </div>
                <div className="tratamento-card-content">
                  <h4>Esculpe Week</h4>
                  <p>Programa intensivo de 7 dias para desintoxicar e redefinir.</p>
                </div>
              </div>

              <div className="tratamento-card">
                <div className="tratamento-card-image">
                  <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80" alt="Esculpe 40+ / 60+" />
                </div>
                <div className="tratamento-card-content">
                  <h4>Esculpe 40+ / 60+</h4>
                  <p>Foco em firmeza, circulação e vitalidade.</p>
                </div>
              </div>

              <div className="tratamento-card">
                <div className="tratamento-card-image">
                  <img src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=400&q=80" alt="Esculpe Gestante" />
                </div>
                <div className="tratamento-card-content">
                  <h4>Esculpe Gestante</h4>
                  <p>Cuidado seguro e acolhedor durante a gestação.</p>
                </div>
              </div>

              <div className="tratamento-card">
                <div className="tratamento-card-image">
                  <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&q=80" alt="Esculpe Pós-Operatório" />
                </div>
                <div className="tratamento-card-content">
                  <h4>Esculpe Detox Pós-Operatório</h4>
                  <p>Suporte na recuperação e redução de edemas.</p>
                </div>
              </div>

              <div className="tratamento-card">
                <div className="tratamento-card-image">
                  <img src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=400&q=80" alt="Drenagem Linfática" />
                </div>
                <div className="tratamento-card-content">
                  <h4>Drenagem Linfática Funcional</h4>
                  <p>Técnica suave que reduz inchaços e ativa a circulação.</p>
                </div>
              </div>
              </div>

              <button
                className="carousel-nav-button next"
                onClick={() => scrollCarousel(corporalCarouselRef, 'right')}
                aria-label="Próximo tratamento"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Tratamentos Faciais */}
          <div className="tratamento-section reveal">
            <div className="tratamento-title-wrapper">
              <svg className="tratamento-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
              <h3 className="tratamento-section-title">Tratamentos Faciais</h3>
            </div>

            <div className="tratamento-carousel">
              <button
                className="carousel-nav-button prev"
                onClick={() => scrollCarousel(facialCarouselRef, 'left')}
                aria-label="Tratamento anterior"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>

              <div className="tratamento-cards-wrapper" ref={facialCarouselRef}>
              <div className="tratamento-card">
                <div className="tratamento-card-image">
                  <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&q=80" alt="Limpeza de Pele" />
                </div>
                <div className="tratamento-card-content">
                  <h4>Limpeza de Pele Profunda</h4>
                  <p>Remoção de impurezas e renovação celular.</p>
                </div>
              </div>

              <div className="tratamento-card">
                <div className="tratamento-card-image">
                  <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80" alt="Spa Detox" />
                </div>
                <div className="tratamento-card-content">
                  <h4>Spa Facial Detox</h4>
                  <p>Máscara de carvão ativado para purificação profunda.</p>
                </div>
              </div>

              <div className="tratamento-card">
                <div className="tratamento-card-image">
                  <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80" alt="Revitalização Facial" />
                </div>
                <div className="tratamento-card-content">
                  <h4>Revitalização e Hidratação</h4>
                  <p>Pele nutrida, luminosa e saudável.</p>
                </div>
              </div>

              <div className="tratamento-card">
                <div className="tratamento-card-image">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" alt="Rejuvenescimento" />
                </div>
                <div className="tratamento-card-content">
                  <h4>Firmeza e Rejuvenescimento</h4>
                  <p>Tratamento para pele madura e linhas de expressão.</p>
                </div>
              </div>

              <div className="tratamento-card">
                <div className="tratamento-card-image">
                  <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80" alt="Anti-Poluição" />
                </div>
                <div className="tratamento-card-content">
                  <h4>Anti-Poluição e Detox</h4>
                  <p>Proteção contra danos ambientais e radicais livres.</p>
                </div>
              </div>
              </div>

              <button
                className="carousel-nav-button next"
                onClick={() => scrollCarousel(facialCarouselRef, 'right')}
                aria-label="Próximo tratamento"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section beneficios" id="beneficios">
        <div className="container">
          <div className="section-grid">
            <div className="section-content reveal-left">
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
            <div className="section-image reveal-right">
              <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80" alt="Benefícios dos tratamentos" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Drenagem e Lipedema */}
      <section className="section lipedema" id="lipedema">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Alívio e cuidado para quem convive com lipedema.</h2>
            <p className="section-subtitle">O lipedema é uma condição que causa acúmulo anormal de gordura, inchaço e sensibilidade — e exige atenção especial. A drenagem linfática funcional é uma aliada poderosa nesse cuidado.</p>
          </div>

          <div className="lipedema-benefits-grid reveal">
            <div className="lipedema-benefit-card">
              <div className="lipedema-card-image">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80" alt="Reduz inchaço" />
              </div>
              <div className="lipedema-card-content">
                <svg className="lipedema-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <h4>Reduz o inchaço</h4>
                <p>Melhora a oxigenação dos tecidos e diminui o acúmulo de líquidos.</p>
              </div>
            </div>

            <div className="lipedema-benefit-card">
              <div className="lipedema-card-image">
                <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=500&q=80" alt="Alivia dor" />
              </div>
              <div className="lipedema-card-content">
                <svg className="lipedema-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <h4>Alivia a dor</h4>
                <p>Reduz o desconforto e a sensibilidade nas áreas afetadas.</p>
              </div>
            </div>

            <div className="lipedema-benefit-card">
              <div className="lipedema-card-image">
                <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&q=80" alt="Elimina toxinas" />
              </div>
              <div className="lipedema-card-content">
                <svg className="lipedema-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <h4>Elimina toxinas</h4>
                <p>Estimula o sistema linfático a drenar e purificar o organismo.</p>
              </div>
            </div>

            <div className="lipedema-benefit-card">
              <div className="lipedema-card-image">
                <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=80" alt="Bem-estar" />
              </div>
              <div className="lipedema-card-content">
                <svg className="lipedema-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <h4>Promove leveza</h4>
                <p>Sensação de bem-estar e conforto em todo o corpo.</p>
              </div>
            </div>
          </div>

          <div className="lipedema-footer reveal">
            <p className="lipedema-highlight">Um tratamento seguro, humanizado e feito com o toque certo para o seu corpo.</p>
          </div>
        </div>
      </section>

      {/* Spa Facial */}
      <section className="section spa-facial" id="spa-facial">
        <div className="container-narrow">
          <div className="spa-facial-wrapper reveal-scale">
            <div className="spa-facial-header">
              <h2 className="section-title">Spa Facial Detox</h2>
              <p className="intro-text">Um momento de pausa e renovação para a sua pele. Com a máscara de carvão ativado, o protocolo purifica, renova e devolve o brilho natural — atuando contra poluição, oleosidade e impurezas.</p>
            </div>

            <div className="spa-facial-content">
              <div className="spa-facial-image">
                <img src={facialImg} alt="Spa Facial Detox" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }} />
              </div>

              <div className="spa-facial-benefits">
                <div className="spa-benefit-item reveal">
                  <svg className="spa-benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  <span>Pele limpa, firme e luminosa</span>
                </div>
                <div className="spa-benefit-item reveal">
                  <svg className="spa-benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>Efeitos visíveis desde a primeira sessão</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="section resultados" id="resultados">
        <div className="container">
          <div className="section-header reveal-scale">
            <div className="section-header-decoration">
              <svg className="header-decoration-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
                <path d="M9 21h6"/>
              </svg>
              <h2 className="section-title">Resultados</h2>
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
              <img src="/src/assets/resultados/resultado (1).JPG" alt="Antes e Depois - Resultado 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
            </div>
       
    
           
            <div className="gallery-item">
              <div className="gallery-item-overlay">
                <span className="gallery-label">Resultados Visíveis</span>
              </div>
              <img src="/src/assets/resultados/resultado (5).JPG" alt="Antes e Depois - Resultado 5" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
            </div>

           

            <div className="gallery-item">
              <div className="gallery-item-overlay">
                <span className="gallery-label">Resultados Visíveis</span>
              </div>
              <img src="/src/assets/resultados/resultado.JPG" alt="Antes e Depois - Resultado 11" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="section cta" id="contato">
        <div className="container-narrow">
          <div className="content-center reveal-scale">
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
                    <span>Rua Nereu Ramos, 1889 - Centro - Sala 06<br/>Edifício Comercial Bernal II<br/>Cascavel - PR</span>
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

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5545999149281"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;

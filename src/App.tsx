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
          <a href="#contato" className="btn-primary">✨ Agende sua avaliação</a>
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
                  <p>✨ Sem aparelhos.</p>
                  <p>✨ Sem cremes.</p>
                  <p>✨ Sem dor.</p>
                  <p><strong>Apenas o toque certo — com resultados reais.</strong></p>
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
                <span className="category-icon">💆‍♀️</span>
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
                <span className="category-icon">✨</span>
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
          <div className="section-grid reverse">
            <div className="section-content reveal">
              <h2 className="section-title">Resultados que vão além da estética.</h2>
              <p className="intro-text">Cada toque ativa o corpo de dentro pra fora — promovendo equilíbrio, leveza e bem-estar visível desde a primeira sessão.</p>

              <ul className="beneficios-list">
                <li>🌿 Redução de medidas e celulite</li>
                <li>🌿 Melhora da circulação e do trato intestinal</li>
                <li>🌿 Aumento da firmeza e elasticidade da pele</li>
                <li>🌿 Alívio do inchaço e sensação de leveza</li>
                <li>🌿 Relaxamento físico e mental</li>
                <li>🌿 Bem-estar e autoestima renovada</li>
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
              <h3>✨ Benefícios da drenagem linfática:</h3>
              <ul>
                <li>Reduz o inchaço e melhora a oxigenação dos tecidos</li>
                <li>Alivia a dor e o desconforto nas áreas afetadas</li>
                <li>Estimula o sistema linfático a eliminar toxinas</li>
                <li>Promove sensação de leveza e bem-estar</li>
              </ul>
              <p className="highlight-text">Um tratamento seguro, humanizado e feito com o toque certo para o seu corpo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Facial */}
      <section className="section spa-facial" id="spa-facial">
        <div className="container">
          <div className="section-grid">
            <div className="section-image reveal">
              <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80" alt="Limpeza de Pele e Spa Facial" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }} />
            </div>
            <div className="section-content reveal">
              <h2 className="section-title">Spa Facial Detox ✨</h2>
              <p className="intro-text">Um momento de pausa e renovação para a sua pele. Com a máscara de carvão ativado, o protocolo purifica, renova e devolve o brilho natural — atuando contra poluição, oleosidade e impurezas.</p>

              <div className="highlight-box">
                <p>✨ Pele limpa, firme e luminosa.</p>
                <p>✨ Efeitos visíveis desde a primeira sessão.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="section resultados" id="resultados">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Antes e Depois 🌸</h2>
            <p className="section-subtitle">Cada resultado é único, mas o sentimento é o mesmo: leveza, confiança e autoestima renovada. Veja como o Método Esculpe Detox e a estética funcional transformam o corpo e o bem-estar.</p>
          </div>

          <div className="gallery reveal">
            <div className="gallery-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjX65oPhgb8cErP_ztNvzY_9dCVdiN-U9Rg&s" alt="Antes e Depois - Tratamento Corporal" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
            </div>
            <div className="gallery-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQno2lAgWt_Kp9na8qdUAxKF_0pGT2_jglw&s" alt="Antes e Depois - Drenagem Linfática" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
            </div>
            <div className="gallery-item">
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
            <a href="https://wa.me/5500000000000" className="btn-primary large" target="_blank" rel="noopener noreferrer">💬 Agendar atendimento</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <p>📍 Sua Cidade</p>
              <p>📞 <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
              <p>📷 <a href="https://instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            </div>
            <div className="footer-credit">
              <p>💖 Desenvolvido por Smart Landing</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

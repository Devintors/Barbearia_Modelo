export default function Sobre_Nos() {
  return (
    <section id="about">
      <div class="container">
        <div class="content">
          <h2>Sobre Nós</h2>
          <p id="about-text">
            Com anos de experiência, nossa equipe está pronta para oferecer o
            melhor corte e estilo. Nossa missão é proporcionar a você uma
            experiência única e personalizada.
          </p>
          <div class="features">
            <div
              class="feature"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
              data-aos-duration="1300"
            >
              <i class="fas fa-scissors"></i>
              <h3>Corte Profissional</h3>
              <p>
                Utilizamos as melhores técnicas para garantir um corte perfeito.
              </p>
            </div>
            <div
              class="feature"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
              data-aos-duration="1300"
            >
              <i class="fas fa-spa"></i>
              <h3>Relaxamento</h3>
              <p>
                Oferecemos serviços de relaxamento para um momento de
                tranquilidade.
              </p>
            </div>
            <div
              class="feature"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
              data-aos-duration="1300"
            >
              <i class="fas fa-smile"></i>
              <h3>Satisfação Garantida</h3>
              <p>Seu sorriso é nossa maior recompensa.</p>
            </div>
          </div>
        </div>

        <div class="image">
          <img
            src="./img/Sobre_Nos_Imagem.png"
            alt="Equipe de corte de cabelo"
          />
        </div>
      </div>
    </section>
  );
}

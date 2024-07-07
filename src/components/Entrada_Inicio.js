export default function Entrada_Inicio() {
  return (
    <section id="home">
      <div className="hero">
        <img
          className="img-fundo"
          src="./img/Imagem_De_Fundo_Inicio.jpg"
          alt="Imagem de fundo"
        />
        <h1
          className="titulo"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1300"
          data-aos-once
          true="true"
        >
          Bem-vindo à Barbearia
        </h1>

        <p
          className="sub-titulo"
          data-aos="fade"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1300"
          data-aos-once
          true="true"
        >
          Melhor qualidade e preço
        </p>

        <a
          href="#services"
          className="btn"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"
          data-aos-duration="1300"
        >
          Veja nossos serviços
        </a>
      </div>
    </section>
  );
}

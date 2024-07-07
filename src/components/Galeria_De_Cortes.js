const Pacote_De_Configuracao_JSON = await fetch(
  "./data/Pacote_De_Configuracao.json"
);

const Pacote_De_Configuracao = await Pacote_De_Configuracao_JSON.json();

var Imagens_Escolhidas_Para_Galeria = {
  Coluna_1: [],
  Coluna_2: [],
  Coluna_3: [],
  Coluna_4: [],
};

const Escolher_Imagens_De_Galeria = () => {
  var Locais_Da_Imagem = [];
  var Imagens_Ja_Sorteadas = [];

  Pacote_De_Configuracao.Galeria_De_Imagens.map((item, index) => {
    Locais_Da_Imagem[index] = item.Endereco_Da_Imagem;
  });

  for (var i = 0; i < 12; i++) {
    var Imagem_Atual_Sorteada =
      Locais_Da_Imagem[Math.floor(Math.random() * Locais_Da_Imagem.length)];

    if (!Imagens_Ja_Sorteadas.includes(Imagem_Atual_Sorteada)) {
      Imagens_Ja_Sorteadas[i] = Imagem_Atual_Sorteada;
    } else {
      i--;
    }
  }

  for (var i = 0; i < Imagens_Ja_Sorteadas.length; i++) {
    if (Imagens_Escolhidas_Para_Galeria.Coluna_1.length < 3) {
      Imagens_Escolhidas_Para_Galeria.Coluna_1[i] = Imagens_Ja_Sorteadas[i];
    } else if (Imagens_Escolhidas_Para_Galeria.Coluna_2.length < 3) {
      Imagens_Escolhidas_Para_Galeria.Coluna_2[i - 3] = Imagens_Ja_Sorteadas[i];
    } else if (Imagens_Escolhidas_Para_Galeria.Coluna_3.length < 3) {
      Imagens_Escolhidas_Para_Galeria.Coluna_3[i - 6] = Imagens_Ja_Sorteadas[i];
    } else {
      Imagens_Escolhidas_Para_Galeria.Coluna_4[i - 9] = Imagens_Ja_Sorteadas[i];
    }
  }
};

Escolher_Imagens_De_Galeria();

export default function Galeria_De_Cortes() {
  console.log(Imagens_Escolhidas_Para_Galeria);

  return (
    <section id="galeria">
      <h2>Galeria</h2>
      <div className="galeria-img">
        <div className="galeria-coluna4">
          {Imagens_Escolhidas_Para_Galeria.Coluna_1.map((item) => {
            return (
              <>
                <div className="galeria-card">
                  <img src={item} alt="Corte de cabelo" />
                </div>
              </>
            );
          })}
        </div>

        <div className="galeria-coluna2">
          {Imagens_Escolhidas_Para_Galeria.Coluna_2.map((item) => {
            return (
              <>
                <div className="galeria-card">
                  <img src={item} alt="Corte de cabelo" />
                </div>
              </>
            );
          })}
        </div>
        <div className="galeria-coluna3">
          {Imagens_Escolhidas_Para_Galeria.Coluna_3.map((item) => {
            return (
              <>
                <div className="galeria-card">
                  <img src={item} alt="Corte de cabelo" />
                </div>
              </>
            );
          })}
        </div>

        <div className="galeria-coluna4">
          {Imagens_Escolhidas_Para_Galeria.Coluna_4.map((item) => {
            return (
              <>
                <div className="galeria-card">
                  <img src={item} alt="Corte de cabelo" />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

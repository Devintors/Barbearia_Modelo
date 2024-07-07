import { useState, useEffect } from "react";

const Pacote_De_Configuracao_JSON = await fetch(
  "./data/Pacote_De_Configuracao.json"
);

const Pacote_De_Configuracao = await Pacote_De_Configuracao_JSON.json();

const Camisetas_Vendidas = Pacote_De_Configuracao.Camisetas_Vendidas;

var Categorias_Existentes = [];
var Teste_De_Categorias_Existentes = true;

Camisetas_Vendidas.forEach((item, index) => {
  Categorias_Existentes.forEach((item_2) => {
    if (item_2 == item.Categoria) {
      Teste_De_Categorias_Existentes = false;
    }
  });

  if (Teste_De_Categorias_Existentes) {
    Categorias_Existentes[Categorias_Existentes.length] = item.Categoria;
  }

  Teste_De_Categorias_Existentes = true;
});

var Key_Unica = 0;

export default function Itens_Vendidos(Atributos) {
  const [Filtro_De_Categorias, setFiltro_De_Categorias] = useState("");

  useEffect(() => {
    setFiltro_De_Categorias(Atributos.Filtro_Valor);
  }, [Atributos.Filtro_Valor]);

  useEffect(() => {
    // Obter o modal
    const modal = document.getElementById("myModal");

    // Obter o botão que abre o modal
    const buttons = document.querySelectorAll(".button");

    // Obter o elemento <span> que fecha o modal
    const span = document.getElementsByClassName("close")[0];

    // Obter a imagem do modal
    const modalImage = document.getElementById("modalImage");

    // Quando o usuário clicar no botão, abre o modal
    buttons.forEach((button) => {
      button.onclick = function (event) {
        var imgSrc = event.target.closest(".card_box").querySelector("img").src;
        modalImage.src = imgSrc;
        modal.style.display = "block";
      };
    });

    // Quando o usuário clicar no <span> (x), fecha o modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }, [Camisetas_Vendidas]);

  const Retorno_De_Div_Itens = (item) => {
    return (
      <div
        className={"Coluna_" + item + " Colunas_Geral"}
        id={item}
        key={Key_Unica + item}
      >
        {Camisetas_Vendidas.map((sub_item) => {
          if (item == sub_item.Categoria) {
            Key_Unica++;
            return (
              <div className="container" key={Key_Unica + item}>
                <div className="card_box">
                  <img src={sub_item.Endereco_Da_Imagem} alt="" />
                  <span Nome_Categoria={item}></span>
                  <button className="button">Informações</button>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  };

  Key_Unica++;
  return (
    <>
      <div className="geral-loja">
        {Categorias_Existentes.map((item) => {
          if (Filtro_De_Categorias !== "" && Filtro_De_Categorias == item) {
            Key_Unica++;
            return Retorno_De_Div_Itens(item);
          } else if (Filtro_De_Categorias == "") {
            Key_Unica++;
            return Retorno_De_Div_Itens(item);
          }
        })}
      </div>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h2 style={{ margin: "auto" }}>Detalhes do Produto</h2>
          </div>
          <div class="modal-body">
            <img id="modalImage" src="" alt="Imagem do Produto" />
            <p>Aqui você pode adicionar mais detalhes sobre o produto.</p>
          </div>
          <div class="modal-footer">
            <button class="modal-button">Confirmar Compra</button>
          </div>
        </div>
      </div>
    </>
  );
}

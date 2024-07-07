import { useState } from "react";

import Itens_Vendidos from "./Sub_Components_Loja_De_Roupa/Itens_Vendidos";

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

export default function Loja_De_Roupa() {
  const [Valor_Escolhido_De_Filtro, setValor_Escolhido_De_Filtro] =
    useState("");

  return (
    <div className="Conjunto_De_Loja">
      <div class="barbearia-box">
        <div class="title">Itens da Loja</div>
        <select
          id="itemSelector"
          onChange={(e) => {
            setValor_Escolhido_De_Filtro(e.target.value);
          }}
        >
          <option value="">Selecione uma categoria</option>
          {Categorias_Existentes.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
      <Itens_Vendidos Filtro_Valor={Valor_Escolhido_De_Filtro} />
    </div>
  );
}

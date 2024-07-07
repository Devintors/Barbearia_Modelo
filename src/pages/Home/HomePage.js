import "./style.css";
import "./Estilo_Card-cortes.css";
import "./Estilo_footer-rodape.css";
import "./Estilo_Lista-preco.css";
import "./Estilo_Loja_Card.css";
import "./Estilo_Modal_Card.css";
import "./Estilo_nav-superior.css";
import "./Estilo_Rifa.css";
import "./Estilo_Sobre_Nos.css";

import Header_Component from "../../components/Header_Component";
import Entrada_Inicio from "../../components/Entrada_Inicio";
import Sobre_Nos from "../../components/Sobre_Nos";
import Servicos_Prestados from "../../components/Servicos_Prestados";
import Galeria_De_Cortes from "../../components/Galeria_De_Cortes";
import Loja_De_Roupa from "../../components/Loja_De_Roupa";
import Rodape_Footer from "../../components/Rodape_Footer";

export default function HomePage() {
  return (
    <div className="Corpo_Site">
      <Header_Component />
      <Entrada_Inicio />
      <Sobre_Nos />
      <Servicos_Prestados />
      <Galeria_De_Cortes />
      <Loja_De_Roupa />
      <Rodape_Footer />
    </div>
  );
}

export default function Header_Component() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#home">Início</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#services">
              <img className="img-logo" src="./img/Logo_Barbeiro.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#gallery">Galeria</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

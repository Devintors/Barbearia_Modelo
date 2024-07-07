export default function Rodape_Footer() {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Links Rápidos</h3>
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Sobre Nós</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#gallery">Galeria</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contato</h3>
          <p>Email: Devinstors@gmail.com</p>
          <p>Telefone: (15) 1234-5678</p>
        </div>
        <div className="footer-column">
          <h3>Horários</h3>
          <p>Segunda - Sexta: 9:00 - 19:00</p>
          <p>Sábado: 9:00 - 17:00</p>
          <p>Domingo: Fechado</p>
        </div>
        <div className="footer-column">
          <h3>Endereço</h3>
          <p>Rua Santa Teresinha, 123</p>
          <p>Bairro Santa Teresinha</p>
          <p>Cidade - Estado</p>
        </div>
      </div>
      <p>&copy; 2024 Barbearia Devinstors. Todos os direitos reservados.</p>
    </footer>
  );
}

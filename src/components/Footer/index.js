import React from 'react';

import LogoFooter from '../../assets/logo-footer.png';

import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

import './styles.scss';

export function Footer() {
  return (
    <footer>
    <div className="container-footer">
      <section className="section-title">
        <section className="section-titles">
          <img src={LogoFooter} alt="Logo Botinas Perdigão" className="logo-footer" />

          <p className="section-title-first">
            Fabricação • Exportação
          </p>
          <p className="section-title-second">
            Executamos a fabricação das nossas botas e fazemos a esportação dos calçados.
          </p>    
        </section>
        <section className="section-contact">
          <p className="text-contact">Contatos</p>
          <p className="text-number-first">(37) 9963-8843</p>
          <p className="text-email">hanferadm@gmail.com</p>
        </section>
        <section className="social-section">
          <p>Redes Sociais</p>
          <section className="social-icons">
            <a href="https://www.instagram.com/lojadabotinabrasil/">
              <AiOutlineInstagram />
            </a>
  
            <a href="https://api.whatsapp.com/send?phone=3799638843" target="_blank">
              <AiOutlineWhatsApp />
            </a>
          </section>
        </section>
      </section>
    </div>

    <div className="container-manager">
      <p>&copy; Botinas Perdigão - Todos os direitos reservados</p>
    </div>
  </footer>
  );
}
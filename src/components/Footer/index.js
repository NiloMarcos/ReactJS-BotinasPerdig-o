import React from 'react';

import LogoFooter from '../../assets/logo.png';

import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

import './styles.scss';

export function Footer() {
  return (
    <footer>
    <div className="container-footer">
      <section className="section-title">
        <section className="section-titles">
          <img src={LogoFooter} alt="Logo Botinas Perdigão" className="logo-footer" />
          <p className="section-title-second">
            Nosso compromisso é com a qualidade na fabricação de uma botina que satisfaça o nosso cliente com conforto e estilo.
          </p>    
        </section>
        <section className="section-contact">
          <p className="text-contact">Contatos</p>
          <p className="text-number-first">(37) 3287-1199</p>
          <p className="text-email">hanferadm@gmail.com</p>
        </section>
        <section className="social-section">
          <p>Redes Sociais</p>
          <section className="social-icons">
            <a href="https://www.instagram.com/lojadabotinabrasil/">
              <AiOutlineInstagram />
            </a>
  
            <a href="https://api.whatsapp.com/send?phone=3732871199" target="_blank">
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
import React from 'react';

import LogoFooter from '../../assets/logo-footer.png';

import './styles.scss';

export function Footer() {
  return (
    <footer>
      <div>
        <img src={LogoFooter} alt="Logo do footer" />
      
        <p>Perdigão Botinas 2023. Todos os direitos reservados - Desenvolvidor por <a href="#">Agência WeReach</a></p>
      </div>
    </footer>
  );
}
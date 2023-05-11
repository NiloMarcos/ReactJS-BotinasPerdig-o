import React from 'react';

import { Header } from '../../components/Header/nav';

import { SliderBanner } from '../../components/SliderBanner';

import { Footer } from '../../components/Footer';

import Logo from '../../assets/selo-30anos.png';

import Video from '../../assets/SnapSave.io-Zebu Botinas Vídeo(720p).mp4';

import './styles.scss';

export function Home() {
  return (
    <div>
      <Header />

      <SliderBanner />

      <div className='container-about'>
        <div className='content-about'>
          <img src={Logo} alt="Logo selo 30 anos" />

          <p className='text-about'>
            A botina remete ao trabalho dos cafezais e do homem sertanejo, compnhaiera diária, de lazer e de trabalho do vaqueiro e do peão de rodeio. Um dos ícones da vida rural se transporta para a rotina urbana nos pés de homens, mulheres e crianças. Alcança o gosto e o estilo de quem preza por qualidade e simplicidade.
          </p>

          <p className='text-about'>
            Fabricar botinas é uma arte, os anos deram segurança, conforto e tradição. O trabalho e o gosto pelo que fazemos impulsionam a busca pela garantia de qualidade e inovação. Do design de um modelo novo até a escolha da matéria prima e a fabricação de cada par de botinas, fazemos pensando em garantir a sensação de um calçado sob medida.
          </p>

          <section className='container-links-about'>
            <a href="#">Sobre Nós</a>
            
            <a href="#">Catálogo</a>
            
            <a href="#">Contato</a>
          </section>
        </div>    
      </div>


      <Footer />
    </div>
  );
}
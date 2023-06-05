import React from 'react';

import { Header } from '../../components/Header/nav';

import { Footer } from '../../components/Footer'; 

import banner from '../../assets/sobre-banner.jpg';

import photoFabrica from '../../assets/fabrica-fora.jpg';

import photoFabrica2 from '../../assets/fabrica-dentro.jpg';

import photo from '../../assets/grid-5.jpg';

import photo2 from '../../assets/grid-3.jpg';

import photo3 from '../../assets/grid-1.jpg';

import photo4 from '../../assets/grid-4.jpg';

import photo5 from '../../assets/grid-4.jpg';

import photo6 from '../../assets/grid-2.jpg';

import { SliderAboutMobile } from '../../components/SliderAboutMobile';

import Fade from 'react-reveal/Fade';

import './styles.scss';


export function About() {
  return (
    <>
      <Header />

      <>
        <div className="banner-princiapal ">
          {/* <img src={banner} alt="Banner sobre nós" /> */}

          <div className="banner-text-content">
            <p className="title-about">Em 1990 um jovem sonhou em ter sua própria fábrica de botinas</p>
          </div>
        </div>

        <div className="pics-outside" id="about">
          <Fade>
            <section className="outside-content ">
              <section className="outside-pic">
                <img src={photoFabrica} alt="Foto fabrica por fora" />
              </section>

              <section className="outside-text">
                <p className="outside-title">
                  Antônio Aparecida Ferreira, morador de uma pequena cidade (Perdigão), no Centro Oeste de Minas Gerais, pegou
                  gosto pelo ofício ainda criança. Foi assim que surgiu a Botinas Perdigão, se tornando uma fabrica que desde
                  então, sempre busca fazer o de melhor e mais moderno
                </p>

                <p className="outside-text">
                  A botina remete ao trabalho do homem sertanejo, companheira diária, de lazer e de trabalho do vaqueiro e do
                  peão de rodeio. Um dos ícones da vida rural se transporta para a rotina urbana nos pés de homens, mulheres e
                  crianças. Alcança o gosto e o estilo de quem preza por qualidade e simplicidade.
                </p>
              </section>
            </section>
          </Fade>

          <Fade>
            <section className="outside-content ">
              <section className="outside-text">
                <p className="outside-title">
                  Fabricar botinas é uma arte, os anos deram segurança, conforto e tradição. O trabalho e o gosto pelo que
                  fazemos impulsionam a busca pela garantia de qualidade e inovação. Do design de um modelo novo até a escolha
                  da matéria prima e a fabricação de cada par de botinas, fazemos pensando em garantir a sensação de um calçado
                  sob medida.
                </p>

                <p className="outside-text">
                  Sabe quando você calça um sapato e pensa logo em seguida que foi feito para você? Assim são as Botinas
                  Perdigão, é aquela botina extremamente confortável que cabe em qualquer situação, do trabalho ao happy hour no
                  final do dia.
                </p>

                <p className="outside-text">
                  Nossos representantes estão principalmente em Minas Gerais, Bahia, Espírito Santo e Mato Grosso, e enviamos
                  também para qualquer cidade do Brasil.
                </p>
              </section>


              <section className="outside-pic">
                <img src={photoFabrica2} alt="Foto fabrica por denntro" />
              </section>
            </section>
          </Fade>
        </div>

        <div className="content-values ">
          <Fade>
            <section className="card-mission">
              <p className="title-card">Missão</p>
              <p className="text-card">Nosso compromisso é com a qualidade na fabricação de uma botina que satisfaça o nosso cliente
                com conforto e estilo.</p>
            </section>
          </Fade>

          <Fade>
            <section className="card-vision">
              <p className="title-card">VISÃO</p>
              <p className="text-card">
                A continuidade de uma empresa que une o melhor do tradicional e busca a inovação em seus produtos.
              </p>
            </section>
          </Fade>

          <Fade>
            <section className="card-values">
              <p className="title-card">VALORES</p>
              <p className="text-card">
                Família, Trabalho, Confiança, Tradição e Inovação
              </p>
            </section>
          </Fade>
        </div>

        <div className="content-grid-emmpresa ">
          <div className="grid-empresa-1">
            <img src={photo} alt="Foto 1" className="grid-empresa-1-img" />
            <img src={photo2} alt="Foto 2" className="grid-empresa-1-img-2" />
          </div>

          <div className="grid-empresa-2">
            <img src={photo3} alt="Foto 3" className="grid-empresa-2-img" />
            <img src={photo4} alt="Foto 4" className="grid-empresa-2-img-2" />
            <img src={photo5} alt="Foto 5" className="grid-empresa-2-img-3" />

          </div>

          <div className="grid-empresa-3">
            <img src={photo6} alt="Foto 6" className="grid-empresa-3-img" />
          </div>
        </div>

        <div className="container-grid-mobile">
          <SliderAboutMobile />
        </div>
      </>
      
      <Footer />
    </>
  );
}
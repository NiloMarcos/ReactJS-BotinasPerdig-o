import React, { useState } from 'react';

import { Header } from '../../components/Header/nav';

import { SliderBanner } from '../../components/SliderBanner';

import { SliderBannerMobile } from '../../components/SliderBannerMobile';

import { Footer } from '../../components/Footer';

import { toast } from 'react-toastify';

import { SliderCatalogo } from '../../components/SliderCatalago';

import { Link } from 'react-router-dom';

import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

import Logo from '../../assets/selo-30anos.png';

import Video from '../../assets/banner-movie.mp4';

import VideoPoster from '../../assets/fabrica-fora.jpg';

import emailjs from '@emailjs/browser';

import 'react-toastify/dist/ReactToastify.css';

import Fade from 'react-reveal/Fade';

import './styles.scss';

export function Home() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ message, setMessage ] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_6vxtp1i", "template_oer7r7r", templateParams, "wJw8GEGUp2O9TzFol")
    .then((response) => {
      toast.success('Email enviado com sucesso, logo entraremos em contato!');
      console.log("Email enviado", response.status, response.text);
      setName('');
      setEmail('');
      setMessage('');
    }, (error) => {
      console.log("Ocorreu um erro", error);
    })
  }

  return (
    <div>
      <Header />

      <div className='slider-desktop'>
        <SliderBanner />
      </div>

      <div className='slider-mobile'>
        <SliderBannerMobile />
      </div>

      <div className='container-about'>
        <Fade>
          <div className='content-about'>
            <img src={Logo} alt="Logo selo 30 anos" />

            <p className='text-about'>
              A botina remete ao trabalho dos cafezais e do homem sertanejo, compnhaiera diária, de lazer e de trabalho do vaqueiro e do peão de rodeio. Um dos ícones da vida rural se transporta para a rotina urbana nos pés de homens, mulheres e crianças. Alcança o gosto e o estilo de quem preza por qualidade e simplicidade.
            </p>

            <p className='text-about'>
              Fabricar botinas é uma arte, os anos deram segurança, conforto e tradição. O trabalho e o gosto pelo que fazemos impulsionam a busca pela garantia de qualidade e inovação. Do design de um modelo novo até a escolha da matéria prima e a fabricação de cada par de botinas, fazemos pensando em garantir a sensação de um calçado sob medida.
            </p>

            <section className='container-links-about'>
              <Link to={'/sobre-nos'}>Sobre Nós</Link>

              <Link to={'#'}>Catálogo</Link>
              
              <Link to={'#'}>Contato</Link>
            </section>
          </div>    
        </Fade>
      </div>

      <div className='container-catalogo'>
        <Fade>
          <div className="content-catalogo">
            <SliderCatalogo />
          </div>
        </Fade>
      </div>

      <div className="container-video">
        <Fade>
          <video controls poster={VideoPoster} >
            <source src={Video} type="video/mp4"/>
          </video>
        </Fade>
      </div>

      <div className="container-form" id="form">
        <Fade>
          <div className="content-form">
            <div>
              <p className="title-contato ">Entre em contato com a perdição</p>
              <p className="sub-text ">Fale conosco, tire suas dúvidas, envie suas</p>
              <p className="sub-text ">sugestões, solicite seu orçamento ou faça seu</p>
              <p className="sub-text ">pedido. Estamos aqui para te atender!</p>
        
              <section className="text-street ">
                <p>BOTINAS PERDIGÃO</p>
                <p>AV. BRASÍLIA , 870 - PLANALTO</p>
                <p>PERDIGÃO-MG</p>
                <p>CEP.: 35545-000 | (37) 3287-1199</p>
              </section>
        
              <p className="text-acompanhe ">Acompanhe a perdigão nas redes sociais</p>
        
              <section className="container-social-links">
                <a href="https://www.instagram.com/lojadabotinabrasil/" target="_blank">
                  <AiOutlineInstagram />
                </a>
                
                <a href="https://api.whatsapp.com/send?phone=3799638843" target="_blank">
                  <AiOutlineWhatsApp />
                </a>
              </section>
            </div>
        
            <form onSubmit={handleSubmitForm}>
              <input 
                type="text" 
                placeholder="Seu nome" 
                name='name'
                required 
                value={name}  
                onChange={(e) => setName(e.target.value)}
              />
              
              <input 
                type="email" 
                placeholder="Seu e-mail para contato" 
                name='email'
                required 
                value={email}  
                onChange={(e) => setEmail(e.target.value)}
              />

              <input 
                type="text" 
                placeholder="Seu telefone" 
                name='telefone'
                required 
                value={phone}  
                onChange={(e) => setPhone(e.target.value)}
              />

              {/* <input 
                type="text" 
                placeholder="Numero para contato" 
                name='number'
                required 
                value={phone}  
                onChange={(e) => setPhone(e.target.value)}
              /> */}
              
              <textarea 
                placeholder="Insira sua mensagem" 
                name='message'
                required
                value={message}  
                onChange={(e) => setMessage(e.target.value)}  
              >
              </textarea>
              
              <button type="submit" class="btn-send-form">Enviar</button>
            </form>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
}
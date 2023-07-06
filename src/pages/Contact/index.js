import React, { useState } from 'react';

import { Header } from '../../components/Header/nav';

import { Footer } from '../../components/Footer';

import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

import Fade from 'react-reveal/Fade';

import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';

import './styles.scss';

export function Contact () {
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
      
      <div className="container-form" id="form">
        <Fade>
          <div className="content-form">
            <div className='subContent-form'>
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
                <a href="https://www.instagram.com/lojadabotinabrasil/"  rel="noopener">
                  <AiOutlineInstagram />
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
  )
}
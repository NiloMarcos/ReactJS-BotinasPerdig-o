import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';

import prod1 from '../../assets/Catalogo/catalogo-masculino.png';
import prod2 from '../../assets/Catalogo/catalogo-feminino.png';
import prod3 from '../../assets/Catalogo/catalogo-infantil.png';
import prod4 from '../../assets/Catalogo/catalogo-pu.png';
import prod5 from '../../assets/Catalogo/catalogo-texanas.png';

import './styles.scss';

export function SliderCatalogo () {
  return (
    <div className='wrapper-catalogo'>
      <p className='title'>Catálogo</p>
    
      <Carousel
        autoPlay={true}
        autoFocus={true}
        infiniteLoop={true}
      >
        <div>
            <img src={prod1} />
        </div>
        <div>
            <img src={prod2} />
        </div>
        <div>
            <img src={prod3} />
        </div>
        <div>
            <img src={prod4} />
        </div>
        <div>
            <img src={prod5} />
        </div>
      </Carousel>   
    </div>
  );
}
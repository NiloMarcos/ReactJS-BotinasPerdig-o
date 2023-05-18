import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';

import photo from '../../assets/grid-5.jpg';

import photo2 from '../../assets/grid-3.jpg';

import photo3 from '../../assets/grid-1.jpg';

import photo4 from '../../assets/grid-4.jpg';

import photo5 from '../../assets/grid-4.jpg';

import photo6 from '../../assets/grid-2.jpg';

import './styles.scss';

export function SliderAboutMobile() {
  return (
    <div className='div-grid-about-us'>
      <div className='content-grid-about-us'>
        <Carousel
          autoPlay={true}
          autoFocus={true}
          infiniteLoop={true}
        >
          <img src={photo} alt='Fotos grid sobre nós' />
          <img src={photo2} alt='Fotos grid sobre nós' />
          <img src={photo3} alt='Fotos grid sobre nós' />
          <img src={photo4} alt='Fotos grid sobre nós' />
          <img src={photo5} alt='Fotos grid sobre nós' />
          <img src={photo6} alt='Fotos grid sobre nós' />
        </Carousel>
      </div>
    </div>
  );
}
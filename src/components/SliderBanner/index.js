import React from 'react';

import Banner from '../../assets/banner1.jpg';

import Banner2 from '../../assets/banner2.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';

import './styles.scss';

export function SliderBanner() {
  return (
    <div className='div-banner-principal'>
      <Carousel>
        <div>
            <img src={Banner} />
        </div>
        <div>
            <img src={Banner2} />
        </div>
      </Carousel>
      
      {/* <img src={Banner} alt="Banner Principal" className='banner-principal' /> */}
    </div>
  )
}
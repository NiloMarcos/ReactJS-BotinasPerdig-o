import React from 'react';

import Banner from '../../assets/Banners/banner1-mobile.jpg';

import Banner2 from '../../assets/Banners/banner2-mobile.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';

import './styles.scss';

export function SliderBannerMobile() {
  return (
    <div className='div-banner-principal-mobile'>
      <Carousel
        autoPlay={true}
        autoFocus={true}
        infiniteLoop={true}
      >
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
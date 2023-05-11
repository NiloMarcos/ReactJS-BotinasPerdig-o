import React from 'react';

import Banner from '../../assets/banner1.jpg';

import './styles.scss';

export function SliderBanner() {
  return (
    <div className='div-banner-principal'>
      <img src={Banner} alt="Banner Principal" className='banner-principal' />
    </div>
  )
}
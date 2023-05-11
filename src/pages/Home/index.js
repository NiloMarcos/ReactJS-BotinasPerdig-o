import React from 'react';

import { Header } from '../../components/Header/nav';

import { SliderBanner } from '../../components/SliderBanner';

export function Home() {
  return (
    <div>
      <Header />
      <SliderBanner />
    </div>
  );
}
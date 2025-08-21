import React from 'react';
import Header from '../components/Header';
import LottieSection from '../components/LottieSection';
import Foods from '../components/Foods';

function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <LottieSection />
      <Foods />
    </div>
  );
}

export default Home;

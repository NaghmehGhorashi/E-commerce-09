import React from 'react';
import Header from '../components/Header';
import LottieSection from '../components/LottieSection';
import Foods from '../components/Foods';

interface HomeProps {
  searchTerm: string;
}

const Home: React.FC<HomeProps> = ({ searchTerm }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <LottieSection />
      <Foods searchTerm={searchTerm} />
    </div>
  );
};

export default Home;

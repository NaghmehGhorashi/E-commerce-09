import React from 'react';
import FoodLottie from '../components/FoodLottie';

function LottieSection() {
  return (
    <div>
      <div className="w-10/12 h-px bg-gray-300 mt-4 mx-auto"></div>
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mx-auto max-w-4xl">
        <FoodLottie
          className="hidden sm:block md:ml-[50px]"
          size={220}
          autoplay
          loop
          speed={1.2}
        />
        <h3 className="text-xl text-amber-50 md:mt-[60px]">
          what we have to choose today? <br />
          Discover today’s delicious choices! From fresh salads to sizzling hot
          dishes,
          <br /> we have something to satisfy every craving and delight your
          taste buds.
        </h3>
      </div>

      <div className="w-10/12 h-px bg-gray-300 mt-4 mx-auto"></div>
    </div>
  );
}

export default LottieSection;

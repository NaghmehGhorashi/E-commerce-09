// src/components/FoodLottie.tsx
import { useEffect, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import Food from '../assets/Food.json';
import { Player } from '@lottiefiles/react-lottie-player';

type FoodLottieProps = {
  size?: number | string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  className?: string;
  ariaLabel?: string;
  hoverToPlay?: boolean;
};

export default function FoodLottie({
  size = 192,
  loop = true,
  autoplay = true,
  speed = 1,
  className = '',
  ariaLabel = 'Cooking animation',
  hoverToPlay = false,
}: FoodLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

  const onMouseEnter = () => {
    if (hoverToPlay && lottieRef.current) lottieRef.current.play();
  };
  const onMouseLeave = () => {
    if (hoverToPlay && lottieRef.current) lottieRef.current.pause();
  };

  return (
    <div
      className={className}
      role="img"
      aria-label={ariaLabel}
      style={{ width: size, height: size }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={Food}
        loop={loop}
        autoplay={autoplay && !hoverToPlay}
      />
    </div>
  );
}

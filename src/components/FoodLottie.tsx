// src/components/FoodLottie.tsx
import { useEffect, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import Food from '../assets/Food.json'; // اگر alias نداری از مسیر نسبی استفاده کن: "../../assets/animations/food.json"
import { Player } from '@lottiefiles/react-lottie-player';

type FoodLottieProps = {
  size?: number | string; // مثلا 192 یا "12rem" یا "240px"
  loop?: boolean;
  autoplay?: boolean;
  speed?: number; // 1 = عادی، 0.5 = کندتر، 2 = سریع‌تر
  className?: string;
  ariaLabel?: string;
  hoverToPlay?: boolean; // روی هاور پخش/مکث کند
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
        autoplay={autoplay && !hoverToPlay} // اگر hoverToPlay=true باشد، اول مکث است
      />
    </div>
  );
}

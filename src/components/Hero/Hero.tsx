import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

import heroBg1 from '../../assets/hero_bg.png';
import heroBg2 from '../../assets/hero_2.png';
import heroBg3 from '../../assets/hero_3.png';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [heroBg1, heroBg2, heroBg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds total (2s hold + 2s crossfade transition in CSS)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="麻布 龍泉"
            className={`${styles.bgImage} ${index === currentSlide ? styles.active : ''}`}
          />
        ))}
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.brand}>
          <h1 className={styles.title}>麻布 龍泉</h1>
          <p className={styles.subtitle}>Azabu Ryusen</p>
        </div>

        <div className={styles.copy}>
          <p>五感を澄まし、</p>
          <p>刻を味わう。</p>
        </div>
      </div>
    </section>
  );
}

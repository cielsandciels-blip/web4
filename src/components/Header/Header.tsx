import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>麻布 龍泉</a>
        <nav className={styles.nav}>
          <a href="#concept" className={styles.navLink}>こだわり</a>
          <a href="#spaces" className={styles.navLink}>空間・お席</a>
          <a href="#menu" className={styles.navLink}>お品書き</a>
          <a href="#reservation" className={styles.navLink}>ご案内</a>
        </nav>
      </div>
    </header>
  );
}

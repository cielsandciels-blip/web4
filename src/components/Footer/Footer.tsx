import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>麻布 龍泉</div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Azabu Ryusen. All rights reserved.
      </div>
    </footer>
  );
}

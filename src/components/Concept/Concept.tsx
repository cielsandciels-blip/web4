import { useScrollObserver } from '../../hooks/useScrollObserver';
import styles from './Concept.module.css';
import conceptImg from '../../assets/concept.png';

export function Concept() {
  const ref = useScrollObserver({ threshold: 0.2 });

  return (
    <section id="concept" className={`section ${styles.concept}`} ref={ref}>
      <div className={`container ${styles.container}`}>
        <div className={`fade-up ${styles.imageWrapper}`}>
          <img src={conceptImg} alt="厳選された和牛と旬の鮮魚" className={styles.image} />
        </div>
        
        <div className={`fade-up ${styles.textWrapper}`} style={{ transitionDelay: '0.2s' }}>
          <div className={`panel ${styles.conceptPanel}`}>
            <div className="vertical-text">
              <h2 className={styles.title}>極上の食材と、<br/>匠の技が織りなす。</h2>
              <div className={styles.description}>
                <p>四季折々の恵みを、<br />最も美しい姿でお届けします。</p>
                <p>全国から選りすぐった黒毛和牛や、<br />豊洲市場より毎朝仕入れる新鮮な魚介。</p>
                <p>素材の持ち味を最大限に引き出すため、<br />一品一品に魂を込めて包丁を握ります。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useScrollObserver } from '../../hooks/useScrollObserver';
import styles from './Greeting.module.css';

export function Greeting() {
  const ref = useScrollObserver({ threshold: 0.2 });

  return (
    <section className={`section ${styles.greeting}`} ref={ref}>
      <div className={`container panel fade-up ${styles.greetingPanel}`}>
        <div className={styles.textWrapper}>
          <div className="vertical-text">
            <div className={styles.signature}>
              <span className={styles.chefRole}>麻布 龍泉 店主</span>
              <span className={styles.chefName}>蒼井 刻</span>
            </div>
            <div className={styles.message}>
              <p>日本の豊かな四季が生み出す、<br />極上の「香り・旬・名残」を感じていただきたい。</p>
              <p>その一心で、全国の生産者様のもとへ足を運び、<br />最良の食材だけを厳選してまいりました。</p>
              <p>料理とは、自然への深い敬意であり、<br />お客様と共有する、一期一会の対話でもあります。</p>
              <p>喧騒から離れたこの麻布の地で、<br />ただ静かに、五感を研ぎ澄ます時間を<br />お過ごしいただければ幸いです。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

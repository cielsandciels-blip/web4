import { useScrollObserver } from '../../hooks/useScrollObserver';
import styles from './Menu.module.css';

export function Menu() {
  const ref = useScrollObserver({ threshold: 0.1 });

  const courses = [
    {
      name: 'おまかせコース 龍泉 ‐りゅうせん‐',
      desc: '先付 / お椀 / 旬の御造り / 焼物 / 煮物 / お食事 / 水菓子',
      price: '15,000円'
    },
    {
      name: '特選 黒毛和牛会席 雅 ‐みやび‐',
      desc: '厳選黒毛和牛の炭火焼きを中心とした特別会席',
      price: '22,000円'
    },
    {
      name: '至高のフルコース 蒼刻 ‐そうこく‐',
      desc: '料理長おまかせ 極上の旬食材を尽くした至高のフルコース',
      price: '35,000円'
    }
  ];

  return (
    <section id="menu" className={`section ${styles.menu}`}>
      <div className={`container`} ref={ref}>
        <div className={`fade-up ${styles.header}`}>
          <h2 className={styles.title}>お品書き</h2>
          <p className={styles.subtitle}>Course Menu</p>
        </div>

        <div className={styles.courseList}>
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`fade-up panel ${styles.coursePanel}`}
              style={{ transitionDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className={styles.courseInfo}>
                <h3 className={styles.courseName}>{course.name}</h3>
                <span className={styles.courseDesc}>{course.desc}</span>
              </div>
              <div className={styles.coursePrice}>{course.price}</div>
            </div>
          ))}
        </div>

        <div className={`fade-up panel ${styles.notePanel}`} style={{ transitionDelay: '0.8s' }}>
          <p>※ 別途サービス料として10％を頂戴いたします。</p>
          <p>※ 季節やその日の仕入れ状況により、献立が変更となる場合がございます。</p>
          <p>※ アレルギーや苦手な食材がございましたら、ご予約時にお申し付けください。</p>
        </div>
      </div>
    </section>
  );
}

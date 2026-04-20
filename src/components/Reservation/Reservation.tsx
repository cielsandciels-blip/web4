import { useScrollObserver } from '../../hooks/useScrollObserver';
import styles from './Reservation.module.css';

export function Reservation() {
  const ref = useScrollObserver({ threshold: 0.2 });

  return (
    <section id="reservation" className={`section ${styles.reservation}`}>
      <div className={`container ${styles.container}`} ref={ref}>
        <div className={`fade-up panel ${styles.reservationPanel}`}>
          <h2 className={styles.title}>ご案内・ご予約</h2>
          
          <div className={styles.infoGrid}>
            <div className={styles.item}>
              <span className={styles.label}>所在地</span>
              <span className={styles.value}>
                〒106-0045<br />
                東京都港区麻布十番 1-2-×<br />
                龍泉ビル 1F・2F
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>アクセス</span>
              <span className={styles.value}>
                都営大江戸線「麻布十番駅」7番出口より徒歩3分<br />
                ※お車でお越しの際は近隣の提携駐車場をご案内いたします。
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>営業時間</span>
              <span className={styles.value}>
                17:30 - 23:00（最終入店 20:30）
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>定休日</span>
              <span className={styles.value}>
                日曜日・祝日（年末年始を除く）
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>お席</span>
              <span className={styles.value}>
                カウンター 8席<br />
                完全個室 3室（2〜8名様）<br />
                茶室「無玄」（食後のご利用のみ）
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>ドレスコード</span>
              <span className={styles.value}>
                スマートカジュアル<br />
                ※極端な軽装（短パン、サンダル等）でのご来店はご遠慮いただいております。<br />
                ※香水などの強い香りは、他のお客様のご迷惑となりますためお控えください。
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>キャンセル</span>
              <span className={styles.value}>
                前日：コース料金の50%<br />
                当日：コース料金の100%<br />
                ※仕入れの都合上、ご理解いただけますようお願い申し上げます。
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>お電話</span>
              <span className={styles.value}>
                03-XXXX-XXXX（受付時間 12:00〜17:00）
              </span>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <a href="#" className={styles.bookButton}>WEB予約はこちら</a>
          </div>
        </div>
      </div>
    </section>
  );
}

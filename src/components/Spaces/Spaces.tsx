import { useScrollObserver } from '../../hooks/useScrollObserver';
import styles from './Spaces.module.css';
import roomsImg1 from '../../assets/rooms.png';
import roomsImg2 from '../../assets/room_2.png';
import roomsImg3 from '../../assets/room_3.png';
import roomsImg4 from '../../assets/room_4.png';

export function Spaces() {
  const ref = useScrollObserver({ threshold: 0.1 });

  return (
    <section id="spaces" className={`section ${styles.spaces}`}>
      <div className={`container ${styles.container}`} ref={ref}>
        <div className={`fade-up ${styles.header}`}>
          <h2 className={styles.title}>空間・お席</h2>
          <p className={styles.subtitle}>Spaces & Rooms</p>
        </div>

        <div className={styles.content}>
          <div className={`fade-up ${styles.textWrapper}`} style={{ transitionDelay: '0.2s' }}>
            <div className={`panel ${styles.spacesPanel}`}>
              <div className={styles.roomType}>
                <h3 className={styles.roomName}>数寄屋造りの完全個室</h3>
                <p className={styles.roomDesc}>
                  接待や特別な日のご会食に最適な、完全プライベート空間。<br />
                  床の間には季節を彩る野の花を生け、静寂と安らぎのひとときをご提供いたします。（2名様〜最大8名様）
                </p>
              </div>
              <div className={styles.roomType}>
                <h3 className={styles.roomName}>白木の一枚板カウンター</h3>
                <p className={styles.roomDesc}>
                  料理人の息遣いや包丁捌きを目の前で愉しめる特等席。<br />
                  香ばしい炭火の香りとともに、五感を刺激する至高の食体験をお約束します。
                </p>
              </div>
              <div className={styles.roomType} style={{ borderBottom: 'none' }}>
                <h3 className={styles.roomName}>茶室「無玄」と中庭</h3>
                <p className={styles.roomDesc}>
                  お食事の後、あるいは大切なご商談の結びに。<br />
                  枯山水の中庭を眺めながら、亭主の手による一服の抹茶をお楽しみいただく極上の隠れ家です。
                </p>
              </div>
            </div>
          </div>

          <div className={`fade-up ${styles.imageGrid}`} style={{ transitionDelay: '0.4s' }}>
            <img src={roomsImg1} alt="個室" className={styles.image} />
            <img src={roomsImg2} alt="カウンター" className={styles.image} />
            <img src={roomsImg3} alt="茶室" className={styles.image} />
            <img src={roomsImg4} alt="中庭" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}

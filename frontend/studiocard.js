import styles from './profile.module.css';

const Studiocard = () => {
    return (
            <div className={styles.groupCard}>
              <img src="/dancer.svg" alt="Group 1" className={styles.groupImage} />
              <h3>Studio Rythm</h3>
              <p className={styles.groupDetails}>
                <span>хип-хоп</span> • 7-10 лет • <strong>начинающие</strong>
              </p>
              <p>ул. Ворошиловская, д. 35</p>
              <p className={styles.price}>от 1300 ₽</p>
            </div>
    )
}

export default Studiocard
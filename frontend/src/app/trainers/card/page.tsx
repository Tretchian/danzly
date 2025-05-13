import styles from './card.module.css';

export default function lk() {
    return (
      <div className={styles.cardContainer}>
        {/* Изображение */}
        <div className={styles.imageSection}>
          <img
            src="/dancer.svg"
            alt="Dancer"
            className={styles.image}
          />
        </div>

        {/* Информация */}
        <div className={styles.contentSection}>
          <div className={styles.header}>
            <img
              src="/ellipse 43.svg"
              alt="Trainer"
              className={styles.avatar}
            />
            <div className={styles.title}>Studio Rythm</div>
            <div className={styles.rating}>★ 4.8</div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tags}>хип-хоп</span>
            <span className={styles.tags}>7-10 лет</span>
            <span className={styles.tags}>начинающие</span>
          </div>

          <p className={styles.location}>📍 пр. Ворошиловский, д. 35</p>
          <p className={styles.time}>🗓 пн/ср 18:00–20:00</p>

          <h2>Описание</h2>
          <p>
            Привет! Меня зовут Кира — я тренер по хип-хопу с более чем 6-летним опытом преподавания...
          </p>

          <h2 className={styles.h2_list}>Как проходят занятия:</h2>
          <ul className={styles.list}>
            <li>базовые шаги и элементы танца</li>
            <li>координация и чувство ритма</li>
            <li>импровизация и музыкальность</li>
            <li>парная работа и командные задания</li>
          </ul>

          <h2 className={styles.h2_list}>Почему Studio Rythm</h2>
          <ul className={styles.list}>
            <li>Индивидуальный подход</li>
            <li>Быстрый и видимый прогресс</li>
            <li>Поддержка и дружеская атмосфера</li>
            <li>Танец как способ самовыражения</li>
          </ul>

          <button className={styles.button}>КОНТАКТЫ</button>
        </div>
      </div>
    );
  }
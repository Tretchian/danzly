import styles from './profile.module.css';
import Studiocard from '../../components/studiocard';

export default function lk() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* Основной блок (О тренере) */}
        <section className={styles.trainerInfo}>
          <title>Studio Rythm</title>
          <img
            src="/Rectangle 141.svg"
            alt="Тренер"
            className={styles.trainerImage}
          />
          <div className={styles.trainerDetails}>
            <h1>Studio Rythm</h1>
            <p className={styles.location}>Ростов-на-Дону, групповые и индивидуальные занятия</p>
            <div className={styles.specialization}>
              <span>хип-хоп</span>
              <span>поппинг</span>
              <span>крамп</span>
              <span>шаффл</span>
            </div>
            <p className={styles.experience}>
              <strong>Опыт:</strong> В танцах — 8 лет, в преподавании — 5 лет
            </p>
            <p className={styles.about}>
              Привет! Меня зовут Кира, я — основательница студии Studio Rythm.
              Я преподаю хип-хоп, поппинг и крамп — направления, в которых каждый может выразить себя по-настоящему ярко и свободно.
            </p>
          </div>
        </section>

        {/* Секция "Набор в группы" */}
        <section className={styles.groups}>
          <h2>Набор в группы <span className={styles.groupCount}>1</span></h2>
          <div id={styles.groupCards}>
            <Studiocard />
          </div>
          <button className={styles.showAllGroups}>Показать все</button>
        </section>

        {/* Секция "Отзывы" */}
        <section className={styles.reviews}>
          <h2>Отзывы</h2>
          <div className={styles.reviewCards}>
            <div className={styles.reviewCard}>
              <p><strong>Мария:</strong> Катя — потрясающий тренер! Моя дочь в восторге!</p>
            </div>
            <div className={styles.reviewCard}>
              <p><strong>Анна:</strong> Мне нравится подход Кати к занятиям. Уроки яркие и запоминающиеся!</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
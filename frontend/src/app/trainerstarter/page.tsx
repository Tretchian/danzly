'use client'; // обязательно — чтобы работал useRouter

import { useRouter } from 'next/navigation';
import styles from './main.module.css';

export default function Home() {
  const router = useRouter(); // подключаем роутер

  const handleFindClick = () => {
    router.push('/lk'); // переход по нажатию
  };

  return (
    <main className={styles.main}>
      {/* фон-баннер */}
      <img
        src="/banner.png"
        alt="Banner"
        className={styles.mainpic}
      />

      <div className={styles.mainleftpart}>
        <div className={styles.mainlefttoppart}>
          <h1>Начни танцевать с тем, кто вдохновляет</h1>
          <p>
            <i><b>Danzly</b></i> — платформа, которая соединяет танцоров и тренеров<br />
            Здесь легко найти свою группу, стиль и наставника<br />
            А тренеры могут делиться опытом, показывать хореографии<br />
            и находить учеников по интересам и уровню
          </p>
        </div>

        <button className={styles.searchbtn} onClick={handleFindClick}>
          регистрация
        </button>
      </div>
    </main>
  );
}
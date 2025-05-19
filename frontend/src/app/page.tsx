'use client'; // обязательно — чтобы работал useRouter

import { useRouter } from 'next/navigation';
import styles from './main.module.css';

export default function Home() {
  const router = useRouter(); // подключаем роутер

  const handleFindClick = () => {
    router.push('/trainers'); // переход по нажатию
  };

  return (
    <main>
      <div className={styles.mainleftpart}>
        <div className={styles.mainlefttoppart}>
          <h1>Начни танцевать с тем, кто вдохновляет</h1>
          <p>
            <i><b>Danzly</b></i> — платформа, которая соединяет танцоров и тренеров <br />
            Здесь легко найти свою группу, стиль и наставника <br />
            А тренеры могут делиться опытом, показывать хореографии <br />
            и находить учеников по интересам и уровню
          </p>
        </div>
        <div className={styles.mainleftbottompart}>
          <div className={styles.search}>
            <input type="text" placeholder="Стиль, тренер или уровень" />
            <button>
              <img src="/settings.svg" />
            </button>
          </div>
          <button className={styles.searchbtn} onClick={handleFindClick}>
            найти
          </button>
        </div>
      </div>
      <img src="/banner.png" alt="Banner" className={styles.mainpic} />
    </main>
  );
}
'use client';

import { useRouter } from 'next/navigation';
import styles from './main.module.css';

export default function Home() {
  const router = useRouter();

  const handleFindClick = () => {
    router.push('/trainers');
  };

  return (
    <main className={styles.main}>
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

        <div className={styles.mainleftbottompart}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Стиль, тренер или уровень"
              className={styles.searchInput}
            />
            <button className={styles.searchSettings}>
              <img src="/settings.svg" alt="Настройки" />
            </button>
          </div>
          <button
            className={styles.searchbtn}
            onClick={handleFindClick}
          >
            найти
          </button>
        </div>
      </div>
    </main>
  );
}

import Sidebar from '../../components/sidebar'
import Trainercard from '../../components/trainercard';
import styles from './trainers.module.css';

export default function Trainers() {
    return (
      <>
        <Sidebar />
        <div className={styles.searchbar}>
          <input type="text" className={styles.inpbar} />
          <button className={styles.setbtn}>
            <img src="/settings.svg" />
          </button>
          <button className={styles.searchbtn}>найти</button>
        </div>
        <main id={styles.trainercardsflex}>
          <Trainercard />
          <Trainercard />
          <Trainercard />
        </main>
      </>
    );
  }
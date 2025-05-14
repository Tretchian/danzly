import { link } from 'fs';
import styles from './traincards.module.css';
import Link from 'next/link';

const Trainercard = () => {
    return (
        <div className={styles.trainercard}> 
            <Link href="/trainers/card">
            <img src="/cardimg.png" className={styles.profimg}></img>
            </Link>
            <div className={styles.cardinfo}>
                <div className={styles.cardhead}>
                    <div className={styles.avtitle}>
                        <img src="/profava.png" className={styles.profava}></img>
                        <Link href="/trainers/card">
                        <h2>Studio Rythm</h2>
                        </Link>
                    </div>
                    <div className={styles.rate}>
                        <img src="/ratestar.svg"></img>
                        <h4>4,8</h4>
                    </div>
                </div>
                <div className={styles.cardmain}>
                    <div className={styles.trainertags}>
                        <div className={styles.tag}>хип-хоп</div>
                        <div className={styles.tag}>7-10 лет</div>
                        <div className={styles.tag}>начинающие</div>
                    </div>
                    <div className={styles.addres}>
                        <img></img>
                        <b>пр. Ворошиловский, д. 35</b>
                    </div>
                    <Link href="/trainers/card">
                    <p>
                        Привет! Меня зовут Кира — я тренер по хип-хопу 
                        с более чем 6-летним опытом преподавания 
                        танцев детям. В Studio Rythm я создаю не просто 
                        занятия, а атмосферу свободы, поддержки 
                        и творчества, где каждый ребёнок может раскр...
                    </p>
                    </Link>
                </div>
                <h3>от 1300 ₽</h3>
            </div>
        </div>
    )
}

export default Trainercard
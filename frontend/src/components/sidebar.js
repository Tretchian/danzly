import styles from './leftsidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={styles.leftside}>
            <h2>фильтры</h2>
            <div className={styles.style}>
                <p>стиль</p>
                <form className={styles.checkboxform}>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>хип-хоп</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>контемп</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>крамп</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>дэнсхолл</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>джаз-фанк</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>хаус</label>
                    </div>
                </form>
                <button className={styles.more}>ещё</button>
            </div>
            <div className={styles.age}>
                <p>возраст</p>
                <form className={styles.inpform}>
                    <input className={styles.inp}></input> <label>лет</label>
                </form>
            </div>
            <div className={styles.exp}>
                <p>опыт</p>
                <form className={styles.checkboxform}>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>начинающий</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>средний</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>профи</label>
                    </div>
                </form>
            </div>
            <div className={styles.price}>
                <p>цена за занятие</p>
                <form className={styles.inpform}>
                    <label>от</label>
                    <input className={styles.inp}></input>
                    <label>до</label>
                    <input className={styles.inp}></input>
                </form>
            </div>
            <div className={styles.location}>
                <p>расположение</p>
                <form className={styles.checkboxform}>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>Ленинский р-н</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>Октябрьский р-н</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>Ворошиловский р-н</label>
                    </div>
                </form>
                <button className={styles.more}>ещё</button>
            </div>
            <div className={styles.schedule}>
                <p>расписание</p>
                <form className={styles.checkboxform}>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>пн</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>вт</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>ср</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>чт</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>пт</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>сб</label>
                    </div>
                    <div className={styles.chbwrap}>
                        <input type='checkbox'></input> <label>вс</label>
                    </div>
                </form>
            </div>
            <button className={styles.apply}>
                применить
            </button>
        </aside>
    )
}

export default Sidebar
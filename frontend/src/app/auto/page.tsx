import styles from './page.module.css';
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
          <Link href="/">           
            <img src="/logo.svg" alt="Логотип" className={styles.logoImage} />
          </Link>
      </div>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Вход</h1>
        <form className={styles.form}>
       {/*   <input type="text" placeholder="Фамилия" className={styles.input} /> */}
       {/*   <input type="text" placeholder="Имя" className={styles.input} /> */}
          <input type="email" placeholder="Почта" className={styles.input} />
       {/*   <input type="tel" placeholder="Номер телефона" className={styles.input} /> */}
          <input type="password" placeholder="Пароль" className={styles.input} />
       {/*   <input type="password" placeholder="Подтверждение пароля" className={styles.input} /> */}
          <button type="submit" className={styles.submitButton}>Войти</button>
        </form>
        <p className={styles.footerText}>
          нет аккаунта? <a href="/lk" className={styles.loginLink}>Зарегистрируйся</a>
        </p>
      </div>
      <div className={styles.rightSection}>
        <img
          src="/enterposter.png"
          alt="плакат регистрация"
          className={styles.rightSvg}>
        </img>
      </div>
    </div>
  );
}

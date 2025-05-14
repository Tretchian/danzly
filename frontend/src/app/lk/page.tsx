'use client'; // обязательно, если ты в app/ и хочешь использовать хуки

import { useState } from 'react';
import styles from './page.module.css';
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    try {
      const res = await fetch('https://yourapi.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.lastName + formData.firstName,
          role: {id:1},
          surname: formData.lastName,
          name: formData.firstName,
          city: 'none',
          telegram: 'none',
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      if (res.ok) {
        alert('Регистрация прошла успешно');
        // можешь редиректить или очищать форму
      } else {
        const error = await res.json();
        alert(`Ошибка: ${error.message || 'что-то пошло не так'}`);
      }
    } catch (err) {
      alert('Ошибка соединения с сервером');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">           
          <img src="/logo.svg" alt="Логотип" className={styles.logoImage} />
        </Link>
      </div>

      <div className={styles.leftSection}>
        <h1 className={styles.title}>Регистрация</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input name="lastName" type="text" placeholder="Фамилия" className={styles.input} onChange={handleChange} />
          <input name="firstName" type="text" placeholder="Имя" className={styles.input} onChange={handleChange} />
          <input name="email" type="email" placeholder="Почта" className={styles.input} onChange={handleChange} />
          <input name="phone" type="tel" placeholder="Номер телефона" className={styles.input} onChange={handleChange} />
          <input name="password" type="password" placeholder="Пароль" className={styles.input} onChange={handleChange} />
          <input name="confirmPassword" type="password" placeholder="Подтверждение пароля" className={styles.input} onChange={handleChange} />
          <button type="submit" className={styles.submitButton}>Продолжить</button>
        </form>

        <p className={styles.footerText}>
          есть аккаунт? <a href="/login" className={styles.loginLink}>Войти</a>
        </p>
      </div>

      <div className={styles.rightSection}>
        <img src="/rightSvg.svg" alt="плакат регистрация" className={styles.rightSvg} />
      </div>
    </div>
  );
}
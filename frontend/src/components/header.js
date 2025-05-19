'use client'
import { useState } from 'react'
import styles from './header.module.css'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cityOpen, setCityOpen] = useState(false)
  const router = useRouter()

  return (
    <header className={styles.header}>
      {/* Левая часть: логотип и выпадающее меню */}
      <div className={styles.left}>
        <img src="/logo.svg" alt="Logo" className={styles.logo} />

        <div
          className={styles.dropdownWrapper}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <button className={styles.dropdownToggle}>ищу тренера ▾</button>
          {menuOpen && (
            <ul className={styles.dropdownList}>
              <li onClick={() => router.push('/page1')}>ищу танцоров</li>
            </ul>
          )}
        </div>
      </div>

      {/* Правая часть: выбор города и кнопка */}
      <div className={styles.right}>
        <div
          className={styles.dropdownWrapper}
          onClick={() => setCityOpen(!cityOpen)}
        >
          <button className={styles.dropdownToggle}>Ростов-на-Дону</button>
          {cityOpen && (
            <ul className={styles.dropdownList}>
              <li>Волгоград</li>
              <li>Воронеж</li>
              <li>Екатеринбург</li>
              <li>Казань</li>
              <li>Краснодар</li>
              <li>Красноярск</li>
              <li>Москва</li>
              <li>Нижний Новгород</li>
              <li>Новосибирск</li>
              <li>Омск</li>
              <li>Пермь</li>
              <li>Самара</li>
              <li>Санкт-Петербург</li>
              <li>Саратов</li>
              <li>Тюмень</li>
              <li>Уфа</li>
            </ul>
          )}
        </div>

        <button
          className={styles.actionBtn}
          onClick={() => router.push('/target-page')}
        >
          Вход
        </button>
      </div>
    </header>
  )
}
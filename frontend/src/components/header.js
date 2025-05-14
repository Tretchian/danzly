'use client'
import { useState } from 'react'
import styles from './header.module.css'
import { useRouter } from 'next/navigation'
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuRoleOpen, setMenuRoleOpen] = useState(false)
  const [cityOpen, setCityOpen] = useState(false)
  const router = useRouter()

  return (
    <header className={styles.header}>
      {/* Логотип всегда */}
      <div className={styles.logoWrapper}>
        <Link href="/">
          <img src="/logo.svg" alt="Logo" className={styles.logo} />
        </Link>
      </div>

      {/* Десктопное меню: скрывается на мобилке */}
      <div className={styles.desktopNav}>
        <div className={styles.left}>
          <div
            className={styles.dropdownWrapper}
            onClick={() => setMenuRoleOpen(o => !o)}
          >
            <button className={styles.dropdownToggle}>
              Кто мне нужны? ▾
            </button>
            {menuRoleOpen && (
              <ul className={styles.dropdownList}>
                <li onClick={() => router.push('/trainerstarter')}>танцоры</li>
                <li onClick={() => router.push('/')}>тренеры</li>
              </ul>
            )}
          </div>
        </div>

        <div className={styles.right}>
          <div
            className={styles.dropdownWrapper}
            onClick={() => setCityOpen(o => !o)}
          >
            <button className={styles.dropdownToggle}>
              Ростов-на-Дону ▾
            </button>
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
            onClick={() => router.push('/auto')}
          >
            Вход
          </button>
        </div>
      </div>

      {/* Бургер-кнопка: показывается только на мобилке */}
      <div
        className={styles.burger}
        onClick={() => setMenuOpen(o => !o)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </div>

      {/* Мобильное боковое меню */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {/* Повторяем три элемента из хедера */}
          <div
            className={styles.dropdownWrapper}
            onClick={() => setMenuRoleOpen(o => !o)}
          >
            <button className={styles.dropdownToggle}>
              Кто мне нужны? ▾
            </button>
            {menuRoleOpen && (
              <ul className={styles.dropdownList}>
                <li onClick={() => { setMenuOpen(false); router.push('/trainerstarter') }}>танцоры</li>
                <li onClick={() => { setMenuOpen(false); router.push('/') }}>тренеры</li>
              </ul>
            )}
          </div>

          <div
            className={styles.dropdownWrapper}
            onClick={() => setCityOpen(o => !o)}
          >
            <button className={styles.dropdownToggle}>
              Ростов-на-Дону ▾
            </button>
            {cityOpen && (
              <ul className={styles.dropdownList}>
                {/* можно оставить полный список или урезать */}
                <li onClick={() => setMenuOpen(false)}>Москва</li>
                <li onClick={() => setMenuOpen(false)}>Санкт-Петербург</li>
                <li onClick={() => setMenuOpen(false)}>Казань</li>
                {/* ... */}
              </ul>
            )}
          </div>

          <button
            className={styles.actionBtn}
            onClick={() => { setMenuOpen(false); router.push('/auto') }}
          >
            Вход
          </button>
        </div>
      )}
    </header>
  )
}

"use client";

import {Overlay} from '../Overlay/Overlay'
import {AuthForm} from '../AuthForm/AuthForm'
import {Popup} from '../Popup/Popup'
import Styles from './Header.module.css'
import Link from 'next/link';
import { useState } from 'react'


export const Header = () => {
  const [popupIsOpened, setPopupIsOpened] = useState(false);

const openPopup = () => {
  setPopupIsOpened(true)
  console.log("да")
}

const closePopup = () => {
  setPopupIsOpened(false)
}
  return (
    <header className={Styles['header']}>
      <a href="./index.html" className={Styles['logo']}>
        <img
          className={Styles['logo__image']}
          src="./images/logo.svg"
          alt="Логотип Pindie"
        />
      </a>
      <nav className={Styles['menu']}>
        <ul className={Styles['menu__list']}>
          <li className={Styles['menu__item']}>
            <Link href="/new" className={Styles['menu__link']}>
              Новинки
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/popular" className={Styles['menu__link']}>
              Популярные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/shooters" className={Styles['menu__link']}>
              Шутеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/runners" className={Styles['menu__link']}>
              Ранеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/pixel-games" className={Styles['menu__link']}>
              Пиксельные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/tds" className={Styles['menu__link']}>
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles['auth']}>
          <button className={Styles['auth__button']} onClick={openPopup} >Войти</button>
        </div>
      </nav>
      <Overlay  popupIsOpened={popupIsOpened} closePopup={closePopup} />
        <Popup popupIsOpened={popupIsOpened} closePopup={closePopup}>
          <AuthForm />
      </Popup>
    </header>
  )
}

"use client";
import Styles from './AuthForm.module.css';
import { useState, useEffect } from 'react';
import { authorize, isResposneOk, getMe, setJWT } from '../../api/api-utils';
import { endpoints } from '../../api/config';
export const AuthForm = (props) => {
const [authData, setAuthData] = useState({ identifier: "", password: "" });
const [userData, setUserData] = useState(null);
const [message, setMessage] = useState({ status: null, text: null });


const handleInput = (e) => {
  // const newAuthData = authData;
  // newAuthData[e.target.name] = e.target.value;
  // setAuthData(newAuthData);
  setAuthData({ ...authData, [e.target.name]: e.target.value });
}

const handleSubmit = async (e) => {
  /* Предотвращаем стандартное поведение формы */
e.preventDefault();
  /* Вызываем функцию authorize с данными из формы */
const userData = await authorize(endpoints.auth, authData);
  /* Проверяем ответ сервера с помощью isResponseOk */
if (isResposneOk(userData)) {
  await getMe(endpoints.me, userData.jwt);
      /* Записываем в стейт данные пользователя с сервера */
  setUserData(userData);
  setJWT(userData.jwt);
      /*  */
  props.setAuth(true);
      /* Записываем сообщение об авторизации */
  setMessage({ status: "success", text: "Вы авторизовались!" });
} else {
      /* Записываем сообщение об ошибке */
  setMessage({ status: "error", text: "Неверные почта или пароль" });
}
}; 

useEffect(() => {
  let timer;
  if (userData) {
    timer = setTimeout(() => {
      props.close();
    }, 1000)
  }
  return () => {
    clearTimeout(timer);
  }
}, [userData])



  return (
    <form onSubmit={handleSubmit} className={Styles['form']}>
      <h2 className={Styles['form__title']}>Авторизация</h2>
      <div className={Styles['form__fields']}>
        <label className={Styles['form__field']}>
          <span  className={Styles['form__field-title']}>Email</span>
          <input onInput={handleInput} className={Styles['form__field-input']} type="email" name='identifier' placeholder="hello@world.com"/>
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Пароль</span>
          <input onInput={handleInput} className={Styles['form__field-input']} type="password" name='password' placeholder='***********'/>
        </label>
      </div>
      {message.status && (
    <p className={Styles["form__message"]}>{message.text}</p>
      )} 
      <div className={Styles['form__actions']}>
        <button className={Styles['form__reset']} type="reset">Очистить</button>
        <button className={Styles['form__submit']} type="submit">Войти</button>
      </div>
    </form>
  ) 

};

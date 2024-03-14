'use client';
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { useStore } from "./store/app-store";
import { useEffect} from "react";



export const App = (props) => {
  /* Используем хук-хранилище */
  const store = useStore();

  useEffect(() => {
  /* 
    Проверяем, авторизован ли пользователь, 
    функцией checkAuth из хранилища 
  */
    store.checkAuth();
  }, []);

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  ) 
}; 
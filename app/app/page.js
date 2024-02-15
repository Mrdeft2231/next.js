import { NewCardsFragment } from './components/CardsList/NewCardsFragment'
import { PopularCardsFragment } from './components/CardsList/PopularCardsFragment'
import { CardList } from './components/CardsList/CardList'
import { Promo } from './components/Promo/Promo'
import { Banner } from './components/Banner/Banner'
import Image from "next/image";
import styles from "./page.module.css";
export default function Home(props) {
  return (
    <main className="main" >
      <Banner/>
      <CardList id="popular" title="Популярные">
      </CardList>
      <CardList id="new" title="Новинки">
      </CardList>
      <Promo/>
  </main>
  );
}



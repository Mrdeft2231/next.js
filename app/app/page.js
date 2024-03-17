import {getGamesByCategory} from './data/data-utils';
import { CardList } from './components/CardsListSection/CardList'
import { Promo } from './components/Promo/Promo'
import { Banner } from './components/Banner/Banner'
import { CardsSlider } from './components/CardsListSection/CardsSlider';
import { CardsListSection } from './components/CardsListSection/CardsListSection';


export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main className="main" >
      <Banner/>
      <CardsListSection type="slider" id="popular" title="Популярные" data={popularGames}/>
      <CardsListSection type="slider" id="new" title="Новинки" data={newGames}/>
      <Promo/>
  </main>
  );
}



import {getGamesByCategory} from './data/data-utils';
import { Promo } from './components/Promo/Promo'
import { Banner } from './components/Banner/Banner'
import { CardsListSection } from './components/CardsListSection/CardsListSection';


export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main className="main" >
      <Banner/>
      { popularGames && newGames ? (
        <>
        <CardsListSection  id="popular" title="Популярные" data={popularGames} type="slider"/>
        <CardsListSection  id="new" title="Новинки" data={newGames} type="slider"/>
        </>
      ) : <Preloader />
      }
      <Promo/>
  </main>
  );
}



import { getGamesByCategory } from '../data/data-utils.js';
import {CardList} from '../components/CardsList/CardList';

export default function Popular() {
  const popularGames = getGamesByCategory("popular");
  return (
    <main className={"main-inner"}>
      <CardList id="popular" title="Популярные" data={popularGames} />
    </main>
  )
}
import { getGamesByCategory } from '../data/data-utils.js';
import { CardList } from '../components/CardsList/CardList';

export default function New() {
  const newGames = getGamesByCategory("new");
  return (
    <main className={"main-inner"}>
      <CardList  id="new" title="Новинки" data={newGames} />
    </main>
  )
}
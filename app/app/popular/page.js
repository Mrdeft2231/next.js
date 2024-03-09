
import {CardList} from '../components/CardsList/CardList';
import { getNormalizedGamesDataByCategory } from '../api/api-utils.js'
import { endpoints } from '../api/config.js';


export default async function Popular() {
  const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular");
  return (
    <main className={"main-inner"}>
      <CardList id="popular" title="Популярные" data={popularGames} />
    </main>
  )
}
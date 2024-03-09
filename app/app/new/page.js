
import { CardList } from '../components/CardsList/CardList';
import { getNormalizedGamesDataByCategory } from '../api/api-utils.js'
import { endpoints } from '../api/config.js';

export default async function New() {
  const newGames = await getNormalizedGamesDataByCategory(endpoints.games, "new");
  return (
    <main className={"main-inner"}>
      <CardList  id="new" title="Новинки" data={newGames} />
    </main>
  )
}
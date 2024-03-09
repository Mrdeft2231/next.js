import { getNormalizedGamesDataByCategory } from '../api/api-utils.js'
import { endpoints } from '../api/config.js';
import { CardList } from '../components/CardsList/CardList';

export default async function Runners() {
  const runnerGame = await getNormalizedGamesDataByCategory(endpoints.games, "runner");
  return (
    <main className={"main-inner"}>
      <CardList id="runner" title="ранеры" data={runnerGame} />
    </main>
  )
}
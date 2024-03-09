import { getNormalizedGamesDataByCategory } from '../api/api-utils.js'
import { endpoints } from '../api/config.js';
import { CardList } from "../components/CardsList/CardList";


export default async function Shooters() {
  const shooterGames = await getNormalizedGamesDataByCategory(endpoints.games, "shooter");
  return (
    <main className="main" >
      <CardList id="shooters" title="шутеры" data={shooterGames}/>
    </main>
  )
}
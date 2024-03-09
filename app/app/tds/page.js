import { getNormalizedGamesDataByCategory } from '../api/api-utils.js'
import { endpoints } from '../api/config.js';
import { CardList } from '../components/CardsList/CardList';


export default async function TDS() {
  const tdsGames = await getNormalizedGamesDataByCategory(endpoints.games, "TDS");
  return (
    <main className="main" >
      <CardList id="tds" title="TDS" data={tdsGames}/>
    </main>
  )
}
import { getNormalizedGamesDataByCategory } from '../api/api-utils.js'
import { endpoints } from '../api/config.js';
import { CardList } from "../components/CardsList/CardList";


export default async function PixelGames() {
  const pixelGames = await getNormalizedGamesDataByCategory(endpoints.games, "pixel");
  return (
    <main className="main" >
      <CardList id="pixel" title="пиксельные" data={pixelGames}/>
    </main>
  )
}
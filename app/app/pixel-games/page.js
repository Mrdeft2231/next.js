import { getGamesByCategory} from "../data/data-utils";
import { CardList } from "../components/CardsList/CardList";


export default function PixelGames() {
  const pixelGames = getGamesByCategory("pixel");
  return (
    <main className="main" >
      <CardList id="pixel" title="пиксельные" data={pixelGames}/>
    </main>
  )
}
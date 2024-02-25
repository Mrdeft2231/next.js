import { getGamesByCategory } from "../data/data-utils";
import { CardList } from "../components/CardsList/CardList";


export default function Shooters() {
  const shooterGames = getGamesByCategory("shooter");
  return (
    <main className="main" >
      <CardList id="shooters" title="шутеры" data={shooterGames}/>
    </main>
  )
}
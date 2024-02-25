import { getGamesByCategory } from '../data/data-utils.js';
import { CardList } from '../components/CardsList/CardList';


export default function TDS() {
  const tdsGames = getGamesByCategory("TDS");
  return (
    <main className="main" >
      <CardList id="tds" title="TDS" data={tdsGames}/>
    </main>
  )
}
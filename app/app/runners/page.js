import { getGamesByCategory } from '../data/data-utils.js';
import { CardList } from '../components/CardsList/CardList';

export default function Runners() {
  const runnerGame = getGamesByCategory("runner");
  return (
    <main className={"main-inner"}>
      <CardList id="runner" title="ранеры" data={runnerGame} />
    </main>
  )
}
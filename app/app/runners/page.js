'use client'
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { getNormalizedGamesDataByCategory } from '../api/api-utils.js'
import { endpoints } from '../api/config.js';
import { CardList } from '../components/CardsList/CardList';

export default function Runners() {
  const runnerGame = useGetDataByCategory(endpoints.games, "runner");
  return (
    <main className={"main-inner"}>
      {runnerGame ? (
      <CardList id="runner" title="ранеры" data={runnerGame} />
      ) : (
        <Preloader />
      )}
    </main>
  )
}
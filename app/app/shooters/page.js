'use client'
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { getNormalizedGamesDataByCategory } from '../api/api-utils.js'
import { endpoints } from '../api/config.js';
import { CardList } from "../components/CardsList/CardList";


export default function Shooters() {
  const shooterGames = useGetDataByCategory(endpoints.games, "shooter");
  return (
    <main className="main" >
      {shooterGames ? (
      <CardList id="shooters" title="шутеры" data={shooterGames}/>
      ) : (
        <Preloader />
      )}
    </main>
  )
}
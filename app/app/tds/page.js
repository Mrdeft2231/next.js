'use client'
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { getNormalizedGamesDataByCategory } from '../api/api-utils.js'
import { endpoints } from '../api/config.js';
import { CardList } from '../components/CardsList/CardList';


export default function TDS() {
  const tdsGames =  useGetDataByCategory(endpoints.games, "TDS");
  return (
    <main className="main" >
      {tdsGames ? (
      <CardList id="tds" title="TDS" data={tdsGames}/>
      ) : (
        <Preloader />
      )}
    </main>
  )
}
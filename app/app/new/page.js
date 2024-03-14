'use client'
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { CardList } from '../components/CardsList/CardList';
import { endpoints } from '../api/config.js';

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className={"main-inner"}>
      {newGames ? (
        <CardList  id="new" title="Новинки" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  )
}
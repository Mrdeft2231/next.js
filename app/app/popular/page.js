'use client'
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import {CardList} from '../components/CardsList/CardList';
import { endpoints } from '../api/config.js';


export default function Popular() {
  const popularGames =  useGetDataByCategory(endpoints.games, "popular");
  return (
    <main className={"main-inner"}>
      {popularGames ? (
      <CardList id="popular" title="Популярные" data={popularGames} />
      ) : (
        <Preloader />
      )}
    </main>
  )
}
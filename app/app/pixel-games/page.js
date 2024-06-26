'use client'
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from '../api/config.js';
import { CardList } from "../components/CardList/CardList";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";


export default function PixelGames() {
  const pixelGames =  useGetDataByCategory(endpoints.games, "pixel");
  return (
    <main className="main" >
      {pixelGames ? (
      <CardsListSection id="pixel" title="пиксельные" data={pixelGames}/>
      ) : (
        <Preloader />
      )}
    </main>
  )
}
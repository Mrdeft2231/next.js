'use client'
import Styles from "./Game.module.css";
import { getNormalizedGameDataById } from "../../api/api-utils";
import { endpoints } from "../../api/config";
import { useState, useEffect } from "react";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function GamePage(props) {
  const [game, setGame] = useState(null);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const game = await getNormalizedGameDataById(endpoints.games, props.params.id);
      setPreloaderVisible(false);
       game.error ? setGame(null) : setGame(game);
    }
    fetchData();
  }, [])
  return game ? (
    <main className="main">
      <section className={Styles["game"]}>
        <iframe
          className={Styles["game__iframe"]}
          src={game.link}
        ></iframe>
      </section>
      <section className={Styles["about"]}>
        <h2 className={Styles["about__title"]}>{game.title}</h2>
        <div className={Styles["about__content"]}>
          <p className={Styles["about__description"]}>
            {game.description}
          </p>
          <div className={Styles["about__author"]}>
            <p>
              Автор:
              <span className={Styles["about__accent"]}>{game.developer}</span>
            </p>
          </div>
        </div>
        <div className={Styles["about__vote"]}>
          <p className={Styles["about__vote-amount"]}>
            За игру уже проголосовали:
            <span className={Styles["about__accent"]}>{game.users.lenght}</span>
          </p>
          <button className={`button ${Styles["about__vote-button"]}`}>
            Голосовать
          </button>
        </div>
      </section>
    </main>
  ) : preloaderVisible ? (
    <Preloader />
  ) : (
    <GameNotFound />
  );
}
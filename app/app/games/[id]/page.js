'use client'
import Styles from "./Game.module.css";
import { getNormalizedGameDataById, isResposneOk, getMe, getJWT, removeJWT, checkIfUserVoted } from "../../api/api-utils";
import { endpoints } from "../../api/config";
import { useState, useEffect } from "react";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";
import { Preloader } from "@/app/components/Preloader/Preloader";


export default function GamePage(props) {
  const [game, setGame] = useState(null);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const [currunetUser, setCurrunetUser] = useState(null)
  const [isVoted, setIsVoted] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const game = await getNormalizedGameDataById(endpoints.games, props.params.id);
      isResposneOk(game) ? setGame(game) : setGame(null);
      setPreloaderVisible(false);
    }
    fetchData();
  }, [])

  useEffect(() => {
    const jwt = getJWT();
    if (jwt) {
      getMe(endpoints.me, jwt).then((userData) => {
        if (isResposneOk(userData)) {
          setIsAuthorized(true)
          setCurrunetUser(userData)
        } else {
          setIsAuthorized(false)
          removeJWT();
        }
      })
    }
  })

  useEffect(() => {
    if (currunetUser && game) {
      setIsVoted(checkIfUserVoted(game, currunetUser.id));
    } else {
          setIsVoted(false);
      }
  }, [currunetUser, game]);

    const handleVote = async () => {
      const jwt = getJWT();
    let usersIdArray = game.users.length
        ? game.users.map((user) => user.id)
      : [];
    usersIdArray.push(currunetUser.id);
    const response = await vote(
        `${endpoints.games}/${game.id}`,
      jwt,
      usersIdArray
    );
    if (isResposneOk(response)) {
        setIsVoted(true);
      setGame(() => {
          return {
            ...game,
          users: [...game.users, currunetUser],
        };
      });
    }
  }; 


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
          <button
          disabled={!isAuthorized || isVoted}
          className={`button ${Styles["about__vote-button"]}`}
          onClick={handleVote}
          >
            {isVoted ? "Голос учтён" : "Голосовать"}
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
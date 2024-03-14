'use client'
import Styles from "./Game.module.css";
import { getNormalizedGameDataById, isResposneOk, checkIfUserVoted, vote } from "../../api/api-utils";
import { endpoints } from "../../api/config";

import { useContext } from "react";
import { AuthContext } from "@/app/contex/app-context";

import { useState, useEffect } from "react";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { useStore } from "@/app/store/app-store";


export default function GamePage(props) {
  const [game, setGame] = useState(null);
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  const authContext = useStore()

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
    async function fetchData() {
        setPreloaderVisible(true);
      const game = await getNormalizedGameDataById(
        endpoints.games,
        props.params.id
      );
      isResposneOk(game) ? setGame(game) : setGame(null);
      setPreloaderVisible(false);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   const jwt = getJWT();
  //   if (jwt) {
  //     getMe(endpoints.me, jwt).then((userData) => {
  //       if (isResposneOk(userData)) {
  //         setIsAuthorized(true)
  //         setCurrunetUser(userData)
  //       } else {
  //         setIsAuthorized(false)
  //         removeJWT();
  //       }
  //     })
  //   }
  // })

  useEffect(() => { // Данные о пользователе получаем из контекста authContext.user
    authContext.user && game ? setIsVoted(checkIfUserVoted(game, authContext.user.id)) : setIsVoted(false);
}, [authContext.user, game]); 

const handleVote = async () => {
  const jwt = authContext.token; // Данные о токене получаем из контекста
let usersIdArray = game.users.length
    ? game.users.map((user) => user.id)
  : [];
usersIdArray.push(authContext.user.id); // Данные о пользователе получаем из контекста
const response = await vote(
    `${endpoints.games}/${game.id}`,
  jwt,
  usersIdArray
);
if (isResposneOk(response)) {
    setGame(() => {
      return {
        ...game,
      // Данные о пользователе получаем из контекста
      users: [...game.users, authContext.user],
      users_permissions_users: [...game.users_permissions_users, authContext.user],
    };
  });
      setIsVoted(true);
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
            За игру уже проголосовали:{" "}
            <span className={Styles["about__accent"]}>{game.users.length}</span>
          </p>
          <button
          disabled={!authContext.isAuth || isVoted}
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
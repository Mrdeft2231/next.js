import Styles from "./Game.module.css";
import { getGameId } from "@/app/data/data-utils";

export default function GamePage(props) {
  const game = getGameId(props.params.id);
  return (
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
            <span className={Styles["about__accent"]}>{game.user.lenght}</span>
          </p>
          <button onClick={() => {}}  className={`button ${Styles["about__vote-button"]}`}>
            Голосовать
          </button>
        </div>
      </section>
    </main>
  );
}
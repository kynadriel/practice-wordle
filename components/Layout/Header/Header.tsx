import { Fragment, useState } from "react";
import { gameActions } from "../../../store/game-slice";
import { useAppDispatch } from "../../../store/hooks";
import styles from "./Header.module.css";

import HowToPlay from "./HowToPlay/HowToPlay";

const Header: React.FC = () => {
  const [howToPlayIsVisible, setHowToPlayIsVisible] = useState(false);
  const dispatch = useAppDispatch();

  const howToPlayClickHandler = () => {
    setHowToPlayIsVisible((state) => !state);
  };

  const resetClickHandler = () => {
    dispatch(gameActions.resetGame());
  };
  return (
    <Fragment>
      <header className={styles.header}>
        <div>
          <button className={styles.icon} onClick={howToPlayClickHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="game-icon"
              data-testid="icon-help"
            >
              <path
                fill="#fff"
                d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
              ></path>
            </svg>
          </button>
        </div>
        <div className={styles.title}>Practice Wordle</div>
        <div>
          <button className={styles.icon} onClick={resetClickHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 16 16"
              width="24px"
              height="24px"
            >
              <path d="M 2.464844 1 L 4.152344 2.6875 C 2.835938 3.878906 2 5.589844 2 7.5 C 2 11.085938 4.914063 14 8.5 14 C 12.085938 14 15 11.085938 15 7.5 C 15 3.914063 12.085938 1 8.5 1 L 8 1 L 8 2 L 8.5 2 C 11.542969 2 14 4.457031 14 7.5 C 14 10.542969 11.542969 13 8.5 13 C 5.457031 13 3 10.542969 3 7.5 C 3 5.859375 3.722656 4.402344 4.859375 3.394531 L 6 4.535156 L 6 1 Z" />
            </svg>
          </button>
        </div>
      </header>

      {howToPlayIsVisible && <HowToPlay onClick={howToPlayClickHandler} />}
    </Fragment>
  );
};

export default Header;

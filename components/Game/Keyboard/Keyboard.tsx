import styles from "./Keyboard.module.css";
import Key from "./Key";
import { gameActions } from "../../../store/game-slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Fragment, useCallback, useEffect, useState } from "react";
import WinAnimation from "../../UI/Animation/WinAnimation";

const Keyboard: React.FC = () => {
  const [gameStatus, firstRow, secondRow, thirdRow] = useAppSelector(
    ({
      game: {
        gameStatus,
        lettersAndStyling: {
          q,
          w,
          e,
          r,
          t,
          y,
          u,
          i,
          o,
          p,
          a,
          s,
          d,
          f,
          g,
          h,
          j,
          k,
          l,
          z,
          x,
          c,
          v,
          b,
          n,
          m,
        },
      },
    }) => {
      const firstRow = { q, w, e, r, t, y, u, i, o, p };
      const secondRow = { a, s, d, f, g, h, j, k, l };
      const thirdRow = { z, x, c, v, b, n, m };
      return [gameStatus, firstRow, secondRow, thirdRow];
    }
  );

  const dispatch = useAppDispatch();

  const [showAnimation, setShowAnimation] = useState(false);

  // Handler functions
  const keyPressedHandler = useCallback(
    (keyPressed: string) => {
      dispatch(gameActions.addLetterToCurrentRow(keyPressed));
    },
    [dispatch]
  );

  const backSpaceHandler = useCallback(() => {
    dispatch(gameActions.backSpaceHandler());
  }, [dispatch]);

  const enterHandler = useCallback(() => {
    dispatch(gameActions.enterHandler());
  }, [dispatch]);

  // useEffects

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const pressedKey = event.key;
      if (pressedKey === "Backspace") {
        backSpaceHandler();
        return;
      }

      if (pressedKey === "Enter") {
        enterHandler();
        return;
      }

      if (pressedKey.match(/^[a-z]$/i)) {
        keyPressedHandler(pressedKey.toLocaleLowerCase());
      }
    };

    if (gameStatus === "IN_PROGRESS") {
      window.addEventListener("keyup", handleKeyDown);
    } else {
      if (gameStatus === "WIN") setShowAnimation(true);
      window.removeEventListener("keyup", handleKeyDown);
    }
    return () => window.removeEventListener("keyup", handleKeyDown);
  }, [keyPressedHandler, backSpaceHandler, enterHandler, gameStatus]);

  // Helper Function
  const mapKeysHelper = (keys: object) => {
    return Object.entries(keys).map(([key, value]) => {
      return (
        <Key
          key={key}
          content={key}
          state={value}
          onClick={
            gameStatus === "IN_PROGRESS"
              ? keyPressedHandler.bind(null, key)
              : undefined
          }
        />
      );
    });
  };

  return (
    <Fragment>
      {showAnimation && (
        <WinAnimation
          onComplete={() => {
            setShowAnimation(false);
          }}
        />
      )}
      <div className={styles.container}>
        <div className={styles.keyboard}>
          <div className={styles.row}>{mapKeysHelper(firstRow)}</div>
          <div className={styles.row}>
            <div className={styles.half}></div>
            {mapKeysHelper(secondRow)}
            <div className={styles.half}></div>
          </div>
          <div className={styles.row}>
            <button
              data-key="↵"
              className={styles["one-and-a-half"]}
              onClick={gameStatus === "IN_PROGRESS" ? enterHandler : undefined}
            >
              enter
            </button>
            {mapKeysHelper(thirdRow)}
            <button
              data-key="←"
              onClick={
                gameStatus === "IN_PROGRESS" ? backSpaceHandler : undefined
              }
              className={styles["one-and-a-half"]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                data-testid="icon-backspace"
              >
                <path
                  fill="var(--color-tone-1)"
                  d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Keyboard;

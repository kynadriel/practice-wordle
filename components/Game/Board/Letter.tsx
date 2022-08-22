import { useEffect, useRef, useState } from "react";
import { gameActions } from "../../../store/game-slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import styles from "./Letter.module.css";

interface LetterProps {
  content: string;
  dataState: string;
  animation: string;
  index: number;
}

const Letter: React.FC<LetterProps> = (props) => {
  const gameStatus = useAppSelector(({ game: { gameStatus } }) => gameStatus);
  const dispatch = useAppDispatch();
  const reference = useRef<HTMLDivElement>(null);
  const [resultStyles, setResultStyles] = useState("");

  const animationEndHandler = () => {
    if (reference.current?.classList.contains(styles.flipin)) {
      reference.current?.classList.remove(styles.flipin);
      setResultStyles(props.dataState);
      reference.current?.style.removeProperty("animation-delay");
      reference.current?.classList.add(styles.flipout);
      return;
    }
    if (props.index === 4) {
      dispatch(gameActions.resetAnimation());
    }
    if (reference.current?.classList.contains(styles.flipout)) {
      reference.current?.classList.remove(styles.flipout);
      if (gameStatus === "WIN") {
        reference.current?.style.setProperty(
          "animation-delay",
          `${props.index * 100}ms`
        );
        reference.current?.classList.add(styles.win);
      }
      return;
    }
    if (reference.current?.classList.contains(styles.win)) {
      reference.current?.classList.remove(styles.win);
      reference.current?.style.removeProperty("animation-delay");
      return;
    }
  };

  useEffect(() => {
    const active = "A";
    const alreadyUsed = "u";

    ((dataState: string) => {
      if (dataState === "") {
        return setResultStyles("");
      }
      if (dataState === active) {
        return setResultStyles(active);
      }
      if (dataState === alreadyUsed) {
        return setResultStyles(alreadyUsed);
      }
      reference.current?.style.setProperty(
        "animation-delay",
        `${props.index * 250}ms`
      );
      reference.current?.classList.add(styles.flipin);
    })(props.dataState);
  }, [props.dataState, props.index]);

  const animation = styles[props.animation];

  return (
    <div className={`${styles.container}`}>
      <div
        ref={reference}
        className={`${styles.letter}${
          props.animation !== "" ? " " + animation : ""
        }`}
        data-state={resultStyles}
        onAnimationEnd={animationEndHandler}
      >
        {props.content}
      </div>
    </div>
  );
};

export default Letter;

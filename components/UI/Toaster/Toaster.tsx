import { useEffect, useRef } from "react";
import targetWords from "../../../store/dictionary";
import { gameActions } from "../../../store/game-slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import styles from "./Toaster.module.css";

const Toaster: React.FC = () => {
  const toastReference = useRef<HTMLDivElement>(null);
  const { message, duration } = useAppSelector(
    ({ game: { alertMessage } }) => alertMessage
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (message !== "") {
      const alert = document.createElement("div");
      alert.textContent = message;
      alert.classList.add(styles.message);
      toastReference.current?.prepend(alert);
      if (duration !== 0) {
        setTimeout(() => {
          alert.classList.add(styles.fade);
          alert.addEventListener("transitionend", () => {
            alert.remove();
          });
        }, duration);
      }
      dispatch(gameActions.resetAlert());
    }
    if (message === "ResetGame") {
      toastReference.current?.removeChild(
        toastReference.current.lastChild as Node
      );
    }
  }, [message, duration, dispatch]);

  return <div ref={toastReference} className={styles["toaster-container"]} />;
};

export default Toaster;

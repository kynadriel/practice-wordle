import { MouseEventHandler, useRef } from "react";
import styles from "./Modal.module.css";
import Overlay from "./Overlay";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Modal: React.FC<Props> = ({ children, onClick }) => {
  const stopPropagation: MouseEventHandler<HTMLDivElement> = (
    MouseEventHandler
  ) => {
    MouseEventHandler.stopPropagation();
  };
  const modalRef = useRef<HTMLDivElement>(null);

  const closeClickHandler = () => {
    modalRef.current?.classList.add(styles["modal-closing"]);
  };

  const closeModalEndAnimationHandler = () => {
    if (modalRef.current?.classList.contains(styles["modal-closing"])) {
      modalRef.current?.classList.remove(styles["modal-closing"]);
      onClick?.();
    }
  };

  return (
    <Overlay onClick={closeClickHandler}>
      <div
        ref={modalRef}
        className={styles.modal}
        onClick={stopPropagation}
        onAnimationEnd={closeModalEndAnimationHandler}
      >
        <div className={styles.closeIcon} onClick={closeClickHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="game-icon"
            data-testid="icon-close"
          >
            <path
              fill="var(--color-tone-1)"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            ></path>
          </svg>
        </div>
        <div>{children}</div>
      </div>
    </Overlay>
  );
};

export default Modal;

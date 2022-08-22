import { Fragment } from "react";
import styles from "./Overlay.module.css";
import Portal from "../Portal/Portal";

interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Overlay: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Fragment>
      <Portal querySelector="#overlay">
        <div className={styles.overlay} onClick={onClick}>
          {children}
        </div>
      </Portal>
    </Fragment>
  );
};

export default Overlay;

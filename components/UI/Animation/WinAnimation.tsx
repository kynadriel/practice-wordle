import Lottie from "lottie-react";
import Portal from "../Portal/Portal";
import styles from "./WinAnimation.module.css";
import fireworks from "./32585-fireworks-display.json";

interface WinAnimationProps {
  onComplete: () => void;
}

const WinAnimation: React.FC<WinAnimationProps> = (props) => {
  return (
    <Portal querySelector="#animation">
      <div className={styles["win-animation"]}>
        <Lottie
          animationData={fireworks}
          onComplete={props.onComplete}
          loop={false}
        />
      </div>
    </Portal>
  );
};

export default WinAnimation;

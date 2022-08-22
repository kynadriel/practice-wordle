import Board from "./Board/Board";
import Keyboard from "./Keyboard/Keyboard";
import styles from "./Game.module.css";
import { Provider } from "react-redux";
import store from "../../store/store";
import Portal from "../UI/Portal/Portal";
import Toaster from "../UI/Toaster/Toaster";
import Layout from "../Layout/Layout";

const Game: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout />
      <div className={styles.game}>
        <Portal querySelector="#toaster">
          <Toaster />
        </Portal>
        <Board />
        <Keyboard />
      </div>
    </Provider>
  );
};

export default Game;

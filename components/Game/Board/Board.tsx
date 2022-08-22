import { useAppSelector } from "../../../store/hooks";
import styles from "./Board.module.css";
import Row from "./Row";

const Board: React.FC = () => {
  const [boardState, numberOfLetters, currentRow, boardStyles] = useAppSelector(
    ({ game: { numberOfLetters, boardState, currentRow, boardStyles } }) => {
      return [boardState, numberOfLetters, currentRow, boardStyles];
    }
  );

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {boardState.map((row, index) => {
          return (
            <Row
              key={index}
              rowContent={row}
              numberOfLetters={numberOfLetters}
              boardStyle={boardStyles[index]}
              isCurrent={currentRow === index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;

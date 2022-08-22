import { useAppSelector } from "../../../store/hooks";
import { LettersObjectKeyType } from "../../../store/Letters";
import Letter from "./Letter";
import styles from "./Row.module.css";

interface RowProps {
  rowContent: string;
  numberOfLetters: number;
  isCurrent: boolean;
  boardStyle: string;
}

const prepareWordHelper = (word: string, length: number) => {
  const preparedWordArray = [];
  for (let i = 0; i < length; i++) {
    preparedWordArray.push(word[i] ?? "");
  }
  return preparedWordArray;
};

const Row: React.FC<RowProps> = (props) => {
  const preparedWordArray = prepareWordHelper(
    props.rowContent,
    props.numberOfLetters
  );

  const [letterAndStyling, animation] = useAppSelector(
    ({ game: { lettersAndStyling, animation } }) => [
      lettersAndStyling,
      animation,
    ]
  );

  const getObjectKey = (key: string) => {
    return key as LettersObjectKeyType;
  };

  // Helper
  const evaluateDataState = (letter: string, index: number) => {
    if (!props.isCurrent) return props.boardStyle[index] ?? "";
    if (letter != "") {
      if (letterAndStyling[getObjectKey(letter)] === "abscent") {
        return "u";
      }
      return "A";
    }
    return "";
  };

  const evaluateAnimation = (letter: string) => {
    if (!props.isCurrent) return "";
    if (animation === "pop" && letter === "") return "";
    return animation;
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.row}`}>
        {preparedWordArray.map((letter, index) => {
          return (
            <Letter
              key={index}
              content={letter}
              dataState={evaluateDataState(letter, index)}
              animation={evaluateAnimation(letter)}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;

// props.isCurrent &&
// letter !== "" &&
// letterAndStyling[getObjectKey(letter)] === "abscent"
//   ? "alreadyUsed"
//   : props.isCurrent && letter !== ""
//   ? "active"
//   : props.boardStyle[index] ?? ""

// if (letter !== "" && letterAndStyling[getObjectKey(letter)] === "abscent") {
//   return "alreadyUsed";
// }
// if (letter != "") {
//   return "active";
// }

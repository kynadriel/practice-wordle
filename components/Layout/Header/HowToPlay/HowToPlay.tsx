import Letter from "../../../Game/Board/Letter";
import Modal from "../../../UI/Modal/Modal";
import styles from "./HowToPlay.module.css";

interface Props {
  onClick?: () => void;
}

class Example {
  word: string;
  dataState: string;
  description: string;
  animations: Array<string>;

  constructor(
    word: string,
    dataState: string,
    description: string,
    animations: Array<string>
  ) {
    this.word = word;
    this.dataState = dataState;
    this.description = description;
    this.animations = animations;
  }
}

const examples: Array<Example> = [
  new Example(
    "never",
    "c    ",
    "The letter N is in the word in the correct spot.",
    ["", "", "", "", ""]
  ),
  new Example(
    "cover",
    " p   ",
    "The letter O is in the word in the wrong spot.",
    ["", "", "", "", ""]
  ),
  new Example(
    "clean",
    "  a  ",
    "The letter E is not in the word in any spot.",
    ["", "", "", "", ""]
  ),
  new Example(
    "north",
    "u    ",
    `The letter N was already used in the previous guesses, and is not in the word in any spot.`,
    ["", "", "", "", ""]
  ),
];

const HowToPlay: React.FC<Props> = ({ onClick }) => {
  return (
    <Modal onClick={onClick}>
      <h1 className={styles.heading}>How To Play</h1>
      <p>Guess the WORD in 6 tries.</p>
      <p>
        Each guess must be a valid 5-letter word. Hit the enter button to
        submit.
      </p>
      <p>
        After each guess, the color of the tiles will change to show how close
        your guess was to the word.
      </p>
      <div className={styles.examples}>
        <p>
          <strong>Examples</strong>
        </p>
        {examples.map((example, index) => (
          <div key={index + "__example"}>
            <div className={styles.row}>
              {example.animations.map((animation, index) => {
                return (
                  <Letter
                    key={index + "__key"}
                    content={example.word[index]}
                    dataState={example.dataState[index]}
                    animation={animation}
                    index={index}
                  />
                );
              })}
            </div>
            <p>{example.description}</p>
          </div>
        ))}
      </div>
      <p>
        Press the reset button
        {" ("}
        <strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 16 16"
            width="18px"
            height="18px"
          >
            <path d="M 2.464844 1 L 4.152344 2.6875 C 2.835938 3.878906 2 5.589844 2 7.5 C 2 11.085938 4.914063 14 8.5 14 C 12.085938 14 15 11.085938 15 7.5 C 15 3.914063 12.085938 1 8.5 1 L 8 1 L 8 2 L 8.5 2 C 11.542969 2 14 4.457031 14 7.5 C 14 10.542969 11.542969 13 8.5 13 C 5.457031 13 3 10.542969 3 7.5 C 3 5.859375 3.722656 4.402344 4.859375 3.394531 L 6 4.535156 L 6 1 Z" />
          </svg>
        </strong>
        {") "}
        on the upper right or reload the page for a new wordle to guess.
      </p>
    </Modal>
  );
};

export default HowToPlay;

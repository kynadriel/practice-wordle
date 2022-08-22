import styles from "./Key.module.css";

interface KeyProps {
  content: string;
  state?: string;
  onClick: (() => void) | undefined;
}

const Key: React.FC<KeyProps> = (props) => {
  return (
    <button
      className={styles.key}
      data-key={props.content}
      data-state={props.state}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
};

export default Key;

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  querySelector: string;
  children?: React.ReactNode;
}

const Portal: React.FC<Props> = ({ children, querySelector }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return mounted
    ? createPortal(
        children,
        document.querySelector(querySelector) as HTMLElement
      )
    : null;
};

export default Portal;

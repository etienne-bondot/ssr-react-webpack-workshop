import { ReactElement, useEffect, useState } from "react";
import Button from "./Button";

const Dumb = (): ReactElement => {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReady(true);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleClick = () => {
    alert("click!");
  };

  return isReady ? (
    <div>
      <p>I'm a dumb component</p>
      <Button onClick={handleClick}>Click on me!</Button>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Dumb;

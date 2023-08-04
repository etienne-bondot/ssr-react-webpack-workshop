import { ReactElement } from "react";
import Dumb from "./components/Dumb";

const App = (): ReactElement => {
  return (
    <div>
      <p>Hello World!</p>
      <Dumb />
    </div>
  );
};

export default App;

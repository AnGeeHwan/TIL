import "./App.css";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
      <Counter />
      <Average />
    </>
  );
}

export default App;

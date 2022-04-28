import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./cij";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button
        css={{
          margin: "20px",
          backgroundColor: "red",
        }}
      >
        opa
      </Button>
    </div>
  );
}

export default App;

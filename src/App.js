import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p id="text">
        Clicks counter: <span id="counter">{count}</span>
      </p>
      <button id="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default App;

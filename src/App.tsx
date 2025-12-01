import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Hello World!</p>
    </div>
  );
}

export default App;

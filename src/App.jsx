import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import "./App.css";

const logoSrc =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png";

function App() {
  return (
    <div>
      <div className="Parts">
        <p>Part 1</p>
        <p>Part 2</p>
        <p>Part 3</p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;

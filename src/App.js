import React from "react";
import "./App.css";
import Content from "./components/Content"

function App() {
  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <h5>Each day a different image or photograph of our universe is featured, along with a brief explanation written by a professional astronomer.</h5>
      <Content />
    </div>
  );
}

export default App;

import React from "react";
import Dropdown from "./Dropdown";
import "./App.css";

const App = () => {
  const data = [
    { value: 1, name: "A" },
    { value: 2, name: "B" },
    { value: 3, name: "C" },
  ];

  return (
    <form onSubmit={() => {}}>
      <div className="App">
        <Dropdown options={data} />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default App;

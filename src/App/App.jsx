import React from "react";
import Article from "../Article/Article";
import Navigation from "../Navigation/Navigation";
import "../index.css";
import Context from "../context";

const App = () => {
  const userName = "Shane";

  return (
    <Context.Provider value={userName}>
      <div>
        <Navigation />
        <Article />
      </div>
    </Context.Provider>
  );
};

export default App;

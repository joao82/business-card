import React, { useState } from "react";
import data from "./assets/data";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  const cards = data.map((item) => {
    return <Card key={item.id} item={item} darkMode={darkMode} />;
  });

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {cards}
    </div>
  );
}

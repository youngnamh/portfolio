import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const chooseMode = () => (darkMode ? DARK_STYLES : LIGHT_STYLES);

  const chooseBackground = () =>
    darkMode ? DARK_STYLES.background : LIGHT_STYLES.background;

  useEffect(() => {
    const backgroundColor = chooseBackground();
    const html = document.querySelector("html");
    if (html != null) {
      html.style.backgroundColor = backgroundColor;
    }
  });

  const modeId = () => (darkMode ? "dm" : "lm");

  return (
    <div style={chooseMode()} id={modeId()}>
      <div>
        <NavBar
          isOnNav={darkMode}
          handleToggleNav={() => {
            setDarkMode(!darkMode);
          }}
        />
        <Contents />
        <Footer />
      </div>
    </div>
  );
}

const DARK_STYLES = {
  background: "#0E192D",
  color: "#94A9BD",
};

const LIGHT_STYLES = {
  background: "#ece8ef",
  color: "#4c535a",
};

export default App;

import { useState } from "react";
import NavBar from "./components/NavBar";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const chooseMode = () => (darkMode ? DARK_STYLES : LIGHT_STYLES);

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
  background: "black",
  color: "white",
};

const LIGHT_STYLES = {
  background: "#fdfcec",
  color: "#0081a7",
};

export default App;

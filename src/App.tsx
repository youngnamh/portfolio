import { useState } from "react";
import NavBar from "./components/NavBar";
import Contents from "./components/Contents";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const chooseMode = () => (darkMode ? DARK_STYLES : LIGHT_STYLES);

  return (
    <div style={chooseMode()}>
      <div>
        <NavBar
          isOnNav={darkMode}
          handleToggleNav={() => {
            setDarkMode(!darkMode);
          }}
        />
        <Contents />
      </div>
    </div>
  );
}

const DARK_STYLES = {
  background: "black",
  color: "white",
};

const LIGHT_STYLES = {
  background: "#f5ebe0",
  color: "black",
};

export default App;

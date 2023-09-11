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
  background: "#403d39",
  color: "#fffcf2",
};

const LIGHT_STYLES = {
  background: "#fffcf2",
  color: "#403d39",
};

export default App;

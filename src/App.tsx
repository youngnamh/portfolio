import { useState } from "react";
import NavBar from "./components/NavBar";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

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
  background: "#fefae0",
  color: "black",
};

export default App;

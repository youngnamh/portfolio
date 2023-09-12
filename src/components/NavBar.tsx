import Switch from "./Switch";
import "../styles/navbar.css";

type NavProps = {
  isOnNav: boolean;
  handleToggleNav: (set: boolean) => void;
};

export default function NavBar({ isOnNav, handleToggleNav }: NavProps) {
  return (
    <div className="nav-border">
      <div className="nav-container container">
        <div className="logo">Youngnam Hlady</div>
        <div className="tabs">
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
          <Switch
            isOn={isOnNav}
            handleToggle={() => {
              handleToggleNav(!isOnNav);
            }}
          />
        </div>
      </div>
    </div>
  );
}

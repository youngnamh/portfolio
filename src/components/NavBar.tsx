import Switch from "./Switch";
import "../styles/navbar.css";

type NavProps = {
  isOnNav: boolean;
  handleToggleNav: (set: boolean) => void;
};

export default function NavBar({ isOnNav, handleToggleNav }: NavProps) {
  return (
    <div>
      <div className="nav-border">
        <div className="nav-container container">
          <div className="logo">Youngnam Hlady</div>
          <div className="tabs">
            <div>
              <a href="#project-anchor" className="nav-anchor">
                Projects
              </a>
            </div>
            <div>
              <a href="#contact-anchor" className="nav-anchor">
                Contact
              </a>
            </div>
            <Switch
              isOn={isOnNav}
              handleToggle={() => {
                handleToggleNav(!isOnNav);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import Switch from "./Switch";
import "../styles/navbar.css";
import kamon from "../assets/svg/kamon copy.svg";

type NavProps = {
  isOnNav: boolean;
  handleToggleNav: (set: boolean) => void;
};

export default function NavBar({ isOnNav, handleToggleNav }: NavProps) {
  return (
    <div>
      <div className="nav-border">
        <div className="nav-container">
          <a href="#">
            <img src={kamon} className="logo-div"></img>
          </a>

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

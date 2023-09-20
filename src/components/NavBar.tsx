import Switch from "./Switch";
import ModeToggle from "./ModeToggle";
import "../styles/navbar.css";
import kamon from "../assets/svg/kamon copy.svg";
import kamonDM from "../assets/svg/kamon.white.svg";

type NavProps = {
  isOnNav: boolean;
  handleToggleNav: (set: boolean) => void;
};

export default function NavBar({ isOnNav, handleToggleNav }: NavProps) {
  const kamonColor = () => (!isOnNav ? kamon : kamonDM);

  return (
    <div>
      <div className="nav-border">
        <div className="nav-container">
          <a href="#" title="home">
            <img src={kamonColor()} className="logo-div" alt="my-logo"></img>
          </a>

          <div className="tabs">
            <div>
              <a href="#project-anchor" title="project" className="nav-anchor">
                Projects
              </a>
            </div>
            <div>
              <a href="#contact-anchor" title="contact" className="nav-anchor">
                Contact
              </a>
            </div>
            <Switch
              isOn={isOnNav}
              handleToggle={() => {
                handleToggleNav(!isOnNav);
              }}
            />
            <ModeToggle
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

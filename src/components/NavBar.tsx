import React from "react";
import Switch from "./Switch";

type NavProps = {
  isOn: boolean;
  handleToggle: () => void;
};

export default function NavBar({ isOn, handleToggle }: NavProps) {
  return (
    <div style={NAV_STYLES}>
      <div>About</div>
      <div>Projects</div>
      <div>Contact</div>
      <Switch
        isOn={isOn}
        handleToggle={() => {
          handleToggle(!isOn);
        }}
      />
    </div>
  );
}

const NAV_STYLES = {
  background: "black",
  color: "white",
  padding: "10px",
};

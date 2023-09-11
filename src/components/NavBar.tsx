import React from "react";

export default function NavBar() {
  return (
    <div style={NAV_STYLES}>
      <div>About</div>
      <div>Projects</div>
      <div>Contact</div>
    </div>
  );
}

const NAV_STYLES = {
  background: "black",
  color: "white",
  padding: "10px",
};

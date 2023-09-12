import "../styles/content.css";
import profile from "../assets/svg/profile.svg";
import Tools from "./tools";

export default function Contents() {
  return (
    <div className="about-border">
      <div className="about-container container">
        <div>
          <h1 id="my-name">Hey! I'm Youngnam.</h1>
        </div>

        <div>
          <img id="profile-pic" src={profile}></img>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          nihil sapiente obcaecati facere nam officiis fuga id explicabo
          incidunt a. Impedit, velit? Sapiente iure ratione minima earum
          provident est perspiciatis!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi nihil sapiente obcaecati facere nam
          officiis fuga id explicabo incidunt a. Impedit, velit? Sapiente iure
          ratione minima earum provident est perspiciatis!Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Excepturi nihil sapiente obcaecati
          facere nam officiis fuga id explicabo incidunt a. Impedit, velit?
          Sapiente iure ratione minima earum provident est perspiciatis!
        </div>
        <Tools />
        <div>
          <h1>Projects</h1>
        </div>
      </div>
    </div>
  );
}

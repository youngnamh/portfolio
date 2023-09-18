import "../styles/content.css";
import profile from "../assets/images/profile-picture.jpeg";
import Tools from "./Tools";
import AllProjects from "./AllProjects";
import Contact from "./Contact";

export default function Contents() {
  return (
    <div className="content-border">
      <div className="content-container container">
        <div className="about-container">
          <div className="intro-div">
            Hey!
            <br />
            I'm Youngnam.
          </div>
          <div className="intro-media-div">
            <div className="faded summary-div">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              nihil sapiente obcaecati facere nam officiis fuga id explicabo
              incidunt a. Impedit, velit? Sapiente iure ratione minima earum
              provident est perspiciatis!Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi nihil sapiente obcaecati facere nam
              officiis fuga id explicabo incidunt a. Impedit, velit? Sapiente
              iure ratione minima earum provident est perspiciatis!Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Excepturi nihil
              sapiente obcaecati facere nam officiis fuga id explicabo incidunt
              a. Impedit, velit? Sapiente iure ratione minima earum provident
              est perspiciatis!
            </div>
            <div className="profile-div">
              <img
                id="profile-pic"
                src={profile}
                alt="profile"
                title="profile"
              ></img>
            </div>
          </div>
        </div>

        <div id="project-anchor"></div>
        <div>
          <h1>Projects</h1>
          <AllProjects />
        </div>
        <div>
          <div style={{ fontSize: "5rem", marginTop: "10rem" }}>Skills</div>
          <Tools />
        </div>
        <div className="contact-page" id="contact-anchor">
          <div style={{ fontSize: "5rem", marginTop: "10rem" }}>Contact</div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

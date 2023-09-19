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
          <div className="intro-media-div">
            <div className="profile-div">
              <img
                id="profile-pic"
                src={profile}
                alt="profile"
                title="profile"
              ></img>
            </div>
            <div className="faded summary-div">
              <div>
                <div className="intro-div">Hey! I'm Youngnam.</div>
                <div>
                  I am a software developer based out of Montreal, Canada. I am
                  a graduate of McGill University with a degree in Software
                  Engineering. I love everything to do with coding and am always
                  tring to learn new things. Right now my focus is on full-stack
                  web development.
                  <br />
                  When I am not working I love to be outdoors. You can catch me
                  snowboarding in the winter and running all summer (check out
                  my{" "}
                  <a
                    href="https://www.strava.com/athletes/64603272"
                    target="_blank"
                  >
                    Strava
                  </a>
                  !). My logo is inspired by my family's "Kamon", which is a
                  Japanese family crest.
                </div>
              </div>
            </div>
          </div>
        </div>
        <p id="project-anchor"></p>
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

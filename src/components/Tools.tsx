const logosArray = [
  { url: "devicon-javascript-plain colored", name: "JAVASCRIPT" },
  { url: "devicon-typescript-plain colored", name: "TYPESCRIPT" },
  { url: "devicon-html5-plain colored", name: "HTML5" },
  { url: "devicon-css3-plain colored", name: "CSS" },
  { url: "devicon-react-original colored", name: "REACTJS" },
  { url: "devicon-nodejs-plain colored", name: "NODEJS" },
  { url: "devicon-tailwindcss-plain colored", name: "TAILWINDCSS" },
  { url: "devicon-bootstrap-plain colored", name: "BOOTSTRAP" },
  { url: "devicon-java-plain colored", name: "JAVA" },
  { url: "devicon-spring-plain colored", name: "SPRINGBOOT" },
  { url: "devicon-python-plain colored", name: "PYTHON" },
  { url: "devicon-postgresql-plain colored", name: "POSTGRESQL" },
  { url: "devicon-mysql-plain colored", name: "MYSQL" },
  { url: "devicon-docker-plain colored", name: "DOCKER" },
  { url: "devicon-git-plain colored", name: "GIT" },
  { url: "devicon-jest-plain colored", name: "JEST" },
  { url: "devicon-webpack-plain colored", name: "WEBPACK" },
  { url: "devicon-figma-plain colored", name: "FIGMA" },
  { url: "devicon-bash-plain colored", name: "BASH" },
];

export default function Tools() {
  const generateImages = () => {
    const elements = logosArray.map((logo, index) => (
      <div className="tech-skill" key={index}>
        <i className={logo.url + " tech-icon"}></i>
        <div>{logo.name}</div>
      </div>
    ));
    return elements;
  };

  return (
    <div className="skills-container">
      <div className="tech-container">{generateImages()}</div>
    </div>
  );
}

import "../styles/project.css";

type ProjectProps = {
  image: string;
  title: string;
  category: string;
  description: string;
  repo: string;
  toolsArray: Array<string>;
};

export default function Project({
  image,
  title,
  category,
  description,
  repo,
  toolsArray,
}: ProjectProps) {
  const imageStyle = {
    backgroundImage: `url(${image})`,
  };

  const generateTools = () => {
    const tools = toolsArray.map((tool, index) => (
      <div className="project-tool" key={index}>
        {tool}
      </div>
    ));
    return tools;
  };

  return (
    <div className="project-div">
      <div className="project-image-div" style={imageStyle}>
        <img className="hidden-image" src={image}></img>
        <div className="project-buttons">
          <a href={repo} target="_blank">
            <button className="project-demo ">Preview</button>
          </a>
          <a href={repo} target="_blank">
            <button className="project-repo">View Code</button>
          </a>
        </div>
      </div>
      <div className="project-content">
        <div className="project-title accent">{title}</div>
        <div className="project-category faded">{category}</div>
        <div className="project-description faded">{description}</div>
        <div className="project-tools-div">{generateTools()}</div>
      </div>
    </div>
  );
}

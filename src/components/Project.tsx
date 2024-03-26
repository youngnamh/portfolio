import "../styles/project.css";

type ProjectProps = {
  image: string;
  title: string;
  category: string;
  description: string;
  preview: string;
  repo: string;
  toolsArray: Array<string>;
  demo: string;
};

export default function Project({
  image,
  title,
  category,
  description,
  preview,
  repo,
  toolsArray,
  demo,
}: ProjectProps) {
  const imageStyle = {
    backgroundImage: `url(${image})`,
  };

  const generateDemoButton = () => {
    if (demo != "") {
      return (
        <a href={demo} target="_blank">
          <button className="project-demo">Demo</button>
        </a>
      );
    } else {
      return null;
    }
  };

  const generateTools = () => {
    const tools = toolsArray.map((tool, index) => (
      <div className="project-tool" key={index}>
        {tool}
      </div>
    ));
    return tools;
  };

  const generatePreview = () => {
    if (preview != "" || preview == null) {
      return (
        <a href={preview} target="_blank">
          <button className="project-demo ">Preview</button>
        </a>
      );
    }
  };

  return (
    <div className="project-div">
      <div className="project-image-div" style={imageStyle}>
        <img className="hidden-image" src={image}></img>
        <div className="project-buttons">
          {generatePreview()}
          <a href={repo} target="_blank">
            <button className="project-repo">Repo</button>
          </a>
          {generateDemoButton()}
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

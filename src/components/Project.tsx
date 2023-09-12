type ProjectProps = {
  image: string;
  title: string;
  category: string;
  description: string;
  repo: string;
};

export default function Project({
  image,
  title,
  category,
  description,
  repo,
}: ProjectProps) {
  return (
    <div>
      <div className="project-title">{title}</div>
      <div className="project-category">{category}</div>
      <img src={image} className="project-image"></img>

      <div className="project-description">{description}</div>
      <div>
        <a href={repo} target="_blank">
          <button className="project-demo">Live Preview</button>
        </a>
        <a href={repo} target="_blank">
          <button className="project-repo">View Code</button>
        </a>
      </div>
    </div>
  );
}

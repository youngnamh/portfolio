import Project from "./Project";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

const projectArray = [
  {
    image: project1,
    title: "Title1",
    category: "Boardgame",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil sapiente obcaecati facere nam officiis fuga id explicabo incidunt a. Impedit, velit? Sapiente iure ratione minima earum provident est perspiciatis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil sapiente obcaecati facere nam",
    repo: "https://github.com/COMP361/f2022-hexanome-08",
  },
  {
    image: project2,
    title: "Title2",
    category: "Boardgame",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil sapiente obcaecati facere nam officiis fuga id explicabo incidunt a. Impedit, velit? Sapiente iure ratione minima earum provident est perspiciatis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil sapiente obcaecati facere nam",
    repo: "https://github.com/COMP361/f2022-hexanome-08",
  },
  {
    image: project3,
    title: "Title3",
    category: "Boardgame",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil sapiente obcaecati facere nam officiis fuga id explicabo incidunt a. Impedit, velit? Sapiente iure ratione minima earum provident est perspiciatis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil sapiente obcaecati facere nam",
    repo: "https://github.com/COMP361/f2022-hexanome-08",
  },
];

export default function AllProjects() {
  const generateProjects = () => {
    const projects = projectArray.map((project) => (
      <Project
        image={project.image}
        title={project.title}
        category={project.category}
        description={project.description}
        repo={project.repo}
      />
    ));
    return projects;
  };

  return <div>{generateProjects()}</div>;
}

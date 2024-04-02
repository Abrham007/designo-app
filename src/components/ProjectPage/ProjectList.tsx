import ProjectItem from "./ProjectItem";
import ProjectItemData from "@/interfaces/projectItem";

export default function ProjectList({ list }: { list: ProjectItemData[] }) {
  return (
    <ul className="flex flex-col gap-10 lg:grid grid-cols-3 gap-x-[30px] gap-y-8">
      {list.map((item, index) => (
        <ProjectItem key={index} {...item}></ProjectItem>
      ))}
    </ul>
  );
}

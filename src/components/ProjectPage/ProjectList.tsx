import ProjectItem from "./ProjectItem";

export default function ProductList() {
  return (
    <ul className="flex flex-col gap-10 lg:grid grid-cols-3 gap-x-[30px] gap-y-8">
      <ProjectItem></ProjectItem>
      <ProjectItem></ProjectItem>
      <ProjectItem></ProjectItem>
      <ProjectItem></ProjectItem>
    </ul>
  );
}

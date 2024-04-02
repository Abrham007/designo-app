import ProjectItemData from "./projectItem";
export default interface ProjectData {
  title: string;
  description: string;
  slug: string;
  projects: ProjectItemData[];
}

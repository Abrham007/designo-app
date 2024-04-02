import MainFooter from "@/components/MainFooter/MainFooter";
import ProjectHeader from "@/components/ProjectPage/ProjectHeader";
import ProjectList from "@/components/ProjectPage/ProjectList";
import Image from "next/image";
import leafPattern from "../../../../public/images/shared/desktop/bg-pattern-leaf.svg";
import ProjectData from "@/interfaces/project";
import data from "../../../data.json";
import ProjectLinks from "@/components/ProjectPage/ProjectLinks";

export default function Project({ params }: { params: { slug: string } }) {
  const currentProject: ProjectData | undefined = data.find(
    (project) => project.slug === params.slug
  );
  let title = currentProject?.title ?? "";
  let description = currentProject?.description ?? "";
  let projects = currentProject?.projects ?? [];
  let slug = currentProject?.slug ?? "";

  return (
    <main className="relative">
      <Image
        src={leafPattern}
        alt=""
        className="hidden lg:inline-block absolute top-[50px] left-0 -z-10 "
      ></Image>
      <ProjectHeader title={title} description={description}></ProjectHeader>
      <section className="w-full lg:max-w-[1111px] flex flex-col gap-[120px] lg:gap-[160px] lg:mx-auto px-6 md:px-10 lg:px-0 mb-[120px] md:mb-[108px] lg:mb-[160px] ">
        <ProjectList list={projects}></ProjectList>
        <ProjectLinks slug={slug}></ProjectLinks>
      </section>
      <MainFooter></MainFooter>
    </main>
  );
}

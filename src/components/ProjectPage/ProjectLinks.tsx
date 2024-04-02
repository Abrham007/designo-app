import Link from "@/components/UI/Link/Link";
import { imgSrcObject } from "@/util/imgSrcObject";
export default function ProjectLinks({ slug }: { slug: string }) {
  const linkList = [
    { name: "web", title: "Web Design", href: "/project/web" },
    { name: "app", title: "App Design", href: "/project/app" },
    { name: "graphic", title: "Graphic Design", href: "/project/graphic" },
  ];

  const currentLinkList = linkList.filter((link) => link.name !== slug);
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] items-center">
        {currentLinkList.map((linkItem) => (
          <li key={linkItem.name}>
            <Link
              href={linkItem.href}
              title={linkItem.title}
              imgSrc={imgSrcObject[linkItem.name]}
            ></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

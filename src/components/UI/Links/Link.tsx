import Image, { StaticImageData, getImageProps } from "next/image";
import rightArrow from "../../../../public/images/shared/desktop/icon-right-arrow.svg";
import NextLink from "next/link";
export default function Link({
  href,
  title,
  imgSrc,
  large,
}: {
  href: string;
  title: string;
  imgSrc: string;
  large?: boolean;
}) {
  const common = { alt: "" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 541,
    height: large ? 640 : 308,
    src: imgSrc,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 689,
    height: 200,
    src: imgSrc,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 327,
    height: 250,
    src: imgSrc,
  });
  return (
    <NextLink
      href={href}
      className="relative h-[200px] flex flex-col gap-3 md:gap-6 justify-center items-center rounded-[15px]"
    >
      <picture>
        <source media="(min-width: 1020px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img
          {...rest}
          alt=""
          className="absolute top-0 bottom-0 left-0 right-0"
        />
      </picture>

      <p className="text-[1.75rem] leading-[2.25rem] tracking-[0.0875rem] font-medium md:text-xl text-White uppercase">
        {title}
      </p>
      <span className="flex gap-4 md:gap-[21px]">
        <span className="text-[0.9375rem] text-White tracking-[0.3125rem] font-medium">
          VIEW PROJECTS
        </span>
        <Image src={rightArrow} alt=""></Image>
      </span>
    </NextLink>
  );
}

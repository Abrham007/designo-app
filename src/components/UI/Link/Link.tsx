import Image, { StaticImageData, getImageProps } from "next/image";
import rightArrow from "../../../../public/images/shared/desktop/icon-right-arrow.svg";
import NextLink from "next/link";
export default function Link({
  href,
  title,
  imgSrc,
  large,
  className,
}: {
  href: string;
  title: string;
  imgSrc: {
    desktop: { large?: string; small: string };
    tablet: string;
    mobile: string;
  };
  large?: boolean;
  className?: string;
}) {
  const common = { alt: "" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 541,
    height: large ? 640 : 308,
    src:
      imgSrc.desktop.large && large
        ? imgSrc.desktop.large
        : imgSrc.desktop.small,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 689,
    height: 200,
    src: imgSrc.tablet,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 327,
    height: 250,
    src: imgSrc.mobile,
  });
  return (
    <NextLink
      href={href}
      className={`relative w-[327px] md:w-[689px] lg:w-[541px] h-[250px] md:h-[200px] lg:h-[308px] flex flex-col gap-3 md:gap-6 justify-center items-center rounded-[15px] bg-[#00000080] hover:bg-[#E7816B80] ${className}`}
    >
      <picture>
        <source media="(min-width: 1020px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img
          {...rest}
          alt=""
          className="h-full w-full absolute top-0 bottom-0 left-0 right-0 rounded-[15px] -z-10"
        />
      </picture>

      <p className="text-[1.75rem] leading-[2.25rem] tracking-[0.0875rem] font-medium md:text-xl text-White uppercase">
        {title}
      </p>
      <span className="flex gap-4 md:gap-[21px] items-center">
        <span className="text-[0.9375rem] text-White tracking-[0.3125rem] font-medium">
          VIEW PROJECTS
        </span>
        <Image src={rightArrow} alt=""></Image>
      </span>
    </NextLink>
  );
}

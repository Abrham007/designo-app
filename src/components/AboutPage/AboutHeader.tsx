import { getImageProps } from "next/image";
export default function AboutHeader() {
  const common = { alt: "A group of people having a meeting" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 476,
    height: 480,
    src: "/images/about/desktop/image-about-hero.jpg",
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 689,
    height: 320,
    src: "/images/about/tablet/image-about-hero.jpg",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 375,
    height: 320,
    src: "/images/about/mobile/image-about-hero.jpg",
  });
  return (
    <header className="flex flex-col lg:flex-row-reverse lg:justify-between md:w-[689px] lg:w-full lg:max-w-[1111px] md:mx-auto bg-Peach md:rounded-[15px]">
      <picture>
        <source media="(min-width: 1020px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img
          {...rest}
          alt="A group of people having a meeting"
          className="w-full h-[320px] md:h-[320px] lg:w-[476px] lg:h-[480px]  md:rounded-t-[15px] lg:rounded-none lg:rounded-r-[15px]"
        />
      </picture>
      <div className="flex flex-col gap-6 md:gap-8 items-center justify-center text-center lg:text-start px-6 py-20 md:px-[58px] md:py-16 lg:py-0 lg:pl-[95px] lg:pr-0  bg-[url('/images/about/mobile/bg-pattern-hero-about-mobile.svg')] md:bg-[url('/images/about/desktop/bg-pattern-hero-about-desktop.svg')] bg-[right_top_-130px] md:bg-[left_-140px_top_-380px] lg:bg-[right_bottom] bg-no-repeat">
        <h1 className="lg:w-[458px] text-[2rem] text-White leading-[2.25rem] font-medium md:text-xl2">
          About Us
        </h1>
        <p className="lg:w-[458px] text-sm text-White  md:text-base">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </header>
  );
}

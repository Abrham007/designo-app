import { getImageProps } from "next/image";

export default function AboutInfoItem({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: any;
}) {
  const common = { alt: title };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 476,
    height: 640,
    src: images.desktop,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 689,
    height: 320,
    src: images.tablet,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 375,
    height: 320,
    src: images.mobile,
  });

  const text = description ?? "";
  const textList = text.split("\\n\\n");
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between md:w-[689px] lg:w-full lg:max-w-[1111px] md:mx-auto bg-[#FDF3F0] md:rounded-[15px]">
      <picture>
        <source media="(min-width: 1020px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img
          {...rest}
          alt={title}
          className="w-full h-[320px] md:h-[320px] lg:w-[476px] lg:h-[640px]  md:rounded-t-[15px] lg:rounded-none lg:rounded-l-[15px]"
        />
      </picture>
      <div className="flex flex-col gap-6 md:gap-8 items-center justify-center text-center lg:text-start px-6 py-20 md:px-[58px] md:py-17 lg:py-[154px] lg:px-[96px]  bg-threeCirles bg-[left_top_0px] md:bg-[center_top_-200px] lg:bg-[left_-100px_bottom_0px] bg-no-repeat">
        <h2 className="lg:w-[445px] text-[2rem] leading-[2.25rem] font-medium text-Peach md:text-xl">
          {title}
        </h2>
        {textList.map((text, index) => (
          <p
            key={index}
            className="lg:w-[445px] text-sm md:text-base text-Black"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

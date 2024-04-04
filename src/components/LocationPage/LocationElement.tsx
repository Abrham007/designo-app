import { getImageProps } from "next/image";

export default function LocationElement({
  name,
  office,
  contact,
  images,
}: {
  name: string;
  office: { name: string; street: string; city: string; postCode: string };
  contact: { phone: string; email: string };
  images: { desktop: string; tablet: string };
}) {
  const common = { alt: name };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 476,
    height: 640,
    src: images.desktop,
  });
  const {
    props: { srcSet: tablet, ...rest },
  } = getImageProps({
    ...common,
    width: 689,
    height: 320,
    src: images.tablet,
  });
  return (
    <li className="flex flex-col lg:flex-row-reverse lg:even:flex-row gap-0 md:gap-[31px] ">
      <picture>
        <source media="(min-width: 1020px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <img
          {...rest}
          alt={name}
          className="w-full h-[320px] md:w-[689px] md:h-[326px] lg:w-[350px] lg:h-[326px] md:rounded-[15px] md:mx-auto flex-shrink-0"
        />
      </picture>
      <div className="w-full h-[394px] md:w-[689px] md:h-[326px] lg:w-[730px] lg:h-[326px] md:mx-auto md:px-[75px] lg:px-[95px] md:rounded-[15px] flex flex-col justify-center items-center md:items-start gap-6 bg-[#FDF3F0] bg-threeCirles md:bg-twoCirles bg-left-top md:bg-left-bottom bg-no-repeat">
        <h2 className="text-[2rem] leading-[2.25rem] font-medium text-Peach md:text-xl">
          {name}
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-[30px]">
          <div className="w-[327px] md:w-[255px] text-center md:text-start">
            <p className="text-base text-Black font-bold opacity-50">
              Designo {office.name}
            </p>
            <p className="text-base text-Black opacity-50">{office.street}</p>
            <p className="text-base text-Black opacity-50">
              {office.city}
              {office.postCode}
            </p>
          </div>

          <div className="w-[327px] md:w-[255px] text-center md:text-start">
            <p className="text-base text-Black font-bold opacity-50">Contact</p>
            <p className="text-base text-Black opacity-50">
              P : {contact.phone}
            </p>
            <p className="text-base text-Black opacity-50">
              M : {contact.email}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

import Link from "next/link";
import Button from "../UI/Buttons/Button";

export default function MainFooter() {
  return (
    <footer className="relative h-[379px] px-6 md:px-10 -mb-1 flex justify-center items-center border-none before:h-[190px] md:before:h-[100px] before:w-full before:absolute before:bottom-0 before:-z-10  before:bg-Black">
      <div className="w-full lg:max-w-[1111px] lg:mx-auto px-6 py-[64px] md:py-[57px] lg:px-[95px] lg:py-[72px] flex flex-col lg:flex-row gap-8 items-center lg:justify-between text-center lg:text-start bg-Peach bg-smallCircles bg-cover bg-[center_top_180px] md:bg-contain rounded-[15px]">
        <div className=" flex flex-col gap-[6px] md:gap-5 items-center lg:items-start">
          <h2 className="md:w-[335px] text-[2rem] md:text-xl  text-White leading-[2.25rem] md:leading-[2.5rem] md:tracking-normal font-medium">
            Let’s talk about your project
          </h2>
          <p className="md:w-[450px] text-[0.9375rem] text-White leading-[1.5625rem] md:text-base">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-6 py-4 text-[0.9375rem] tracking-[0.0625rem] uppercase font-medium text-DarkGrey hover:text-White  bg-White hover:bg-LightPeach rounded-lg"
        >
          Get in touch
        </Link>
      </div>
    </footer>
  );
}

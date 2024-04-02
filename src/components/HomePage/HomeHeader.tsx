import Button from "@/components/UI/Buttons/Button";
export default function HomeHeader() {
  return (
    <header className="overflow-hidden relative w-full h-[843px] md:w-[689px] lg:w-[1111px] lg:h-[640px] md:mx-auto md:rounded-[15px] flex items-start lg:items-center justify-center lg:justify-start px-6 lg:px-[95px] pt-20 mb-[120px] bg-Peach ">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 bg-[url('/images/home/desktop/bg-pattern-hero-home.svg')] bg-[center_left] md:bg-[top_125px_right_-120px] lg:bg-[top_right] bg-no-repeat"
        role="presentation"
      ></div>
      <div
        className="absolute top-0 bottom-0 left-0 right-0 bg-[url('../../public/images/home/desktop/image-hero-phone.png')] bg-[bottom_-370px_center] lg:bg-[bottom_-200px_right_-50px] bg-no-repeat"
        role="presentation"
      ></div>

      <div className="md:w-[550px] z-10 flex flex-col gap-6 md:gap-5 items-center lg:items-start">
        <div className=" flex flex-col gap-[14px] md:gap-6 items-center text-center lg:text-start">
          <h1 className="text-[2rem] text-White leading-[2.25rem] font-medium md:text-xl2">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-sm text-White  md:text-base">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
        </div>

        <Button $type="1">Learn More</Button>
      </div>
    </header>
  );
}

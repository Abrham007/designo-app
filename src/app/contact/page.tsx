import ContactForm from "@/components/ContactPage/ContactForm";
import ContactHeader from "@/components/ContactPage/ContactHeader";
import LocationList from "@/components/LocationList/LocationList";
import Image from "next/image";
import leafPattern from "../../../public/images/shared/desktop/bg-pattern-leaf.svg";

export default function Contact() {
  return (
    <main className="relative flex flex-col gap-[120px] lg:gap-[160px] pb-[120px] lg:pb-[160px]">
      <Image
        src={leafPattern}
        alt=""
        className="hidden lg:inline-block absolute -bottom-[150px] right-0 -z-10 "
      ></Image>
      <div className="w-full md:w-[689px] lg:w-[1111px] md:mx-auto lg:px-[95px] lg:py-[54px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-0 md:rounded-[15px] bg-Peach md:bg-smallCircles bg-[left_-180px_top_-110px] lg:bg-[left_0px_top_-140px] md:bg-contain lg:bg-[length:640px_640px] md:bg-no-repeat">
        <ContactHeader></ContactHeader>
        <ContactForm></ContactForm>
      </div>
      <LocationList></LocationList>
    </main>
  );
}

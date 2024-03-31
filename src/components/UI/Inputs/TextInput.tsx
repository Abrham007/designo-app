import Image from "next/image";
import errorIcon from "../../../../public/images/contact/desktop/icon-error.svg";

export default function TextInput() {
  return (
    <label className="flex justify-between items-start px-4 pb-[12px] bg-transparnet border-b hover:border-b-[3px] focus:border-b-[3px] border-b-solid border-b-White">
      <input
        type="text"
        placeholder="Empty Form"
        className="text-[0.9375rem] leading-[1.625rem] font-medium text-White bg-transparent border-none outline-none"
      />
      <span>
        <span className="text-[0.75rem] text-White italic leading-[1.625rem]">
          Can’t be empty
        </span>
        <Image src={errorIcon} alt="" width={20}></Image>
      </span>
    </label>
  );
}

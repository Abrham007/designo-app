import { InputHTMLAttributes } from "react";
import Image from "next/image";
import errorIcon from "../../../../public/images/contact/desktop/icon-error.svg";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  Container?: any;
  rows?: string;
  errorMessage: string | undefined;
}

export default function Input({
  Container = "input",
  errorMessage,
  ...props
}: InputProps) {
  return (
    <label className="flex justify-between items-start px-4 pb-[12px] md:px-6 bg-transparent border-b hover:border-b-[3px] focus:border-b-[3px] border-b-solid border-b-White">
      <Container
        {...props}
        className="w-full text-[0.9375rem] leading-[1.625rem] font-medium text-White placeholder:text-White placeholder:opacity-50 bg-[#00000000] border-none outline-none"
      />

      {errorMessage && (
        <span className="flex items-center gap-2 shrink-0">
          <span className="text-[0.75rem] text-White italic leading-[1.625rem]">
            {errorMessage}
          </span>
          <Image src={errorIcon} alt="" width={20}></Image>
        </span>
      )}
    </label>
  );
}

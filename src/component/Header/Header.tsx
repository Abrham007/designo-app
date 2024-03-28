import Image from "next/image";
import logoIcon from "../../../public/images/shared/desktop/logo-light.png";
import hambergerIcon from "../../../public/images/shared/mobile/icon-hamburger.svg";

export default function Header() {
  return (
    <header className="flex justify-between px-6 py-8">
      <Image src={logoIcon} alt="Designo logo"></Image>
      <button aria-label="hamberger icon">
        <Image src={hambergerIcon} alt="hamgerger icon"></Image>
      </button>
    </header>
  );
}

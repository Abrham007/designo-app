import Image from "next/image";
import logoLightIcon from "../../../public/images/shared/desktop/logo-light.png";
import FacebookIcon from "../UI/icons/FacebookIcon";
import YoutubeIcon from "../UI/icons/YoutubeIcon";
import TwitterIcon from "../UI/icons/TwitterIcon";
import PinterestIcon from "../UI/icons/PinterestIcon";
import InstagramIcon from "../UI/icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-Black">
      <div className="w-full lg:max-w-[1111px] lg:mx-auto px-6 md:px-10 py-[64px] md:py-20 lg:py-[72px] flex flex-col justify-center  gap-10 ">
        <div className="flex flex-col md:flex-row gap-8 md:justify-between md:items-center">
          <Image
            src={logoLightIcon}
            alt="Designo logo"
            width={202}
            className="mx-auto md:mx-0"
          ></Image>

          <hr className="h-[3px] w-full bg-White opacity-10 md:hidden"></hr>

          <nav>
            <ul className="flex flex-col md:flex-row gap-8 md:gap-[42px] items-center">
              <li className="text-[0.875rem] text-White leading-[0.875rem] tracking-[0.125rem] hover:underline">
                OUR COMPANY
              </li>
              <li className="text-[0.875rem] text-White leading-[0.875rem] tracking-[0.125rem] hover:underline">
                LOCATIONS
              </li>
              <li className="text-[0.875rem] text-White leading-[0.875rem] tracking-[0.125rem] hover:underline">
                CONTACT
              </li>
            </ul>
          </nav>
        </div>

        <hr className="h-[3px] w-full bg-White opacity-10 hidden md:block"></hr>

        <div className="flex flex-col md:flex-row justify-center md:items-end gap-10 lg:gap-[150px] md:-mt-[9px]">
          <div className="text-center md:text-start">
            <p className="text-base text-White font-bold opacity-50">
              Designo Central Office
            </p>
            <p className="text-base text-White opacity-50">
              3886 Wellington Street
            </p>
            <p className="text-base text-White opacity-50">
              Toronto, Ontario M9C 3J5
            </p>
          </div>

          <div className="text-center md:text-start">
            <p className="text-base text-White font-bold opacity-50">
              Contact Us (Central Office)
            </p>
            <p className="text-base text-White opacity-50">
              P : +1 253-863-8967
            </p>
            <p className="text-base text-White opacity-50">
              M : contact@designo.co
            </p>
          </div>

          <div className="w-[184px] flex justify-between mx-auto md:mx-0 md:ml-auto">
            <FacebookIcon></FacebookIcon>
            <YoutubeIcon></YoutubeIcon>
            <TwitterIcon></TwitterIcon>
            <PinterestIcon></PinterestIcon>
            <InstagramIcon></InstagramIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

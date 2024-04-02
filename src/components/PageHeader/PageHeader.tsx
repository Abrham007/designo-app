"use client";

import Image from "next/image";
import logoDarkIcon from "../../../public/images/shared/desktop/logo-dark.png";
import hambergerIcon from "../../../public/images/shared/mobile/icon-hamburger.svg";
import closeIcon from "../../../public/images/shared/mobile/icon-close.svg";
import Modal from "../Modal";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleModalOpen() {
    setIsOpen(true);
  }

  function handleModalClose() {
    setIsOpen(false);
  }

  if (isOpen) {
    return (
      <Modal
        isOpen={true}
        setIsOpen={setIsOpen}
        className="backdrop:absolute backdrop:top-[96px]"
      >
        <header className="fixed top-0 left-0 right-0 bg-White">
          <div className="flex justify-between px-6 py-8">
            <Image src={logoDarkIcon} alt="Designo logo" width={202}></Image>
            <button
              className="md:hidden"
              aria-label="hamberger icon"
              onClick={handleModalClose}
            >
              <Image src={closeIcon} alt="close icon" width={20}></Image>
            </button>
          </div>
          <nav>
            <ul className="flex flex-col gap-8 px-6 py-12 bg-Black">
              <li className="text-[1.5rem] text-White leading-[1.5625rem] tracking-[0.125rem] uppercase">
                OUR COMPANY
              </li>
              <li className="text-[1.5rem] text-White leading-[1.5625rem] tracking-[0.125rem] uppercase">
                LOCATIONS
              </li>
              <li className="text-[1.5rem] text-White leading-[1.5625rem] tracking-[0.125rem] uppercase">
                CONTACT
              </li>
            </ul>
          </nav>
        </header>
      </Modal>
    );
  }
  return (
    <header className="w-full lg:max-w-[1111px] lg:mx-auto flex justify-between px-6 py-8 md:px-10 md:py-[64px] lg:px-0 bg-White">
      <Image src={logoDarkIcon} alt="Designo logo" width={202}></Image>
      <nav className="hidden md:inline-block">
        <ul className="flex gap-[42px]">
          <li className="text-[0.875rem] text-DarkGray leading-1 tracking-[0.125rem] uppercase hover:underline">
            OUR COMPANY
          </li>
          <li className="text-[0.875rem] text-DarkGray leading-1 tracking-[0.125rem] uppercase hover:underline">
            LOCATIONS
          </li>
          <li className="text-[0.875rem] text-DarkGray leading-1 tracking-[0.125rem] uppercase hover:underline">
            CONTACT
          </li>
        </ul>
      </nav>
      <button
        className="md:hidden"
        aria-label="hamberger icon"
        onClick={handleModalOpen}
      >
        <Image src={hambergerIcon} alt="hamgerger icon" width={24}></Image>
      </button>
    </header>
  );
}

"use client";

import Image from "next/image";
import logoDarkIcon from "../../../public/images/shared/desktop/logo-dark.png";
import hambergerIcon from "../../../public/images/shared/mobile/icon-hamburger.svg";
import closeIcon from "../../../public/images/shared/mobile/icon-close.svg";
import Modal from "../Modal";
import { useState } from "react";
import Link from "next/link";

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
        className="fixed backdrop:absolute backdrop:top-[96px] backdrop:bottom-0"
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
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  OUR COMPANY
                </Link>
              </li>
              <li className="text-[1.5rem] text-White leading-[1.5625rem] tracking-[0.125rem] uppercase">
                <Link href="/location" onClick={() => setIsOpen(false)}>
                  LOCATIONS
                </Link>
              </li>
              <li className="text-[1.5rem] text-White leading-[1.5625rem] tracking-[0.125rem] uppercase">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </Modal>
    );
  }
  return (
    <header className="w-full lg:max-w-[1111px] lg:mx-auto flex justify-between px-6 py-8 md:px-10 md:py-[64px] lg:px-0 bg-White">
      <Link href="/">
        <Image src={logoDarkIcon} alt="Designo logo" width={202}></Image>
      </Link>

      <nav className="hidden md:inline-block">
        <ul className="flex gap-[42px]">
          <li className="text-[0.875rem] text-DarkGray leading-1 tracking-[0.125rem] uppercase hover:underline">
            <Link href="/about">OUR COMPANY</Link>
          </li>
          <li className="text-[0.875rem] text-DarkGray leading-1 tracking-[0.125rem] uppercase hover:underline">
            <Link href="/location">LOCATIONS</Link>
          </li>
          <li className="text-[0.875rem] text-DarkGray leading-1 tracking-[0.125rem] uppercase hover:underline">
            <Link href="/contact">CONTACT</Link>
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

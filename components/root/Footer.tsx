import React from "react";
import { Separator } from "../ui/separator";
import { CheckIcon, FaceIcon, HandIcon } from "@radix-ui/react-icons";
import Logo from "./Logo";
import { FaWhatsapp, FaPhone, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <Separator />
      <section className="flex w-full justify-center items-center h-[10vh]">
        <div className="flex justify-between w-[90%] lg:w-[60%] items-center">
        <div className="social flex justify-between w-1/3">
          <FaPhone fill="green" className="cursor-pointer hover:fill-primary-foreground"/>
          <FaWhatsapp fill="green" className="cursor-pointer hover:fill-primary-foreground"/>
          <FaTelegram fill="green" className="cursor-pointer hover:fill-primary-foreground"/>
        </div>
          <Logo />
        </div>
      </section>
      <Separator />
    </>
  );
}

export default Footer;

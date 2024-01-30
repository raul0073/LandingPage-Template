import { FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Separator } from "../ui/separator";
import Logo from "./Logo";

function Footer() {
  return (
    <>
      <Separator />
      <section className="flex w-full flex-col justify-center items-center h-[20vh]">
        <Logo className="text-primary-foreground" />
                <div className="social flex justify-evenly w-1/3 mt-8">
          <FaPhone className="cursor-pointer fill-muted-foreground hover:fill-primary-foreground"/>
          <FaWhatsapp className="cursor-pointer fill-muted-foreground hover:fill-primary-foreground"/>
          <FaTelegram className="cursor-pointer fill-muted-foreground hover:fill-primary-foreground"/>
        </div>
      </section>
      <Separator />
    </>
  );
}

export default Footer;

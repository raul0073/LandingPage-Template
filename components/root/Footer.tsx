import { FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Separator } from "../ui/separator";
import Logo from "./Logo";

function Footer() {
  return (
    <>
      <Separator />
      <section className="flex w-full flex-col justify-center items-center h-[20vh]">
      <div className="flex justify-center">
        <Logo className="text-primary-foreground flex" />
      </div>
                <div className="social flex justify-around w-1/3 mt-8">
          <FaPhone className="text-xl cursor-pointer fill-muted-foreground hover:fill-primary-foreground"/>
          <FaWhatsapp className="text-xl cursor-pointer fill-muted-foreground hover:fill-primary-foreground"/>
          <FaTelegram className="text-xl cursor-pointer fill-muted-foreground hover:fill-primary-foreground"/>
        </div>
      </section>
      <Separator />
    </>
  );
}

export default Footer;

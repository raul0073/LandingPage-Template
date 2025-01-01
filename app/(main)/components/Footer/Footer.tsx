import Logo from "@/components/root/Logo";
import { FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa";

function Footer() {
	return (
		
			<section className="flex w-full flex-col justify-center items-center h-[15vh] border-t border-neutral-200">
				<footer className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center">
					<div className="flex justify-center">
						<Logo className="text-bluish flex pb-4 md:pb-0" />
					</div>
			
					<div className="social flex items-center gap-2">
						<FaPhone className="text-xl cursor-pointer fill-muted-foreground hover:fill-primary-foreground" />
						<FaWhatsapp className="text-xl cursor-pointer fill-muted-foreground hover:fill-primary-foreground" />
						<FaTelegram className="text-xl cursor-pointer fill-muted-foreground hover:fill-primary-foreground" />
					</div>
				</footer>
			</section>
		
	);
}

export default Footer;

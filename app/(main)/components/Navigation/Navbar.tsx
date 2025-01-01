"use client";
import Logo from "@/components/root/Logo";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [scrolling, setScrolling] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};
		setMounted(true);
		window.addEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="w-full bg-transparent fixed top-5 z-20">
			<div
				className={`${
					scrolling
						? "container w-[90%] bg-bluish/70 backdrop-blur-3xl mx-auto p-2"
						: "container w-[90%] mx-auto p-2"
				}`}>
				<div className="flex justify-between items-center">
					<Logo className={`${scrolling ? "text-pinkish" : "text-pinkish"}`} />
					<nav>
						<ul className="gap-6 uppercase hidden md:flex">
							<li className="text-lg uppercase text-white/70 cursor-pointer hover:text-white transition-colors duration-200 ease-in">
								LINK
							</li>
							<li className="text-lg uppercase text-white/70 cursor-pointer hover:text-white transition-colors duration-200 ease-in">
								LINK
							</li>
							<li className="text-lg uppercase text-white/70 cursor-pointer hover:text-white transition-colors duration-200 ease-in">
								LINK
							</li>
						</ul>
						<HamburgerMenuIcon
							className="md:hidden text-white"
							width={30}
							height={30}
						/>
					</nav>
				</div>
			</div>
		</header>
	);
}

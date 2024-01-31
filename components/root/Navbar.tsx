"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Logo from "./Logo";


export default function Navbar() {
	const [scrolling, setScrolling] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const router = useRouter()
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
		
			<div
				className={`fixed w-full z-10 ${
					scrolling ? "bg-primary transition-all duration-500" : ""
				}`}>
				<section className={`px-4 py-2 lg:p-4 w-full`}>
					<div className="menu flex justify-between items-center w-full">
						{menuOpen ? "" : <Logo className={`${scrolling? 'text-white' : 'text-primary'}`}/>}
						<div className="md:hidden">
							{scrolling ? (
								<button
									className={`text-white focus:outline-none hover:text-muted-foreground text-4xl ${
										menuOpen ? "hidden" : ""
									}`}
									onClick={() => setMenuOpen(!menuOpen)}>
									☰
								</button>
							) : (
								""
							)}
							<button
								className={`text-white focus:outline-none hover:text-muted-foreground text-4xl transition-all duration-500  ${
									menuOpen ? "h-[100px]" : "hidden"
								}`}
								onClick={() => setMenuOpen(!menuOpen)}>
								✕
							</button>
							
						</div>

						<div
							className={`w-full md:flex flex-grow justify-end items-center  ${
								menuOpen ? "flex justify-center" : "hidden"
							}`}>
							<Button
								className="mx-2 text-white"
								onClick={()=> router.push('/#about')}
								variant={`${scrolling ? "link" : "ghost"}`}>
								אודות
							</Button>
							<Button
								className="mx-2 text-white"
								onClick={()=> router.push('/#services')}
								variant={`${scrolling ? "link" : "ghost"}`}>
								שירותים
							</Button>
							<Button
								className="mx-2 text-white"
								onClick={()=> router.push('/#contact')}
								variant={`${scrolling ? "link" : "ghost"}`}>
								צור קשר
							</Button>
						</div>
					</div>
				</section>
				{scrolling ? <Separator /> : ""}
			</div>
		</>
	);
}

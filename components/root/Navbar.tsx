"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export default function Navbar() {
	const [scrolling, setScrolling] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className={`fixed w-full z-10 ${
					scrolling ? "bg-white transition-all duration-500" : ""
				}`}>
				<section className={`px-4 py-2 lg:p-4 w-full`}>
					<div className="menu flex justify-between items-center w-full">
						{menuOpen ? "" : <Logo />}
						<div className="md:hidden transition-all duration-500">
							{scrolling ? (
								<button
									className={`text-gray-500 focus:outline-none text-4xl ${
										menuOpen ? "hidden" : ""
									}`}
									onClick={() => setMenuOpen(!menuOpen)}>
									☰
								</button>
							) : (
								""
							)}
							<button
								className={`text-gray-800 focus:outline-none ${
									menuOpen ? "" : "hidden"
								}`}
								onClick={() => setMenuOpen(!menuOpen)}>
								✕
							</button>
						</div>
						<div
							className={`w-full md:flex flex-grow justify-end items-center transition-all duration-200 ${
								menuOpen ? "flex justify-center" : "hidden"
							}`}>
							<Button
								className="mx-2"
								variant={`${scrolling ? "link" : "ghost"}`}>
								אודות
							</Button>
							<Button
								className="mx-2"
								variant={`${scrolling ? "link" : "ghost"}`}>
								שירותים
							</Button>
							<Button
								className="mx-2"
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

'use client'
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import "./styles/hero.scss";
import React, { useState } from "react";

export default function Hero() {
const router = useRouter()
	return (
		<section className="hero w-full flex justify-center items-center min-h-[100vh] mt-[20vh]">
			<div className="content">
				<h1 className="text-8xl p-4 text-center text-white">[השם שלנו]</h1>
				<h2 className="text-5xl p-4 text-center font-bold text-white">
					<span className="highlight-container">
						<span className="highlight">שירותים שווים דגש</span>
					</span>
				</h2>

				<div className="flex flex-col justify-center lg:flex-row w-[90%] m-auto ">
					<Button className="mx-4 p-5 my-4" variant={"secondary"}>
						אקשן 1{" "}
					</Button>
					<Button className="mx-4 p-5 lg:my-4" onClick={() => router.push('/#contact')}>אקשן 2 </Button>
				</div>
			</div>
		</section>
	);
}

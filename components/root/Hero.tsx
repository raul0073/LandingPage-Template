"use client";
import { RootState } from "@/lib/Store";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import HeroEditor from "../Editors/HeroEditor";
import { TooltipComp } from "../Editors/Tooltip";
import { Button } from "../ui/button";
import "./styles/hero.scss";

export default function Hero() {
	const value = useSelector((state: RootState) => state.hero.header.value);
	const subValue = useSelector((state: RootState) => state.hero.sub.value);
	const btn1 = useSelector((state: RootState) => state.hero.btn1.value);
	const btn2 = useSelector((state: RootState) => state.hero.btn2.value);
	const router = useRouter();
	return (
		<section className="hero w-full flex justify-center items-center min-h-[100vh] mt-[20vh]">
			<motion.span
				initial={{ opacity: 0, scale: 0.8 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 2 }}
				className="absolute left-5 top-[50%] translate-y-[-50%] p-1"></motion.span>
			<div className="content">
				<h1 className="text-8xl p-4 text-center text-white">
					{value}
					<TooltipComp text="עריכת טקסט">
						<HeroEditor slice={"HeroSlice"} elemName="header" />
					</TooltipComp>
				</h1>
				<h2 className="text-5xl p-4 text-center font-bold text-white">
					<span className="highlight-container">
						<span className="highlight">{subValue}</span>
					</span>
					<TooltipComp text="עריכת טקסט">
						<HeroEditor slice={"HeroSlice"} elemName="sub" />
					</TooltipComp>
				</h2>

				<div className="flex flex-col justify-center lg:flex-row w-[90%] m-auto ">
					<Button className="mx-4 p-5 my-4" variant={"secondary"}>
						{btn1}
					</Button>
					<Button
						className="mx-4 p-5 lg:my-4"
						onClick={() => router.push("/#contact")}>
						{btn2}
					</Button>
			<div className="edit flex justify-evenly">
								<TooltipComp text="עריכת טקסט">
						<HeroEditor slice={"HeroSlice"} elemName="btn1" />
					</TooltipComp>
					<TooltipComp text="עריכת טקסט">
						<HeroEditor slice={"HeroSlice"} elemName="btn2" />
					</TooltipComp>
					</div>
				</div>
			</div>
		</section>
	);
}

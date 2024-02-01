"use client";
import { RootState } from "@/lib/Store";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSelector } from "react-redux";
import AboutEditor from "../Editors/AboutEditor";
import { TooltipComp } from "../Editors/Tooltip";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";
import { Separator } from "../ui/separator";

function AboutUs() {
	const title = useSelector((state: RootState) => state.about.title.value);
	const content = useSelector((state: RootState) => state.about.content.value);
	const images = useSelector((state: RootState) => state.about.images);
	return (
		<>
			<section
				id="about"
				className="w-[90%] m-auto p-1 lg:p-4 flex flex-col  justify-evenly items-center min-h-[90vh] mt-20 lg:flex-row lg:mt-2">
				<motion.div
					className="content w-[90%] lg:w-[60%] order-1 md:order-1"
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}>
					<h2 className="header text-4xl font-bold text-foreground mb-4  text-gray-500">
						{title}
						<TooltipComp text="עריכת טקסט">
							<AboutEditor slice={"AboutSlice"} elemName="title" />
						</TooltipComp>
					</h2>
					<div>
						{content}{" "}
						<TooltipComp text="עריכת טקסט">
							<AboutEditor slice={"AboutSlice"} elemName="content" textArea={true} />
						</TooltipComp>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="carousel w-1/2  md:w-1/4 order-2 md:order-2 flex items-center">
					<Carousel className="w-full h-full object-cover">
										<TooltipComp text="עריכת טקסט">
						<AboutEditor slice={"AboutSlice"} elemName="images" />
					</TooltipComp>
						<CarouselContent className="flex items-center">
						
							{images.map((imgUrl, index) => (
								<CarouselItem key={index}>
									<Image
										src={imgUrl.value}
										alt="pic"
										width={300}
										height={300}
										className="object-cover w-full min-h-full"
									/>
								</CarouselItem>
							))}

						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</motion.div>
			</section>
			<Separator />
		</>
	);
}

export default AboutUs;

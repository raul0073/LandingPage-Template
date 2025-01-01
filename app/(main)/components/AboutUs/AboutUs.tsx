"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../../../../components/ui/carousel";
import { AboutUsImages } from "./constants/data";

function AboutUs() {
	let reff = useRef(null);

	return (
		<>
			<section
				id="about"
				className="w-full py-24">
					<div className="container w-[90%] m-auto p-1 lg:p-4 flex flex-col justify-evenly items-center min-h-[90vh] lg:flex-row">
				<div>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 0.9 }}
					className="header font-bold text-4xl  md:text-5xl text-center  text-zinc-900/90   font-display  tracking-tight w-fit uppercase">
						about us
					
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 1 }}
					className="text-lg text-zinc-900/50 mt-6 max-w-2xl mx-auto text-right">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
						sequi voluptate soluta, aliquam praesentium dolore suscipit quasi
						error obcaecati? Velit, quod quaerat minus enim placeat qui iste
						odit perferendis molestias!
				</motion.p>
				</div>
			
				
					<div className="carousel w-1/2  md:w-1/4 order-2 md:order-2 flex items-center">
					<Carousel className="w-full h-full object-cover">
						<CarouselContent className="flex items-center">
							{AboutUsImages.map((imgUrl, index) => (
								<CarouselItem key={index}>
									<Image
										src={imgUrl.src}
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
				</div>
					</div>
			</section>
		</>
	);
}

export default AboutUs;

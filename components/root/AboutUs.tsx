"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";
import { Separator } from "../ui/separator";
import Draggable from 'react-draggable'; 
const slideData = [
	"https://images.pexels.com/photos/6379672/pexels-photo-6379672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/18537377/pexels-photo-18537377/free-photo-of-child-on-inflatable-castle-with-slide.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/3588079/pexels-photo-3588079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function AboutUs() {
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
						מי אנחנו?
					</h2>
					<Draggable>
					<div>
						ורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין -
						טקסט או גיבריש - ומיועד להיות ממוקם בסקיצות עיצוביות - של עלונים,
						מגזינים, מודעות, אתרי אינטרנט וכו{" "}
					</div>
					</Draggable>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="carousel w-1/2  md:w-1/4 order-2 md:order-2 flex items-center">
					<Carousel className="w-full h-full object-cover">
						<CarouselContent className="flex items-center">
							{slideData.map((_, index) => (
								<CarouselItem key={index}>
									<Image
										src={`${_}`}
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

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

const slideData = [
	"https://images.pexels.com/photos/6379672/pexels-photo-6379672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/18537377/pexels-photo-18537377/free-photo-of-child-on-inflatable-castle-with-slide.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/3588079/pexels-photo-3588079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function AboutUs() {
	return (
		<>
			<section className="about w-[80%] m-auto p-4 flex flex-col md:flex-row lg:justify-between justify-center items-center min-h-[90vh] mt-20 lg:mt-2">
				<motion.div
					className="content w-full lg:w-1/2 order-1 md:order-1"
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}>
					<h2 className="header text-4xl font-bold text-foreground mb-4">
						מי אנחנו?
					</h2>
					<p>
						ורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים גם דמי
						טקסט או גיבריש - ומיועד להיות ממוקם בסקיצות עיצוביות - של עלונים,
						מגזינים, מודעות, אתרי אינטרנט וכו
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="carousel w-full lg:w-1/3 md:w-1/4 order-2 md:order-2">
					<Carousel>
						<CarouselContent className="flex items-center">
							{slideData.map((_, index) => (
								<CarouselItem key={index}>
									<Image src={`${_}`} alt="pic" width={300} height={300} className="max-h-[500px] max-w[300px]"/>
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

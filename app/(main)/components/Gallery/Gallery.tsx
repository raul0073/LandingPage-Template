"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Parallax } from "react-next-parallax";

function Gallery() {
	return (
		<section className="gallery w-full py-24">
			<div className="container mx-auto flex flex-col">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 0.9 }}
					className="header font-bold mx-auto text-4xl  md:text-5xl text-center  text-zinc-900/90   font-display  tracking-tight w-fit uppercase">
					gallery
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 1 }}
					className="text-lg text-zinc-900/50 mt-6 max-w-xl mx-auto text-center">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil iste
					optio similique?
				</motion.p>

				<div className="gallery w-full relative grid grid-cols-2 md:grid-cols-3  gap-4 py-20">
					{Array.from({ length: 6 }).map((_, index) => {
						return (
							<Parallax
								key={index}
								className={`${
									index === 1
										? "w-full my-4 transition-transform mx-1 "
										: "w-full my-4 transition-transform mx-1"
								}`}
								style={{
									transitionDuration: "0.5s",
									animationDelay: `${index + 1}s`,
									transitionTimingFunction: "ease-in-out",
								}}>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: Number(`0.${index + 1}`),
									}}
									className="relative w-full">
									<Image
										src={
											"https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										}
										width={800}
										height={800}
										className="object-cover"
										alt="_parallax"/>
								</motion.div>
							</Parallax>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Gallery;

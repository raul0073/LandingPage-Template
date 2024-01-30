"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Parallax } from "react-next-parallax";

function Gallery() {
	return (
		<div className="w-full bg-primary">
		<div className="flex w-[90%] items-center m-auto flex-col justify-evenly my-20">
			<motion.div
				initial={{ x: -50 }}
				whileInView={{ x: 0 }}
				transition={{ duration: 0.4 }}>
				<h2 className="header text-4xl  text-white font-bold text-foreground mb-4">
					בלאגן של תמונות
				</h2>
			</motion.div>
			<div className="gallery w-full relative grid grid-cols-12  gap-4">
				{Array.from({ length: 6 }).map((_, index) => {
					return (
						
							<Parallax
								key={index}
								className="w-full col-span-12 md:col-span-3 my-4 transition-transform mx-1"
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
									className="object-cover h-[300px] [&>img]:absolute [&>img]:inset-0 [&>img]:object-cover flex justify-center items-center">
									<Image
										src={
											"https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										}
										width={400}
										height={300}
										className=" w-auto h-full"
										alt="_parallax"></Image>
								</motion.div>
							</Parallax>
						
					);
				})}
			</div>
		</div>
		</div>
	);
}

export default Gallery;

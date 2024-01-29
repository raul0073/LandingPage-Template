"use client";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
const cardsData = [
	{
		name: "package name",
		desc: "items + transport",
		price: 399,
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis odio facilis pariatur! Quis dolorum assumenda tempora accusamus commodi sapiente a sed, cum nam quibusdam illo. Voluptas molestias debitis placeat esse.",
		img: "https://image.smythstoys.com/zoom/126338.jpg",
	},
	{
		name: "package name",
		desc: "items + transport",
		price: 399,
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis odio facilis pariatur! Quis dolorum assumenda tempora accusamus commodi sapiente a sed, cum nam quibusdam illo. Voluptas molestias debitis placeat esse.",
		img: "https://image.smythstoys.com/zoom/126338.jpg",
	},
	{
		name: "package name",
		desc: "items + transport",
		price: 399,
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis odio facilis pariatur! Quis dolorum assumenda tempora accusamus commodi sapiente a sed, cum nam quibusdam illo. Voluptas molestias debitis placeat esse.",
		img: "https://image.smythstoys.com/zoom/126338.jpg",
	},
];
function Services() {
	return (
		<>
		<section className="services w-full flex flex-col justify-center items-center lg:w-[80%] lg:m-auto my-40 min-h-[90vh]">
			<motion.div
				initial={{ opacity: 0, scale: 0.1 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="w-[80%] intro flex justify-center flex-col items-center mb-12 mt-12 lg:w-[50%]">
				<h2 className="header text-4xl font-bold text-foreground mb-8 text-gray-500">
					השירותים שלנו
				</h2>
				<p className="text-pretty text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio
					commodi veniam eum, ut blanditiis aut, placeat ratione veritatis quam
					libero sapiente earum ex dolores sed magnam perferendis exercitationem
					minus! Incidunt enim dicta sed voluptatum excepturi ipsum voluptate
					eum veniam est corrupti, quibusdam vitae consequatur aliquam fugiat
					laboriosam, asperiores architecto!
				</p>
			</motion.div>
			<div className="servicesCards grid w-[80%] md:grid-cols-2 lg:grid-cols-3 mt-8 m-auto gap-12">
				{cardsData.map((item, index) => {
					return (
						<motion.div
							className="flex items-center justify-center"
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.5 }}
							whileHover={{ scale: 1.05 }}
							key={index}>
							<Card className="w-full flex-row shadow-md shadow-primary-foreground">
								<CardHeader className="p-0 ">
									<Image
										src={item.img}
										alt="inflatable_pic"
										width={300}
										height={300}
										className="w-full object-cover rounded-t-md"></Image>
								</CardHeader>
								<CardHeader>
									<CardTitle>{item.name}</CardTitle>
									<CardDescription>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Commodi, ullam.
									</CardDescription>
								</CardHeader>
								<CardContent className="w-full flex flex-col items-center lg:flex-row ">
									<p className="w-full mb-4">{item.content}</p>
								</CardContent>
								<CardFooter className="flex flex-row w-full justify-between">
									<p>{`${item.price} ש"ח`} </p>
									<Button>הזמן עכשיו</Button>
								</CardFooter>
							</Card>
						</motion.div>
					);
				})}
			</div>
			
		</section>
		<Separator className="my-20" />
		</>
	);
}

export default Services;

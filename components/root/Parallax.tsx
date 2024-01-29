"use client";
import Image from "next/image";
import React from "react";
import { Parallax } from "react-next-parallax";
import { motion } from "framer-motion";

function ParallaxComp() {
	return (
		<Parallax className="w-[90%] h-[500px] lg:w-full">
			<div className="relative w-full object-cover h-[600px] [&>img]:absolute [&>img]:inset-0">
				<Image
					src={
						"https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					width={1980}
					height={500}
					alt="_parallax"></Image>
			</div>
		</Parallax>
	);
}

export default ParallaxComp;

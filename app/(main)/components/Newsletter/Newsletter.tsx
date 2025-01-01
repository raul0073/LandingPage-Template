"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

function Newsletter() {
	return (
		<section className="py-24 w-full bg-gradient-to-b from-bluish to-pinkish/70 relative overflow-clip ">
			<div className="absolute w-96 h-96 -top-24 right-1/2  bg-gradient-to-t from-pinkish to-pinkish/60 blur-3xl rounded-full opacity-20"></div>
			<div className="container min-h-[40vh]">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 0.9 }}
					className="header font-bold mx-auto text-4xl  md:text-5xl text-center  text-pastel/90   font-display  tracking-tight w-fit uppercase">
					join our newsletter
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 1 }}
					className="text-lg text-zinc-900/50 mt-4 max-w-xl mx-auto text-center">
					Lorem ipsum dolor sit amet consectetur.
				</motion.p>

				<div className="w-1/3 h-fit mt-12 relative mx-auto">
					<Input className="py-6 rounded-full border border-white/10 bg-zinc-700 text-xl text-primary px-4" />
					<Button className="py-6 absolute left-0 top-0 rounded-full bg-zinc-800 border border-white/10">
						{" "}
						<ArrowLeftIcon />
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Newsletter;

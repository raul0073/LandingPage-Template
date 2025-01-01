'use client'
import { motion } from "framer-motion";
function ContactUs() {
	return (
		<section className="py-24 w-full h-[60vh] bg-gradient-to-b from-pinkish/70 to-transparent">
			<div className="container">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 0.9 }}
					className="header font-bold mx-auto text-4xl  md:text-5xl text-center  text-zinc-900/90   font-display  tracking-tight w-fit uppercase">
					Contact Us
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 1 }}
					className="text-lg text-zinc-900/50 mt-6 max-w-xl mx-auto text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, cupiditate.
				</motion.p>
			</div>
		</section>
	);
}

export default ContactUs;

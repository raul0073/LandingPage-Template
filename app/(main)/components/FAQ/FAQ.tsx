"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
const faqList = [
	{
		q: "האם ניתן לשלם באשראי?",
		a: "בטח שאפשר. דברו איתנו דחוף",
	},
	{
		q: "האם ניתן לשלם באשראי?",
		a: "בטח שאפשר. דברו איתנו דחוף",
	},
	{
		q: "האם ניתן לשלם באשראי?",
		a: "בטח שאפשר. דברו איתנו דחוף",
	},
	{
		q: "האם ניתן לשלם באשראי?",
		a: "בטח שאפשר. דברו איתנו דחוף",
	},
	{
		q: "האם ניתן לשלם באשראי?",
		a: "בטח שאפשר. דברו איתנו דחוף",
	},
	{
		q: "האם ניתן לשלם באשראי?",
		a: "בטח שאפשר. דברו איתנו דחוף",
	},
];

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const itemStyle = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};
function FAQ() {
	return (
		<section className="faq w-full py-24 ">
			<div className="container lg:w-2/3 lg:m-auto lg:justify-center p-4 flex flex-col justify-center items-center min-h-[90vh] mt-4">
			<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 0.9 }}
					className="header font-bold mx-auto text-4xl  md:text-5xl text-center  text-zinc-900/90   font-display  tracking-tight w-fit uppercase">
					FAQ
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 1 }}
					className="text-lg text-zinc-900/50 mt-6 max-w-xl mx-auto text-center">
					Lorem ipsum dolor sit amet.
				</motion.p>
				<motion.div
					className="container p-0 py-20"
					variants={container}
					initial="hidden"
					whileInView={"visible"}>
					<Accordion type="single" collapsible className="w-full">
						{faqList.map((item, index) => {
							return (
								<motion.div
									key={index}
									className="item px-1 py-1"
									variants={itemStyle}>
									<AccordionItem value={`item-${index}`}>
										<AccordionTrigger>{item.q}</AccordionTrigger>
										<AccordionContent className="text-primary">
											{item.a}
										</AccordionContent>
									</AccordionItem>
								</motion.div>
							);
						})}
					</Accordion>
				</motion.div>
			</div>
		</section>
	);
}

export default FAQ;

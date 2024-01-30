"use client";
import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { animate, motion } from "framer-motion";
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
	}
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
		<section className="faq w-full lg:w-2/3 lg:m-auto lg:justify-center p-4 flex flex-col justify-center items-center min-h-[90vh] mt-4">
			<h2 className="header text-4xl font-bold text-foreground mb-12">
				{" "}
				שאלות קיטבג
			</h2>
			<motion.div
				className="container p-0"
				variants={container}
				initial="hidden"
				whileInView={"visible"}>
				<Accordion type="single" collapsible className="w-full">
					{faqList.map((item, index) => {
						return (
							<motion.div key={index} className="item px-1 py-1" variants={itemStyle}>
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
		</section>
	);
}

export default FAQ;

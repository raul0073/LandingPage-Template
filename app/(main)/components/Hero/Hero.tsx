"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "./styles/hero.scss";
import Link from "next/link";

export default function Hero() {
	const router = useRouter();
	return (
		<section className="hero w-full bg-bluish">
			<div className="container h-fit flex justify-center items-center min-h-[100vh] max-w-3xl">
	
				<div className="content">
					<h1 className="text-8xl p-4 text-center font-extrabold text-pastel">
						VALUE
					</h1>
					<p className="text-xl  text-center max-w-xl  text-pastel/70">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
						nobis.
					</p>

					<div className="flex flex-col justify-center lg:flex-row gap-8 mt-8">
						<Button className="py-4 px-6 rounded-full" variant={'outline'}>
						<Link href={'#'} className="py-4 px-6">
								ACTION
							</Link>
						</Button>
						<Button className="py-4 px-6 rounded-full bg-red-600" variant={'default'}>
							<Link href={'#'} className="py-4 px-6">
								ACTION
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

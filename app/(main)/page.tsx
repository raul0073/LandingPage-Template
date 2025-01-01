import AboutUs from "@/app/(main)/components/AboutUs/AboutUs";
import { Fragment } from "react";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import FAQ from "./components/FAQ/FAQ";
import Newsletter from "./components/Newsletter/Newsletter";
import ContactUs from "./components/ContactUs/ContactUs";

export default async function Home() {
	return (
		<Fragment>
			<Hero />
			<AboutUs />
      <Gallery />
      <FAQ />
	  <Newsletter />
	  <ContactUs />
		</Fragment>
	);
}

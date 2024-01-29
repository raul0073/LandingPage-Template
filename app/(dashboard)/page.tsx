
import AboutUs from "@/components/root/AboutUs";
import FAQ from "@/components/root/FAQ";
import ParallaxComp from "@/components/root/Parallax";
import ServiceArea from "@/components/root/ServiceArea";
import Services from "@/components/root/Services";

export default async function Home() {
  
  return (<>
    <AboutUs />
    <Services />
    {/* <Testimonials />
    <OrderWizard /> */}
    <ParallaxComp />
    <FAQ />
    <ServiceArea />
  </>)
}
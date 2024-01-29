import { GetAllInflatables } from "@/actions/getInflatables";
import AboutUs from "@/components/root/AboutUs";
import FAQ from "@/components/root/FAQ";
import OrderWizard from "@/components/root/OrderWizard";
import ParallaxComp from "@/components/root/Parallax";
import ServiceArea from "@/components/root/ServiceArea";
import Services from "@/components/root/Services";
import Testimonials from "@/components/root/Testimonials";

export default async function Home() {
  const data = await GetAllInflatables()


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
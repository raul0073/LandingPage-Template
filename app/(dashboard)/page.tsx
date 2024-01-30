
import AboutUs from "@/components/root/AboutUs";
import FAQ from "@/components/root/FAQ";
import Gallery from "@/components/root/Gallery";
import ServiceArea from "@/components/root/ServiceArea";
import Services from "@/components/root/Services";

export default async function Home() {
  
  return (<>
    <AboutUs />
    <Services />
    <Gallery />
    <FAQ />
    <ServiceArea />
  </>)
}
import Footer from "@/components/root/Footer";
import Hero from "@/components/root/Hero";
import Navbar from "@/components/root/Navbar";
import VideoBg from "@/components/root/VideoBg";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-full bg-background max-h-full">
        <div className="vidWrapper min-h-[100vh] relative">
          <VideoBg />
          <div className="contentWrapper w-full absolute left-0 top-0 ">
            <nav>
              <Navbar />
            </nav>
            <Hero />
          </div>
        </div>
        <main className="main min-h-[80vh] w-full flex m-auto mb-8 flex-col">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;

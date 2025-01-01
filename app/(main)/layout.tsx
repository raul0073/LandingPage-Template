import { Fragment, ReactNode } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navigation/Navbar";

function Layout({ children }: { children: ReactNode }) {
	return (
		<Fragment>
			<Navbar />
			<main className="bg-pastel w-full">{children}</main>

			<Footer />
		</Fragment>
	);
}

export default Layout;

import Footer from "@components/footer/Footer";
import Navbar from "@components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Plantilla = () => {
	return (
		<>
			<Navbar />
			<Outlet />
            <Footer />
		</>
	);
};

export default Plantilla;

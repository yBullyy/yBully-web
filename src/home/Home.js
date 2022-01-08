import React from "react";
import Explore from "./components/Explore";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";

const Home = () => (
	// Navbar STart
	<div>
		<Navbar />
			<Banner />
			<Features />
			<Explore />
			<Team />
			<ContactUs />
        <Footer />
	</div>
);

export default Home;

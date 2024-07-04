import { SpeedInsights } from "@vercel/speed-insights/next";

import { Inter } from "next/font/google";
import Header from "@/components/header/Header";

import "./globals.css";
import './css/all.css'

export const metadata = {
	title: "BlissBrew",
	description:
		"A cozy coffee shop in downtown where you can enjoy high-quality beverages and snacks in a relaxing environment.",
};

const RootLayout = ({ children }) => {
  return (
		<html lang="en">
			<body id="home">
				<Header navigations={["about", "menu", "contact"]}/>
				{children}
				<SpeedInsights />
			</body>
		</html>
  );
}

export default RootLayout;

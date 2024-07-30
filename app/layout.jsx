import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import './css/all.css'

import Header from "@/components/header/Header";

import { Inter } from "next/font/google";
const inter = Inter({subsets: ["latin"], weight: ["300"]})

export const metadata = {
	title: "BlissBrew",
	description:
		"A cozy coffee shop in downtown where you can enjoy high-quality beverages and snacks in a relaxing environment.",
};

const RootLayout = ({ children }) => {
  return (
		<html lang="en">
			<body
				id="home"
				className={inter.className}
			>
				<Header navigations={["about", "menu", "contact"]} />
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
  );
}

export default RootLayout;

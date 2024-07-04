import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "BlissBrew",
	description:
		"A cozy coffee shop in downtown where you can enjoy high-quality beverages and snacks in a relaxing environment.",
};

const RootLayout = ({ children }) => {
  return (
		<html lang="en">
			<body className={inter.className}>
				<Header navigations={["about", "menu", "contact", "shop"]}>
					BlissBrew
				</Header>
				{children}
				<SpeedInsights />
			</body>
		</html>
  );
}

export default RootLayout;

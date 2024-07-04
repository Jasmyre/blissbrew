import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
	return (
		<section className={styles.hero_section}>
			<div className={styles.hero_wrapper}>
				<h1 className="averia-serif-libre-bold">
					Every Sip is a Moment of Bliss
				</h1>
				<p className="cinzel">
					A cozy coffee shop in downtown where
					you can enjoy high-quality beverages and snacks in a
					relaxing environment.
				</p>
			</div>
		</section>
	);
};

export default HeroSection;

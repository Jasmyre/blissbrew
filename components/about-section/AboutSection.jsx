import React from "react";
import styles from "./AboutSection.module.css";
import Button from "../button/Button";
import Image from "next/image";

const AboutSection = () => {
	return (
		<section className={styles.about_section} id="about">
			<div className={styles.about_wrapper}>
				<div className={styles.content_wrapper}>
					<div className={styles.content_text_wrapper}>
						<h1 className="averia-serif-libre-bold">
							Welcome to BlissBrew
						</h1>
						<p className="averia-serif-libre-regular">
							BlissBrew is a cozy and welcoming coffee shop
							located in the heart of downtown. We offer a wide
							variety of coffee blends, teas, and freshly baked
							pastries, creating a relaxing environment for coffee
							enthusiasts, students, and remote workers to enjoy
							high-quality beverages and snacks.
						</p>
					</div>
					<div className={styles.content_button_wrapper}>
						<Button href="#about">Learn More &gt;</Button>
					</div>
				</div>
				<div className={styles.image_wrapper}>
                    <Image
                        src="/about_image.png"
                        alt="about_image"
                        width={375}
                        height={375}
                        priority
                    ></Image>
                </div>
			</div>
		</section>
	);
};

export default AboutSection;

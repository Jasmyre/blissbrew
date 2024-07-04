import React from "react";
import PropTypes from "prop-types";

import styles from "./TestimonialSection.module.css";

import Feedback from "../feedback/Feedback";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const TestimonialSection = (props) => {
	return (
		<div className={styles.testimonial_section}>
			<div className={styles.testimonial_wrapper}>
				<div className={styles.testimonial_header}>
					<h1 className="averia-serif-libre-bold">
						{props.children}
					</h1>
				</div>
				<div className={styles.testimonial_content}>
					<div className={styles.testimonial_column}>
						<Feedback testimonial="BlissBrew is my go-to spot for a morning pick-me-up! The atmosphere is cozy and inviting, and their vanilla latte is the best I've ever had. The staff is always friendly and makes me feel right at home.">
							Sarah L.
						</Feedback>
						<Feedback testimonial="The ambiance at BlissBrew is just perfect for unwinding after a long day. I especially enjoy their monthly events like open mic nights. It's a great way to meet new people and enjoy some great coffee.">
							David K.
						</Feedback>
					</div>

					<div
						className={`${styles.testimonial_column} ${inter.className}`}
					>
						<Feedback testimonial="BlissBrew's pastries are to die for! I can't get enough of their freshly baked croissants and muffins. Pair that with a classic espresso, and it's the perfect start to my day. Highly recommend this place!">
							Jessica M.
						</Feedback>
						<Feedback testimonial="Every visit to BlissBrew is a delight. The staff is incredibly attentive, and the coffee is consistently top-notch. I recently tried their pumpkin spice latte, and it exceeded all my expectations. This place is a gem!">
							James T.
						</Feedback>
					</div>

					<div className={styles.testimonial_column}>
						<Feedback testimonial="I love coming to BlissBrew to work on my projects. The free Wi-Fi and comfortable seating make it the perfect place to be productive. Plus, their cold brew is absolutely fantastic-smooth and refreshing!">
							Mark R.
						</Feedback>
						<Feedback testimonial="The ambiance at BlissBrew is just perfect for unwinding after a long day. I especially enjoy their monthly events like open mic nights. It's a great way to meet new people and enjoy some great coffee.">
							Emely S.
						</Feedback>
					</div>
				</div>
			</div>
		</div>
	);
};

TestimonialSection.PropTypes = {
	children: PropTypes.children,
};

export default TestimonialSection;

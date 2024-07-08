"use client";

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { gsap } from "gsap/all";

import styles from "./Feedback.module.css";

const Feedback = (props) => {
	const ref = useRef(null);

	useEffect(() => {
		const element = ref.current;

		const handleCursurEnter = () => {
			gsap.to(element, { scale: 1.050, duration: 0.3, zIndex: 2, stagger: 1 });
		}

		const handleCursurExit = () => {
			gsap.to(element, { scale: 1, duration: 0.3, zIndex: 1, stagger: 1 });
		}

		element.addEventListener("mouseenter", handleCursurEnter)
		element.addEventListener("mouseleave", handleCursurExit)

		return () => {
			element.removeEventListener("mouseenter", handleCursurEnter);
			element.removeEventListener("mouseleave", handleCursurExit);
		}
	}, []);

	return (
		<div
			className={styles.feedback_wrapper}
			ref={ref}
		>
			<div className={styles.star_wrapper}>
				<Image
					src="/star.svg"
					alt="star"
					width={32}
					height={32}
					priority
				/>
				<Image
					src="/star.svg"
					alt="star"
					width={32}
					height={32}
					priority
				/>
				<Image
					src="/star.svg"
					alt="star"
					width={32}
					height={32}
					priority
				/>
				<Image
					src="/star.svg"
					alt="star"
					width={32}
					height={32}
					priority
				/>
				<Image
					src="/star.svg"
					alt="star"
					width={32}
					height={32}
					priority
				/>
			</div>
			<div className={styles.text_wrapper}>
				<p>"{props.testimonial}"</p>
			</div>
			<div className={styles.client_info_wrapper}>
				<div className={styles.avatar_wrapper}>
					<Image
						src="/avatar.svg"
						alt="avatar"
						width={32}
						height={32}
						priority
					/>
				</div>
				{props.children}
			</div>
		</div>
	);
};

Feedback.PropTypes = {
	children: PropTypes.children,
	testimonial: PropTypes.string.isRequired,
};

export default Feedback;

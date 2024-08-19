import React from "react";
import PropTypes from "prop-types";

import Button from "../button/Button";

import styles from "./ContactSection.module.css";

const ContactSection = (props) => {
	return (
		<div
			className={styles.contact_section}
			id="contact"
		>
			<div className={styles.contact_wrapper}>
				<div className={styles.contact_info_wrapper}>
					<h1 className="averia-serif-libre-bold">
						{props.children}
					</h1>
					<p>
						<i className="fa-solid fa-envelope"></i>
						<span>blissbrew@gmail.com</span>
					</p>
					<p>
						<i className="fa-solid fa-phone"></i>
						<span>+1 (555) 123-4567</span>
					</p>
					<p>
						<i className="fa-solid fa-location-dot"></i>
						<span>123 Sample St, Anytown, USA</span>
					</p>
				</div>
				<form
					action=""
					className={styles.form}
				>
					<div className={styles.form_wrapper}>
						<div className={styles.form_name}>
							<label htmlFor="name-input">Name:</label>
							<input
								type="text"
								id="name-input"
								name="name"
								required
							/>
						</div>
						<div className={styles.form_email}>
							<label htmlFor="email-input">Email:</label>
							<input
								type="email"
								id="email-input"
								name="email"
								required
							/>
						</div>
						<div className={styles.form_message}>
							<label htmlFor="message">Message:</label>
							<textarea
								id="message"
								name="message"
								required
							></textarea>
						</div>
						<div
							className={styles.form_button}
							type="submit"
						>
							<Button>Submit &gt;</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

ContactSection.PropTypes = {
	children: PropTypes.children,
};

export default ContactSection;

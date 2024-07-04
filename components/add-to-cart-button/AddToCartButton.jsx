import React from "react";
import styles from "./AddToCartButton.module.css";
import PropTypes from "prop-types";

const AddToCartButton = (props) => {
	return (
		<a
			href={props.href}
			className={styles.add_to_cart_button}
		>
			{props.children}
		</a>
	);
};

AddToCartButton.PropTypes = {
	href: PropTypes.string,
	children: PropTypes.element,
};

export default AddToCartButton;

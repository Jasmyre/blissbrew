import React from "react";
import PropTypes from "prop-types";

import styles from "./Logo.module.css";

const Logo = (props) => {
	const color = props.color;

	return (
		<a
			href="/"
			className={color == "white" ? styles.white : styles.theme}
		>
			<p>BlissBrew</p>
		</a>
	);
};

Logo.PropTypes = {
	color: PropTypes.string,
};

export default Logo;

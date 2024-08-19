import React from "react";
import styles from "./ProductSection.module.css";
import ProductCard from "../product-card/ProductCard";
import Button from "../button/Button";
import PropTypes from "prop-types";

const ProductSection = (props) => {
	const products = props.products.map((info, i) => {
		const name = info.name;
		const price = info.price;
		const src = info.src;
		const description = info.description;
		return (
			<ProductCard
			    key={i}
				name={name}
				price={price}
				src={src}
				description={description}
			/>
		);
	});

	return (
		<div className={styles.product_section} id="menu">
			<div className={styles.product_wrapper}>
				<div className={styles.product_header}>
					<h3>Products</h3>
					<Button>View all</Button>
				</div>
				<div className={styles.product_list}>{products}</div>
			</div>
		</div>
	);
};

ProductSection.PropTypes = {
	products: PropTypes.array.isRequired,
};

export default ProductSection;

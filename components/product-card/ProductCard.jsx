import React from "react";
import Image from "next/image";
import AddToCartButton from "../add-to-cart-button/AddToCartButton";
import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";

const ProductCard = (props) => {
	return (
		<div className={styles.product_card}>
			<div className={styles.product_img}>
				<Image
					src={props.src}
					alt={props.name}
					width={150}
					height={150}
				/>
			</div>
			<div className={styles.product_info}>
				<div className={styles.card_name}>
					<h3 className="averia-serif-libre-bold">{props.name}</h3>
					<p>{props.description}</p>
				</div>
				<div className={styles.card_btn}>
					<p>${props.price}</p>
					<AddToCartButton
						href="#menu"
						type="add_to_cart"
					>
						Add to cart
					</AddToCartButton>
				</div>
			</div>
		</div>
	);
};

ProductCard.PropTypes = {
	name: PropTypes.string,
	price: PropTypes.number,
	src: PropTypes.string,
	description: PropTypes.string,
};

export default ProductCard;

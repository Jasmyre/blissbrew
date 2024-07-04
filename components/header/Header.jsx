import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

import PropTypes from "prop-types";
import Button from "../button/Button";
import Logo from "../logo/Logo";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

let isHamburgerClicked = false;

const Header = (props) => {
	const navigations = props.navigations.map((nav) => {
		return (
			<li key={nav}>
				<a
					href={`#${nav}`}
					className={styles.a}
				>
					<span>{nav}</span>
				</a>
			</li>
		);
	});

	return (
		<div className={styles.header_container}>
			<header className={styles.header}>
				<div className={styles.logo}>
					<a href="/">
						<Image
							src="/logo.svg"
							alt="Logo"
							width={30}
							height={30}
							priority
						/>
						<p>BlissBrew</p>
					</a>
				</div>
				<nav className={styles.nav}>
					<input
						type="checkbox"
						id="burger"
						name="burger"
					/>
					<label
						className={styles.burger}
						htmlFor="burger"
					>
						<span></span>
						<span></span>
						<span></span>
					</label>
					<ul>
						<li>
							<a
								href="#home"
								className={styles.a}
							>
								<span>Home</span>
							</a>
						</li>
						{navigations}
						<li>
							<Button href="/">Order Online</Button>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

Header.PropTypes = {
	navigations: PropTypes.array.isRequired,
};

export default Header;

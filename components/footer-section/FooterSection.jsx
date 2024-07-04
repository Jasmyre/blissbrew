import React from 'react'

import Logo from '../logo/Logo'
import Navigation from '../navigation/Navigation'

import styles from './FooterSection.module.css'

const FooterSection = () => {
  return (
		<div className={styles.footer_section}>
			<div className={styles.upper_wrapper}>
				<div className={styles.logo_wrapper}>
					<Logo />
				</div>
				<div className={styles.nav_wrapper}>
					<Navigation
						navigations={["about", "menu", "contact"]}
					/>
				</div>
				<div className={styles.social_wrapper}>
					<i class="fa-brands fa-square-facebook"></i>
					<i class="fa-brands fa-square-instagram"></i>
					<i class="fa-brands fa-square-x-twitter"></i>
					<i class="fa-brands fa-linkedin"></i>
					<i class="fa-brands fa-square-youtube"></i>
				</div>
			</div>
			<div className={styles.lower_wrapper}>
				<p>&copy; 2024 BlisBrew. All Rights Reserved.</p>
			</div>
		</div>
  );
}

export default FooterSection
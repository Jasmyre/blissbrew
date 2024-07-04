import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import styles from './Feedback.module.css'

const Feedback = (props) => {
  return (
		<div className={styles.feedback_wrapper}>
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
			<div className={styles.text_wrapper}>"{props.testimonial}"</div>
			<div className={styles.client_info_wrapper}>
                <div className={styles.avatar_wrapper}>
                    <Image src="/avatar.svg" alt="avatar" width={32} height={32} priority/>
                </div>
                {props.children}
            </div>
		</div>
  );
}

Feedback.PropTypes = {
    children: PropTypes.children,
    testimonial: PropTypes.string.isRequired
}

export default Feedback
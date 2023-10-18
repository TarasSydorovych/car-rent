import React from 'react';
import img1 from '../../../../img/auto1.webp';
import css from './aboutUs.module.css';
const ActualImage = () => {
	return (
		<img
			src={img1}
			className={css.abouttPic}
			alt='Про компанію CarRentUkraine'
		/>
	);
};

export default ActualImage;

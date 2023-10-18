import React from 'react';
import pic from '../../../../img/slide1.webp';
import css from './firstBlock.module.css';
const ActualPhoto = () => {
	return <img src={pic} className={css.fullPic} alt='rentautoukraine' />;
};

export default ActualPhoto;

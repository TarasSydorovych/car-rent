import React from 'react';

import { useTranslation, Trans } from 'react-i18next';

import css from './notFound.module.css';
import { Link } from 'react-router-dom';
import HeaderAll from '../ua/header/headerAll';
const NotFound = ({ setSelectedCurrency, selectedCurrency }) => {
	const { t, i18n } = useTranslation();
	return (
		<>
			<div className={css.containerHeader}>
				<HeaderAll
					setSelectedCurrency={setSelectedCurrency}
					selectedCurrency={selectedCurrency}
				/>
				<div className={css.wrapFour}>
					<h1 className={css.h1Fo}>404</h1>
					<p className={css.pFor}>{t('description.part1.mainPage.fourFo')}</p>
					<Link className={css.relocateTo} to='/'>
						{t('description.part1.mainPage.returnTo')}
					</Link>
				</div>
			</div>
		</>
	);
};

export default NotFound;

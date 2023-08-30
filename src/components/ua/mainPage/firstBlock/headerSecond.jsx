import React, { useState, useEffect } from 'react';
import css from './firstBlock.module.css'; // Підключіть ваш файл з CSS модулями
import { Link } from 'react-router-dom';

export default function HeaderSecond() {
	const [headerSticky, setHeaderSticky] = useState(false);

	const handleScroll = () => {
		if (window.scrollY >= 50) {
			setHeaderSticky(true);
		} else {
			setHeaderSticky(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`${css.transparentHeader} ${headerSticky ? css.sticky : ''}`}
		>
			<div className={css.seconHeaderWr}>
				<div className={css.seconHeaderWrFl}>
					<ul className={css.listStyle}>
						<li className={css.listLi}>Автопарк</li>

						<li className={css.listLi}>Послуги</li>

						<li className={css.listLi}>Про нас</li>

						<li className={css.listLi}>Контакти</li>
					</ul>
					<div className={css.languageWrapP}>
						<p className={css.languageP}>UA</p>
						<p className={css.languageP}>EN</p>
					</div>
					<h2 className={css.logo}>
						Car<span className={css.logoSpan}>Rent</span>Ukraine
					</h2>
				</div>
			</div>
		</div>
	);
}

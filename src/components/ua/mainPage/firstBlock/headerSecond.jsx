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
						<li className={css.listLi}>
							<Link className={css.listLi} to='/'>
								Головна
							</Link>
						</li>
						<li className={css.listLi}>
							<Link className={css.listLi} to='/category'>
								Автопарк
							</Link>
						</li>
						<li className={css.listLi}>
							<Link className={css.listLi} to='/services'>
								Послуги
							</Link>
						</li>
						<li className={css.listLi}>
							<Link className={css.listLi} to='/about'>
								Про нас
							</Link>
						</li>
						<li className={css.listLi}>
							<Link className={css.listLi} to='/contact'>
								Контакти
							</Link>
						</li>
					</ul>
					<div className={css.languageWrapP}>
						<p className={css.languageP}>UA</p>
						<p className={css.languageP}>EN</p>
					</div>
					<Link className={css.logo} to='/'>
						<h2 className={css.logo}>
							Car<span className={css.logoSpan}>Rent</span>Ukraine
						</h2>
					</Link>
				</div>
			</div>
		</div>
	);
}

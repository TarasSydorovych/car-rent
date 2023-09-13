import React, { useState, useEffect } from 'react';
import css from './firstBlock.module.css'; // Підключіть ваш файл з CSS модулями
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
export default function HeaderSecond({ windowDimensions }) {
	const { t, i18n } = useTranslation();
	const [headerSticky, setHeaderSticky] = useState(false);
	const [burgerCLick, setBurgerCLick] = useState(false);
	const handleScroll = () => {
		if (window.scrollY >= 50) {
			setHeaderSticky(true);
		} else {
			setHeaderSticky(false);
		}
	};
	const openBurgerMenu = () => {
		setBurgerCLick(true);
	};
	const closeBurgerMenu = () => {
		setBurgerCLick(false);
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const cahangeUkr = () => {
		i18n.changeLanguage('ua');
	};
	const cahangeEn = () => {
		i18n.changeLanguage('en');
	};
	return (
		<div
			className={`${css.transparentHeader} ${headerSticky ? css.sticky : ''}`}
		>
			{windowDimensions && (
				<div className={css.seconHeaderWr}>
					<div className={css.seconHeaderWrFl}>
						<ul className={css.listStyle}>
							<li className={css.listLi}>
								<Link className={css.listLi} to='/'>
									{t('description.part1.headerFirst.main')}
								</Link>
							</li>
							<li className={css.listLi}>
								<Link className={css.listLi} to='/category'>
									{t('description.part1.headerFirst.auto')}
								</Link>
							</li>
							<li className={css.listLi}>
								<Link className={css.listLi} to='/services'>
									{t('description.part1.headerFirst.serv')}
								</Link>
							</li>
							<li className={css.listLi}>
								<Link className={css.listLi} to='/about'>
									{t('description.part1.headerFirst.about')}
								</Link>
							</li>
							<li className={css.listLi}>
								<Link className={css.listLi} to='/contact'>
									{t('description.part1.headerFirst.inf')}
								</Link>
							</li>
						</ul>
						<div className={css.languageWrapP}>
							<p className={css.languageP} onClick={cahangeUkr}>
								UA
							</p>
							<p className={css.languageP} onClick={cahangeEn}>
								EN
							</p>
						</div>
						<Link className={css.logo} to='/'>
							<h2 className={css.logo}>
								Car<span className={css.logoSpan}>Rent</span>Ukraine
							</h2>
						</Link>
					</div>
				</div>
			)}
			{!windowDimensions && (
				<>
					<Link className={css.logo} to='/'>
						<h2 className={css.logo}>
							Car<span className={css.logoSpan}>Rent</span>Ukraine
						</h2>
					</Link>
					<RxHamburgerMenu
						onClick={openBurgerMenu}
						className={css.rxHamburgerMenu}
					/>
					<div className={css.languageWrapP}>
						<p onClick={cahangeUkr} className={css.languageP}>
							UA
						</p>
						<p onClick={cahangeEn} className={css.languageP}>
							EN
						</p>
					</div>
				</>
			)}
			{burgerCLick && (
				<div className={css.burgerMenuWrap}>
					<AiOutlineClose
						onClick={closeBurgerMenu}
						className={css.closeBurgerMenu}
					/>
					<ul className={css.listStyle}>
						<li className={css.listLi}>
							<Link className={css.listLi} to='/'>
								{t('description.part1.headerFirst.main')}
							</Link>
						</li>
						<li className={css.listLi}>
							<Link className={css.listLi} to='/category'>
								{t('description.part1.headerFirst.auto')}
							</Link>
						</li>
						<li className={css.listLi}>
							<Link className={css.listLi} to='/services'>
								{t('description.part1.headerFirst.serv')}
							</Link>
						</li>
						<li className={css.listLi}>
							<Link className={css.listLi} to='/about'>
								{t('description.part1.headerFirst.about')}
							</Link>
						</li>
						<li className={css.listLi}>
							<Link className={css.listLi} to='/contact'>
								{t('description.part1.headerFirst.inf')}
							</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

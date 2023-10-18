import { Link } from 'react-router-dom';
import css from './footer.module.css';
import { useTranslation, Trans } from 'react-i18next';
export default function Footer() {
	const { t, i18n } = useTranslation();
	return (
		<footer className={css.mainFooter}>
			<div className={css.theSameWrap}>
				<h2 className={css.logo}>
					Rent<span className={css.logoSpan}>Auto</span>Ukraine
				</h2>
				<ul className={css.footerNavigation}>
					<li className={css.footerNavLi}>
						<Link className={css.footerNavLi} to='/category'>
							{t('description.part1.footer.auto')}
						</Link>
					</li>
					<li className={css.footerNavLi}>
						<Link className={css.footerNavLi} to='/services'>
							{t('description.part1.footer.serv')}
						</Link>
					</li>
					<li className={css.footerNavLi}>
						<Link className={css.footerNavLi} to='/about'>
							{t('description.part1.footer.about')}
						</Link>
					</li>
					<li className={css.footerNavLi}>
						<Link className={css.footerNavLi} to='/contact'>
							{t('description.part1.footer.inf')}
						</Link>
					</li>
				</ul>
				<ul className={css.footerNavigation}>
					<li className={css.footerNavLi}>
						<a href='tel:+380984549929' className={css.footerNavLi}>
							{t('description.part1.footer.phone')}: +380984549929
						</a>
					</li>
					<li className={css.footerNavLi}>
						Email: rentautoukraine.com@gmail.com
					</li>
					<li className={css.footerNavLi}>
						{t('description.part1.footer.adress')}
					</li>
				</ul>
			</div>
			<div className={css.footerLine}></div>
			<p className={css.webDev}>
				<a
					href='https://webui-studio.com/'
					target='_blanck'
					className={css.webDev}
				>
					Розробка та підтримка WebUi
				</a>
			</p>
		</footer>
	);
}

import css from './footer.module.css';
import { useTranslation, Trans } from 'react-i18next';
export default function Footer() {
	const { t, i18n } = useTranslation();
	return (
		<footer className={css.mainFooter}>
			<div className={css.theSameWrap}>
				<h2 className={css.logo}>
					Car<span className={css.logoSpan}>Rent</span>Ukraine
				</h2>
				<ul className={css.footerNavigation}>
					<li className={css.footerNavLi}>
						{t('description.part1.footer.auto')}
					</li>
					<li className={css.footerNavLi}>
						{t('description.part1.footer.serv')}
					</li>
					<li className={css.footerNavLi}>
						{t('description.part1.footer.about')}
					</li>
					<li className={css.footerNavLi}>
						{t('description.part1.footer.inf')}
					</li>
				</ul>
				<ul className={css.footerNavigation}>
					<li className={css.footerNavLi}>
						{t('description.part1.footer.phone')}: +380930044999
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

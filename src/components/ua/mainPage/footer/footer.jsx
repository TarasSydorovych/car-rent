import css from './footer.module.css';

export default function Footer() {
	return (
		<footer className={css.mainFooter}>
			<div className={css.theSameWrap}>
				<h2 className={css.logo}>
					Car<span className={css.logoSpan}>Rent</span>Ukraine
				</h2>
				<ul className={css.footerNavigation}>
					<li className={css.footerNavLi}>Автопарк</li>
					<li className={css.footerNavLi}>Послуги</li>
					<li className={css.footerNavLi}>Про нас</li>
					<li className={css.footerNavLi}>Контакти</li>
				</ul>
				<ul className={css.footerNavigation}>
					<li className={css.footerNavLi}>Телефон: +380930044999</li>
					<li className={css.footerNavLi}>
						Email: rentautoukraine.com@gmail.com
					</li>
					<li className={css.footerNavLi}>Адрес: Львів, вул. Личаківськ, 1А</li>
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

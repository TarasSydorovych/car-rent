import css from './services.module.css';
export default function BlockDesc() {
	return (
		<section className={css.blockShortDescWrap}>
			<div className={css.blockDescPicWr}></div>
			<div className={css.blockDescTextWr}>
				<h1 className={css.descTextH1}>
					Здача авто в прокат - вигідна можливість для вас
				</h1>
				<p className={css.descTextP}>
					Ласкаво просимо до наших послуги з здачі автомобілів в прокат. Ми
					пропонуємо широкий вибір авто для різних потреб і бюджетів. Наші
					автомобілі завжди готові до подорожей, ділових поїздок та відпусток.
					Роздивіться нашу галерею авто і дізнайтеся більше про переваги
					користування нашою послугою.
				</p>
			</div>
		</section>
	);
}

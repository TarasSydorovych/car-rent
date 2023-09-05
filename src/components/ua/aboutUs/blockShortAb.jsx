import css from './aboutUs.module.css';
export default function BlockShortAb() {
	return (
		<section className={css.blockShortDescWrap}>
			<div className={css.blockDescTextWr}>
				<h1 className={css.descTextH1}>Car Rent Ukraine</h1>
				<p className={css.descTextP}>
					Компанія лідер на ринку прокату автомобілів в Україні, ми пропонуємо
					найвищий стандарт обслуговування та надійність автопарку. Ми
					спеціалізуємося на забезпеченні наших клієнтів різноманітними
					автомобільними рішеннями для подорожей та бізнесу. Наш автопарк
					включає в себе широкий вибір автомобілів різних класів, від комфортних
					легкових авто до стильних кросоверів і розкішних машин. Ми прагнемо
					забезпечити наших клієнтів високоякісними транспортними рішеннями,
					надаючи зручність та надійність на кожному етапі оренди.
				</p>
			</div>
			<div className={css.blockDescPicWr}></div>
		</section>
	);
}

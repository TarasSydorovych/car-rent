import css from './services.module.css';
import firstPic from '../../../img/rul2.webp';
import secondPic from '../../../img/rulles.webp';
export default function HowRent() {
	return (
		<section className={css.howRentWrap}>
			<img src={firstPic} className={css.firstPicI} />
			<div className={css.howToRent}>
				<h3 className={css.topH3}>Як отримати авто в прокат</h3>
				<p className={css.listP}>
					<span className={css.listPSpan}>Заповніть заявку:&nbsp;</span>
					зверніться до нашої команди та заповніть заявку на нашому веб-сайті.
				</p>
				<p className={css.listP}>
					<span className={css.listPSpan}>Оберіть авто:&nbsp;</span>
					виберіть автомобіль з нашого асортименту, який вам підходить за типом
					і бюджетом.
				</p>
				<p className={css.listP}>
					<span className={css.listPSpan}>
						Підготуйте необхідні документи:&nbsp;
					</span>
					для оформлення договору прокату вам знадобляться документи водія та
					інші необхідні документи.
				</p>
				<p className={css.listP}>
					<span className={css.listPSpan}>Заберіть авто:&nbsp;</span>
					приходьте до нас, щоб отримати ключі від вашого автомобіля і почати
					подорож.
				</p>
			</div>
			<img src={secondPic} className={css.firstPicI} />
		</section>
	);
}

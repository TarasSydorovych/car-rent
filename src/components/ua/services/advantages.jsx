import css from './services.module.css';
import { FaCar } from 'react-icons/fa';
import { MdOutlineMonetizationOn } from 'react-icons/md';
import { BiSolidBookAdd } from 'react-icons/bi';

export default function Advantages() {
	return (
		<section className={css.advantageWrapp}>
			<h2 className={css.advantH1}>Наші переваги</h2>
			<div className={css.advListWrap}>
				<div className={css.oneOfListWrap}>
					<FaCar className={css.iconCupSt} />
					<h4 className={css.forIcH4}>Різноманітність автомобілів</h4>
					<p className={css.forIcP}>
						Вибирайте з великого асортименту авто, включаючи економ-клас,
						комфортабельні седани, позашляховики та багато інших.
					</p>
				</div>
				<div className={css.oneOfListWrap}>
					<MdOutlineMonetizationOn className={css.iconCupSt} />
					<h4 className={css.forIcH4}>Прозора ціноутворення</h4>
					<p className={css.forIcP}>
						У нас немає прихованих платежів або непередбачуваних витрат. Ви
						знаєте, скільки коштує кожен автомобіль.
					</p>
				</div>
				<div className={css.oneOfListWrap}>
					<BiSolidBookAdd className={css.iconCupSt} />
					<h4 className={css.forIcH4}>Зручне бронювання</h4>
					<p className={css.forIcP}>
						Замовлення авто - це легко і швидко. Забронюйте автомобіль онлайн
						або зв'яжіться з нашою командою.
					</p>
				</div>
			</div>
		</section>
	);
}

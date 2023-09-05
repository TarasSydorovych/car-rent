import css from './aboutUs.module.css';
import { TfiCup } from 'react-icons/tfi';
import { BiHappyBeaming } from 'react-icons/bi';
import { AiFillSignal } from 'react-icons/ai';
export default function ListOfQuolytu() {
	return (
		<section className={css.listQuoWrap}>
			<div className={css.oneOfListWrap}>
				<TfiCup className={css.iconCupSt} />
				<h4 className={css.forIcH4}>10 років на ринку</h4>
				<p className={css.forIcP}>
					Car Rent Ukraine - ваш надійний партнер у прокаті авто.
				</p>
			</div>
			<div className={css.oneOfListWrap}>
				<BiHappyBeaming className={css.iconCupSt} />
				<h4 className={css.forIcH4}>1000+ Задоволених клієнтів</h4>
				<p className={css.forIcP}>
					Car Rent Ukraine - найкращий сервіс за помірну ціну
				</p>
			</div>
			<div className={css.oneOfListWrap}>
				<AiFillSignal className={css.iconCupSt} />
				<h4 className={css.forIcH4}>Чудова продуктивність</h4>
				<p className={css.forIcP}>
					З нами Ви отримаєте авто яке максимально підійде Вашим очіуцванням
				</p>
			</div>
		</section>
	);
}

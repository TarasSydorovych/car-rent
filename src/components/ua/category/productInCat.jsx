import css from './category.module.css';
import foto from '../../../img/toyota.jpeg';
export default function ProductInCat({ el, setSendMessage }) {
	const openFrom = () => {
		setSendMessage(true);
	};
	return (
		<div className={css.prodWrap}>
			<h1 className={css.carName}>{el.autoName}</h1>
			<p className={css.smallDesc}>{el.manual}</p>
			<img src={el.imageList[0]} className={css.prodPic} />
			<ul className={css.priceList}>
				<li className={css.priceListLi}>
					<p className={css.listP}>{el.firstPrice}грн</p>
					<p className={css.listPSecond}>1-2діб</p>
				</li>
				<li className={css.priceListLiBack}>
					<p className={css.listP}>{el.secondPrice}грн</p>
					<p className={css.listPSecond}>3-7діб</p>
				</li>
				<li className={css.priceListLi}>
					<p className={css.listP}>{el.threePrice}грн</p>
					<p className={css.listPSecond}>8+діб</p>
				</li>
				<li className={css.priceListLiBack}>
					<p className={css.listP}>{el.fourPrice}грн</p>
					<p className={css.listPSecond}>30+діб</p>
				</li>
			</ul>
			<button className={css.buttonMessag} onClick={openFrom}>
				Замовити авто
			</button>
		</div>
	);
}

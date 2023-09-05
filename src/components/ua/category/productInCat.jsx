import css from './category.module.css';
import foto from '../../../img/toyota.jpeg';
export default function ProductInCat() {
	return (
		<div className={css.prodWrap}>
			<h1 className={css.carName}>Toyata Corolla E16/E17</h1>
			<p className={css.smallDesc}>Автомат</p>
			<img src={foto} className={css.prodPic} />
		</div>
	);
}

import css from './category.module.css';
import foto from '../../../img/toyota.jpeg';
import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
export default function ProductInCat({ el, setSendMessage }) {
	const location = useLocation();
	const [firstPrice, setFirstPrice] = useState();
	const [secondPrice, setSecondPrice] = useState();
	const [threePrice, setThreePrice] = useState();
	const [fourPrice, setFourPrice] = useState();

	const openFrom = () => {
		setSendMessage(true);
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
	useEffect(() => {
		const numberOne = parseFloat(el.firstPrice) * 40;
		const numberTwo = parseFloat(el.secondPrice) * 40;
		const numberThree = parseFloat(el.threePrice) * 40;
		const numberFour = parseFloat(el.fourPrice) * 40;
		const roundedNumberOne = Math.round(numberOne);
		const roundedNumberTwo = Math.round(numberTwo);
		const roundedNumberThree = Math.round(numberThree);
		const roundedNumberFour = Math.round(numberFour);
		setFirstPrice(roundedNumberOne);
		setSecondPrice(roundedNumberTwo);
		setThreePrice(roundedNumberThree);
		setFourPrice(roundedNumberFour);
	}, []);
	return (
		<div className={css.prodWrap}>
			<Link className={css.carName} to={`/auto/${el.uid}`}>
				<h1 className={css.carName}>{el.autoName}</h1>
			</Link>
			<p className={css.smallDesc}>{el.manual}</p>
			<Link to={`/auto/${el.uid}`}>
				<img src={el.imageList[0]} className={css.prodPic} />
			</Link>
			<ul className={css.priceList}>
				<li className={css.priceListLi}>
					<p className={css.listP}>{firstPrice}грн</p>
					<p className={css.listPSecond}>1-2діб</p>
				</li>
				<li className={css.priceListLiBack}>
					<p className={css.listP}>{secondPrice}грн</p>
					<p className={css.listPSecond}>3-7діб</p>
				</li>
				<li className={css.priceListLi}>
					<p className={css.listP}>{threePrice}грн</p>
					<p className={css.listPSecond}>8+діб</p>
				</li>
				<li className={css.priceListLiBack}>
					<p className={css.listP}>{fourPrice}грн</p>
					<p className={css.listPSecond}>30+діб</p>
				</li>
			</ul>
			<button className={css.buttonMessag} onClick={openFrom}>
				Замовити авто
			</button>
		</div>
	);
}

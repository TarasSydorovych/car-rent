import css from './category.module.css';
import foto from '../../../img/toyota.jpeg';
import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
export default function ProductInCat({ el, setSendMessage, t, val }) {
	const location = useLocation();
	const [firstPrice, setFirstPrice] = useState();
	const [secondPrice, setSecondPrice] = useState();
	const [threePrice, setThreePrice] = useState();
	const [fourPrice, setFourPrice] = useState();
	const [corobka, setCorobka] = useState('');
	const openFrom = () => {
		setSendMessage(true);
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
	// useEffect(() => {
	// 	console.log('el.fourPrice', el.fourPrice, el.autoName);
	// 	const numberOne = parseFloat(el.firstPrice) * 40;
	// 	const numberTwo = parseFloat(el.secondPrice) * 40;
	// 	const numberThree = parseFloat(el.threePrice) * 40;
	// 	const numberFour = parseFloat(el.fourPrice) * 40;
	// 	console.log('numberFour', numberFour);
	// 	const roundedNumberOne = Math.round(numberOne);
	// 	const roundedNumberTwo = Math.round(numberTwo);
	// 	const roundedNumberThree = Math.round(numberThree);
	// 	const roundedNumberFour = Math.round(numberFour);
	// 	setFirstPrice(roundedNumberOne);
	// 	setSecondPrice(roundedNumberTwo);
	// 	setThreePrice(roundedNumberThree);
	// 	setFourPrice(roundedNumberFour);
	// }, []);
	useEffect(() => {
		const cur = parseFloat(val[0].val);

		const numberOne = parseFloat(el.firstPrice);
		const numberTwo = parseFloat(el.secondPrice);
		const numberThree = parseFloat(el.threePrice);
		const numberFour = parseFloat(el.fourPrice);

		const roundedNumberOne = Math.round(numberOne * cur);
		const roundedNumberTwo = Math.round(numberTwo * cur);
		const roundedNumberThree = Math.round(numberThree * cur);
		const roundedNumberFour = Math.round(numberFour * cur);

		setFirstPrice(roundedNumberOne);
		setSecondPrice(roundedNumberTwo);
		setThreePrice(roundedNumberThree);
		setFourPrice(roundedNumberFour);
	}, [el]);
	useEffect(() => {
		if (el.manual === 'Автомат') {
			setCorobka(`${t('description.part1.category.automat')}`);
		} else if (el.manual === 'Механічна') {
			setCorobka(`${t('description.part1.category.manual')}`);
		}
	}, [el.manual, t('description.part1.category.manual')]);
	return (
		<div className={css.prodWrap}>
			<Link className={css.carName} to={`/auto/${el.uid}`}>
				<h1 className={css.carName}>{el.autoName}</h1>
			</Link>
			<p className={css.smallDesc}>{corobka}</p>
			<Link to={`/auto/${el.uid}`}>
				<img src={el.imageList[0]} className={css.prodPic} />
			</Link>
			<ul className={css.priceList}>
				<li className={css.priceListLi}>
					<p className={css.listP}>
						{firstPrice}
						{t('description.part1.category.uah')}
					</p>
					<p className={css.listPSecond}>
						1-2{t('description.part1.category.dib')}
					</p>
				</li>
				<li className={css.priceListLiBack}>
					<p className={css.listP}>
						{secondPrice}
						{t('description.part1.category.uah')}
					</p>
					<p className={css.listPSecond}>
						3-7{t('description.part1.category.dib')}
					</p>
				</li>
				<li className={css.priceListLi}>
					<p className={css.listP}>
						{threePrice}
						{t('description.part1.category.uah')}
					</p>
					<p className={css.listPSecond}>
						8+{t('description.part1.category.dib')}
					</p>
				</li>
				<li className={css.priceListLiBack}>
					<p className={css.listP}>
						{fourPrice}
						{t('description.part1.category.uah')}
					</p>
					<p className={css.listPSecond}>
						30+{t('description.part1.category.dib')}
					</p>
				</li>
			</ul>
			<button className={css.buttonMessag} onClick={openFrom}>
				{t('description.part1.category.button')}
			</button>
		</div>
	);
}

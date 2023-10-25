import css from './secondBlock.module.css';
import imgPi from '../../../../img/auto.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function BlockAuto({
	el,
	t,
	windowDimensions,
	val,
	selectedCurrency,
}) {
	const [fullPrice, setFullPrice] = useState();
	const [claasAutoM, setClaasAutoM] = useState('');
	const [lin, setLin] = useState('biznes');
	useEffect(() => {
		const cut = parseFloat(val);
		const number = parseFloat(el.startPrice) * cut;

		const roundedNumber = Math.round(number); // Закруглення числа без коми
		setFullPrice(roundedNumber);
	}, [val, selectedCurrency]);
	useEffect(() => {
		if (el.class === 'Економ') {
			setLin('econom');
			setClaasAutoM(`${t('description.part1.secondBlock.econ')}`);
		} else if (el.class === 'Бізнес') {
			setLin('biznes');
			setClaasAutoM(`${t('description.part1.secondBlock.bussi')}`);
		} else if (el.class === 'Преміум') {
			setLin('premiun');
			setClaasAutoM(`${t('description.part1.secondBlock.prem')}`);
		}
	}, [t('description.part1.secondBlock.econ')]);

	return (
		<Link className={css.linkToCat} to={`/category/${lin}`}>
			{windowDimensions && (
				<div className={css.blockAutoWrap}>
					<div className={css.blockAutoWrapText}>
						<div className={css.categoryName}>{claasAutoM}</div>
						<div className={css.categoryPrice}>
							{t('description.part1.secondBlock.vid')}&nbsp;{fullPrice}
							{selectedCurrency}
						</div>
					</div>
					<div className={css.blockAutoWrapPic}>
						<img
							src={el.img}
							className={css.categoryBlockImg}
							alt={`Оренда авто ${el.class} у Львів`}
						/>
					</div>
				</div>
			)}
			{!windowDimensions && (
				<div className={css.wrapMobileSec}>
					<div className={css.categoryName}>{claasAutoM}</div>
					<img
						src={el.img}
						className={css.categoryBlockImgMobile}
						alt={`Оренда авто ${el.class} у Львів`}
					/>
					<div className={css.categoryPrice}>
						{t('description.part1.secondBlock.vid')}&nbsp;{fullPrice}
						{selectedCurrency}
					</div>
				</div>
			)}
		</Link>
	);
}

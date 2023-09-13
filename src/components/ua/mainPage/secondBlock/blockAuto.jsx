import css from './secondBlock.module.css';
import imgPi from '../../../../img/auto.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function BlockAuto({ el, t }) {
	const [fullPrice, setFullPrice] = useState();
	const [claasAutoM, setClaasAutoM] = useState('');
	useEffect(() => {
		const number = parseFloat(el.startPrice) * 40;

		const roundedNumber = Math.round(number); // Закруглення числа без коми
		setFullPrice(roundedNumber);
	}, []);
	useEffect(() => {
		if (el.class === 'Економ') {
			setClaasAutoM(`${t('description.part1.secondBlock.econ')}`);
		} else if (el.class === 'Бізнес') {
			setClaasAutoM(`${t('description.part1.secondBlock.bussi')}`);
		} else if (el.class === 'Преміум') {
			setClaasAutoM(`${t('description.part1.secondBlock.prem')}`);
		}
	}, [t('description.part1.secondBlock.econ')]);

	return (
		<Link className={css.linkToCat} to='/category'>
			<div className={css.blockAutoWrap}>
				<div className={css.blockAutoWrapText}>
					<div className={css.categoryName}>{claasAutoM}</div>
					<div className={css.categoryPrice}>
						{t('description.part1.secondBlock.vid')}&nbsp;{fullPrice}
						{t('description.part1.secondBlock.uah')}
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
		</Link>
	);
}

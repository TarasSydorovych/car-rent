import css from './secondBlock.module.css';
import imgPi from '../../../../img/auto.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function BlockAuto({ el }) {
	const [fullPrice, setFullPrice] = useState();

	useEffect(() => {
		const number = parseFloat(el.startPrice) * 40;

		const roundedNumber = Math.round(number); // Закруглення числа без коми
		setFullPrice(roundedNumber);
	}, []);
	return (
		<Link className={css.linkToCat} to='/category'>
			<div className={css.blockAutoWrap}>
				<div className={css.blockAutoWrapText}>
					<div className={css.categoryName}>{el.class}</div>
					<div className={css.categoryPrice}>Від&nbsp;{fullPrice}грн</div>
				</div>
				<div className={css.blockAutoWrapPic}>
					<img src={el.img} className={css.categoryBlockImg} />
				</div>
			</div>
		</Link>
	);
}

import css from './secondBlock.module.css';
import imgPi from '../../../../img/auto.png';
import { Link } from 'react-router-dom';
export default function BlockAuto({ el }) {
	return (
		<Link className={css.linkToCat} to='/category'>
			<div className={css.blockAutoWrap}>
				<div className={css.blockAutoWrapText}>
					<div className={css.categoryName}>{el.class}</div>
					<div className={css.categoryPrice}>Від&nbsp;{el.startPrice}грн</div>
				</div>
				<div className={css.blockAutoWrapPic}>
					<img src={el.img} className={css.categoryBlockImg} />
				</div>
			</div>
		</Link>
	);
}

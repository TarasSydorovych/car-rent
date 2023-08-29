import css from './firstBlock.module.css';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export default function BlockPic() {
	return (
		<section className={css.hero}>
			<div className={css.blockWithAutoWrap}>
				<div className={css.hWrap}>
					<h1 className={css.topH1InFirst}>ОРЕНДА АВТОМОБІЛІВ</h1>
					<h1 className={css.topH1InFirstSecond}>НА БУДЬ-ЯКИЙ ГАМАНЕЦЬ</h1>
					<div className={css.wrapPIn}>
						<div className={css.firstPWrap}>
							<IoMdCheckmarkCircleOutline className={css.styleP} />
							<p className={css.styleP}>Нові автомобілі</p>
						</div>
						<div className={css.firstPWrap}>
							<IoMdCheckmarkCircleOutline className={css.styleP} />
							<p className={css.styleP}>Гнучка система знижок</p>
						</div>
						<div className={css.firstPWrap}>
							<IoMdCheckmarkCircleOutline className={css.styleP} />
							<p className={css.styleP}>Широкий вибір авто</p>
						</div>
					</div>
					<button className={css.titleButton}>Обрати автомобіль</button>
				</div>
				<div></div>
			</div>
		</section>
	);
}

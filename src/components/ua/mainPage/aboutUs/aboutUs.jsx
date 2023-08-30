import css from './aboutUs.module.css';
import img1 from '../../../../img/auto1.jpeg';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
export default function AboutUs() {
	return (
		<div className={css.aboutUsWrap}>
			<div className={css.aboutUsSmallWrap}>
				<h3 className={css.aboutUsH3}>Про нас</h3>
				<p className={css.aboutUsP}>
					Ми в Car Rent Ukraine - команда професіоналів в сфері оренди
					автомобілів!
					<br /> Наші менеджери гарантовано залишать Вас задоволеними рівнем
					наданих послуг.
				</p>
				<div className={css.picAndTextWr}>
					<img src={img1} className={css.abouttPic} />
					<div className={css.wrapPIn}>
						<div className={css.firstPWrap}>
							<IoMdCheckmarkCircleOutline className={css.styleP} />
							<p className={css.styleP}>Автомобілі преміум класу</p>
						</div>
						<div className={css.firstPWrap}>
							<IoMdCheckmarkCircleOutline className={css.styleP} />
							<p className={css.styleP}>Бездоганний стан всіх автомобілів</p>
						</div>
						<div className={css.firstPWrap}>
							<IoMdCheckmarkCircleOutline className={css.styleP} />
							<p className={css.styleP}>Сервіс європейського рівня</p>
						</div>
						<button className={css.buttonDetail}>Детальніше</button>
					</div>
				</div>
			</div>
		</div>
	);
}
import { Link } from 'react-router-dom';
import css from './firstBlock.module.css';
import { IoIosPin, IoIosCar } from 'react-icons/io';

export default function HeaderFirst() {
	return (
		<div className={css.headerFirstWrap}>
			<div className={css.headerFirstWrapDiv}>
				<div className={css.locationWrap}>
					<div className={css.locationWrapIcon}>
						<Link className={css.locationWrapIcon}>
							<IoIosPin className={css.lacationIconSt} />

							<p className={css.headerFirstH4}>Наша локація</p>
						</Link>
					</div>
					<div className={css.locationWrapIcon}>
						<Link className={css.locationWrapIcon}>
							<IoIosCar className={css.lacationIconSt} />

							<p className={css.headerFirstH4}>Замовити авто</p>
						</Link>
					</div>
				</div>
				<p className={css.headerFirstH4}>
					НАЙДЕШЕВША ОРЕНДА ТА НАЙКРАЩІ МАШИНИ
				</p>
				<div className={css.contactWrap}>
					<p className={css.headerFirstH4}>
						<Link className={css.headerFirstH4}>КОНТАКТИ</Link>
					</p>

					<Link className={css.headerFirstPLink}>+380939393921</Link>
				</div>
			</div>
		</div>
	);
}

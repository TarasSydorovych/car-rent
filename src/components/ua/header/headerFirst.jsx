import { Link } from 'react-router-dom';
import css from './firstBlock.module.css';
import { IoIosPin, IoIosCar } from 'react-icons/io';
import { useTranslation, Trans } from 'react-i18next';
export default function HeaderFirst() {
	const { t, i18n } = useTranslation();
	return (
		<div className={css.headerFirstWrap}>
			<div className={css.headerFirstWrapDiv}>
				<div className={css.locationWrap}>
					<div className={css.locationWrapIcon}>
						<Link to='/contact' className={css.locationWrapIcon}>
							<IoIosPin className={css.lacationIconSt} />

							<p className={css.headerFirstH4}>
								{t('description.part1.headerFirst.location')}
							</p>
						</Link>
					</div>
					<div className={css.locationWrapIcon}>
						<Link to='/contact' className={css.locationWrapIcon}>
							<IoIosCar className={css.lacationIconSt} />

							<p className={css.headerFirstH4}>
								{t('description.part1.headerFirst.order')}
							</p>
						</Link>
					</div>
				</div>
				<p className={css.headerFirstH4}>
					{t('description.part1.headerFirst.cool')}
				</p>
				<div className={css.contactWrap}>
					<p className={css.headerFirstH4}>
						<Link to='/contact' className={css.headerFirstH4}>
							{t('description.part1.headerFirst.contact')}
						</Link>
					</p>

					<a href='tel:+380939393921' className={css.headerFirstPLink}>
						+380939393921
					</a>
				</div>
			</div>
		</div>
	);
}

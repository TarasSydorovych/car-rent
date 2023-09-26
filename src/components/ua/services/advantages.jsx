import css from './services.module.css';
import { FaCar } from 'react-icons/fa';
import { MdOutlineMonetizationOn } from 'react-icons/md';
import { BiSolidBookAdd } from 'react-icons/bi';

export default function Advantages({ t }) {
	return (
		<section className={css.advantageWrapp}>
			<h2 className={css.advantH1}>
				{t('description.part1.services.advTitle')}
			</h2>
			<div className={css.advListWrap}>
				<div className={css.oneOfListWrap}>
					<FaCar className={css.iconCupSt} />
					<h4 className={css.forIcH4}>
						{t('description.part1.services.advTitleTwo')}
					</h4>
					<p className={css.forIcP}>
						{t('description.part1.services.advDescOne')}
					</p>
				</div>
				<div className={css.oneOfListWrap}>
					<MdOutlineMonetizationOn className={css.iconCupSt} />
					<h4 className={css.forIcH4}>
						{t('description.part1.services.advDescTwo')}
					</h4>
					<p className={css.forIcP}>
						{t('description.part1.services.advDescThre')}
					</p>
				</div>
				<div className={css.oneOfListWrap}>
					<BiSolidBookAdd className={css.iconCupSt} />
					<h4 className={css.forIcH4}>
						{t('description.part1.services.advDescFour')}
					</h4>
					<p className={css.forIcP}>
						{t('description.part1.services.advDescFive')}
					</p>
				</div>
			</div>
		</section>
	);
}

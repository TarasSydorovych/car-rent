import css from './aboutUs.module.css';
import { TfiCup } from 'react-icons/tfi';
import { BiHappyBeaming } from 'react-icons/bi';
import { AiFillSignal } from 'react-icons/ai';
export default function ListOfQuolytu({ t }) {
	return (
		<section className={css.listQuoWrap}>
			<div className={css.oneOfListWrap}>
				<TfiCup className={css.iconCupSt} />
				<h4 className={css.forIcH4}>
					{t('description.part1.about.opDeTitleOne')}
				</h4>
				<p className={css.forIcP}>{t('description.part1.about.opDeDescOne')}</p>
			</div>
			<div className={css.oneOfListWrap}>
				<BiHappyBeaming className={css.iconCupSt} />
				<h4 className={css.forIcH4}>
					{t('description.part1.about.opDeTitleTwo')}
				</h4>
				<p className={css.forIcP}>{t('description.part1.about.opDeDescTwo')}</p>
			</div>
			<div className={css.oneOfListWrap}>
				<AiFillSignal className={css.iconCupSt} />
				<h4 className={css.forIcH4}>
					{t('description.part1.about.opDeTitleThre')}
				</h4>
				<p className={css.forIcP}>
					{t('description.part1.about.opDeDescThre')}
				</p>
			</div>
		</section>
	);
}

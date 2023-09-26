import css from './services.module.css';
import firstPic from '../../../img/rul2.webp';
import secondPic from '../../../img/rulles.webp';
export default function HowRent({ t }) {
	return (
		<section className={css.howRentWrap}>
			<img src={firstPic} className={css.firstPicI} />
			<div className={css.howToRent}>
				<h3 className={css.topH3}>
					{t('description.part1.services.howRentOne')}
				</h3>
				<p className={css.listP}>
					<span className={css.listPSpan}>
						{t('description.part1.services.howRentOneTit')}&nbsp;
					</span>
					{t('description.part1.services.howRentOneDesc')}
				</p>
				<p className={css.listP}>
					<span className={css.listPSpan}>
						{t('description.part1.services.howRentTwoTit')}&nbsp;
					</span>
					{t('description.part1.services.howRentTwoDesc')}
				</p>
				<p className={css.listP}>
					<span className={css.listPSpan}>
						{t('description.part1.services.howRentThreTit')}&nbsp;
					</span>
					{t('description.part1.services.howRentThreDesc')}
				</p>
				<p className={css.listP}>
					<span className={css.listPSpan}>
						{t('description.part1.services.howRentFourTit')}&nbsp;
					</span>
					{t('description.part1.services.howRentFourDesc')}
				</p>
			</div>
			<img src={secondPic} className={css.firstPicI} />
		</section>
	);
}

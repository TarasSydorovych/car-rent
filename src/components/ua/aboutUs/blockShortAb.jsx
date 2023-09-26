import css from './aboutUs.module.css';
export default function BlockShortAb({ t }) {
	return (
		<section className={css.blockShortDescWrap}>
			<div className={css.blockDescTextWr}>
				<h1 className={css.descTextH1}>Car Rent Ukraine</h1>
				<p className={css.descTextP}>
					{t('description.part1.about.description')}
				</p>
			</div>
			<div className={css.blockDescPicWr}></div>
		</section>
	);
}

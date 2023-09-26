import css from './services.module.css';
export default function BlockDesc({ t }) {
	return (
		<section className={css.blockShortDescWrap}>
			<div className={css.blockDescPicWr}></div>
			<div className={css.blockDescTextWr}>
				<h1 className={css.descTextH1}>
					{t('description.part1.services.blockDesTit')}
				</h1>
				<p className={css.descTextP}>
					{t('description.part1.services.blockDesDesc')}
				</p>
			</div>
		</section>
	);
}

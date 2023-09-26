import css from './aboutUs.module.css';
export default function AboutLabel({ t }) {
	return (
		<div className={css.contactLabelWrap}>
			<h1 className={css.contactUsH1Top}>
				{t('description.part1.about.title')}
			</h1>
		</div>
	);
}

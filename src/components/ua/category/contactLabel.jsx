import css from './category.module.css';
export default function ContactLabel({ t }) {
	return (
		<div className={css.contactLabelWrap}>
			<h1 className={css.contactUsH1Top}>
				{t('description.part1.category.title')}
			</h1>
		</div>
	);
}

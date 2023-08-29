import css from './secondBlock.module.css';

export default function SecondBlock() {
	return (
		<section className={css.secondBlockWrap}>
			<div className={css.secondBlockWrapDiv}></div>
		</section>
	);
}

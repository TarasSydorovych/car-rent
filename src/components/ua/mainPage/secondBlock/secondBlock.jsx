import withFirebaseCollection from '../../../HOK/withFirebaseCollection';
import BlockAuto from './blockAuto';
import css from './secondBlock.module.css';

const SecondBlock = ({ data }) => {
	return (
		<section id='catalogAuto' className={css.secondBlockWrap}>
			<div className={css.secondBlockWrapDiv}>
				<div className={css.clasAutoHWrap}>
					<h3 className={css.clasAutoH}>Клас авто</h3>
				</div>
				<div className={css.autoWrapSection}>
					{data.map((el, index) => {
						return <BlockAuto key={index} el={el} />;
					})}
				</div>
			</div>
		</section>
	);
};
export default withFirebaseCollection('category')(SecondBlock);

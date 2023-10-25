import withFirebaseCollection from '../../../HOK/withFirebaseCollection';
import BlockAuto from './blockAuto';
import css from './secondBlock.module.css';

const SecondBlock = ({ data, t, windowDimensions, val, selectedCurrency }) => {
	return (
		<section id='catalogAuto' className={css.secondBlockWrap}>
			<div className={css.secondBlockWrapDiv}>
				<div className={css.clasAutoHWrap}>
					<h3 className={css.clasAutoH}>
						{t('description.part1.secondBlock.clas')}
					</h3>
				</div>
				<div className={css.autoWrapSection}>
					{data.map((el, index) => {
						return (
							<BlockAuto
								key={index}
								el={el}
								t={t}
								windowDimensions={windowDimensions}
								val={val}
								selectedCurrency={selectedCurrency}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default withFirebaseCollection('category')(SecondBlock);

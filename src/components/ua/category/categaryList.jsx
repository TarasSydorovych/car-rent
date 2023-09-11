import withFirebaseCollection from '../../HOK/withFirebaseCollection';
import css from './category.module.css';
const CategoryList = ({ dataCat, data, setCategory, setPidCategory }) => {
	const changeCategory = (name) => {
		setCategory(name);
		setPidCategory('');
	};
	const changePidCategory = (name) => {
		setPidCategory(name);
		setCategory('');
	};
	return (
		<section className={css.sectionWrap}>
			<div className={css.categoryListWrap}>
				<ul className={css.ulListCategory}>
					{dataCat.map((el, index) => {
						return (
							<li
								onClick={() => changeCategory(el.class)}
								key={index}
								className={css.ulListLi}
							>
								{el.class}
							</li>
						);
					})}
					{data.map((el, index) => {
						return (
							<li
								onClick={() => changePidCategory(el.class)}
								key={index}
								className={css.ulListLi}
							>
								{el.class}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};
export default withFirebaseCollection('smallCategory')(CategoryList);

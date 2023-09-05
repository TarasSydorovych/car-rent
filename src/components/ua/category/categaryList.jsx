import withFirebaseCollection from '../../HOK/withFirebaseCollection';
import css from './category.module.css';
const CategoryList = ({ dataCat, data, setCategory }) => {
	const changeCategory = (name) => {
		setCategory(name);
	};
	return (
		<section className={css.sectionWrap}>
			<div className={css.categoryListWrap}>
				<ul className={css.ulListCategory}>
					{dataCat.map((el, index) => {
						return (
							<li
								onClick={() => changeCategory(el.category)}
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
								onClick={() => changeCategory(el.category)}
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

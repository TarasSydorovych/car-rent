import withFirebaseCollection from '../../HOK/withFirebaseCollection';
import css from './category.module.css';
const CategoryList = ({
	dataCat,
	data,
	setCategory,
	setPidCategory,
	t,
	setSelectedOption,
}) => {
	const changeCategory = (name) => {
		setCategory(name);
		setPidCategory('');
		setSelectedOption(1);
	};
	const changePidCategory = (name) => {
		setPidCategory(name);
		setCategory('');
		setSelectedOption(1);
	};
	return (
		<section className={css.sectionWrap}>
			<div className={css.categoryListWrap}>
				<ul className={css.ulListCategory}>
					{dataCat.map((el, index) => {
						let classAuto = '';
						if (el.class === 'Бізнес') {
							classAuto = `${t('description.part1.category.busines')}`;
						} else if (el.class === 'Економ') {
							classAuto = `${t('description.part1.category.econom')}`;
						} else if (el.class === 'Преміум') {
							classAuto = `${t('description.part1.category.premium')}`;
						}
						return (
							<li
								onClick={() => changeCategory(el.class)}
								key={index}
								className={css.ulListLi}
							>
								{classAuto}
							</li>
						);
					})}
					{data.map((el, index) => {
						let classAuto = '';
						if (el.class === 'Мікроавтобуси') {
							classAuto = `${t('description.part1.category.bus')}`;
						} else if (el.class === 'Позашляховик') {
							classAuto = `${t('description.part1.category.Vned')}`;
						} else if (el.class === 'Легкові') {
							classAuto = `${t('description.part1.category.legcov')}`;
						}
						return (
							<li
								onClick={() => changePidCategory(el.class)}
								key={index}
								className={css.ulListLi}
							>
								{classAuto}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};
export default withFirebaseCollection('smallCategory')(CategoryList);

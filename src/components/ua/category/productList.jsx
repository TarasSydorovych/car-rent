import { useState, useEffect } from 'react';
import withFirebaseCollection from '../../HOK/withFirebaseCollection';
import css from './category.module.css';
import ProductInCat from './productInCat';
const ProductList = ({
	data,
	setSendMessage,
	pidCategory,
	category,
	t,
	selectedOption,
	setSelectedOption,
	setCategory,
	setPidCategory,
	val,
}) => {
	const [filteredData, setFilteredData] = useState([]);
	const cur = parseFloat(val[0].val);
	useEffect(() => {
		// Функція для фільтрації товарів на основі умов
		// const filterProducts = () => {
		// 	if (category !== '' && pidCategory === '') {
		// 		// Фільтруємо за умовою, коли category не порожній, а pidCategory порожній
		// 		const filtered = data.filter((el) => el.classAuto === category);
		// 		setFilteredData(filtered);
		// 	} else if (pidCategory !== '' && category === '') {
		// 		// Фільтруємо за умовою, коли pidCategory не порожній, а category порожній
		// 		const filtered = data.filter((el) => el.pidClassAuto === pidCategory);
		// 		setFilteredData(filtered);
		// 	} else {
		// 		// Якщо обидва параметри мають значення, то відображаємо усі товари
		// 		setFilteredData(data);
		// 	}
		// };
		const filterProducts = () => {
			let filtered = data;

			if (category !== '') {
				filtered = filtered.filter((el) => el.classAuto === category);
			}

			if (pidCategory !== '') {
				filtered = filtered.filter((el) => el.pidClassAuto === pidCategory);
			}

			if (selectedOption !== 1) {
				filtered = filtered.filter((el) => {
					const fourPriceNumber = parseFloat(el.fourPrice); // Конвертуємо в число

					if (isNaN(fourPriceNumber)) {
						// Перевіряємо, чи вдалося конвертувати
						return false; // Якщо не вдалося, ігноруємо цей елемент
					}

					if (selectedOption === 40) {
						return fourPriceNumber <= 40;
					} else if (selectedOption === 80) {
						return fourPriceNumber > 40 && fourPriceNumber <= 80;
					} else if (selectedOption === 120) {
						return fourPriceNumber > 80 && fourPriceNumber <= 120;
					}

					return true; // Всі інші випадки, коли selectedOption = 1
				});
			}

			setFilteredData(filtered);
		};
		// Викликаємо функцію фільтрації при зміні параметрів
		filterProducts();
	}, [data, category, pidCategory, selectedOption]);

	const handleSelectChange = (e) => {
		setCategory('');
		setPidCategory('');
		const value = parseInt(e.target.value); // Парсимо значення у ціле число
		setSelectedOption(value);
	};
	return (
		<section className={css.prodListWrapBig}>
			<select className={css.customSelect} onChange={handleSelectChange}>
				<option className='customOpin' value={1} key={1}>
					{t('description.part1.category.option')}
				</option>
				<option className='customOpin' value={40} key={2}>
					{t('description.part1.category.to')}&nbsp;{40 * cur}
					{t('description.part1.category.uah')}
				</option>
				<option className='customOpin' value={80} key={3}>
					{40 * cur}-{80 * cur} {t('description.part1.category.uah')}
				</option>
				<option className='customOpin' value={120} key={4}>
					{80 * cur}-{120 * cur} {t('description.part1.category.uah')}
				</option>
			</select>
			<div className={css.prodListWrap}>
				{filteredData.map((el, index) => {
					return (
						<ProductInCat
							setSendMessage={setSendMessage}
							key={index}
							el={el}
							t={t}
							val={val}
						/>
					);
				})}
			</div>
		</section>
	);
};
export default withFirebaseCollection('product')(ProductList);

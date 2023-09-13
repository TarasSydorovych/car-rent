import { useState, useEffect } from 'react';
import withFirebaseCollection from '../../HOK/withFirebaseCollection';
import css from './category.module.css';
import ProductInCat from './productInCat';
const ProductList = ({ data, setSendMessage, pidCategory, category, t }) => {
	const [filteredData, setFilteredData] = useState([]);
	useEffect(() => {
		// Функція для фільтрації товарів на основі умов
		const filterProducts = () => {
			if (category !== '' && pidCategory === '') {
				// Фільтруємо за умовою, коли category не порожній, а pidCategory порожній
				const filtered = data.filter((el) => el.classAuto === category);
				setFilteredData(filtered);
			} else if (pidCategory !== '' && category === '') {
				// Фільтруємо за умовою, коли pidCategory не порожній, а category порожній
				const filtered = data.filter((el) => el.pidClassAuto === pidCategory);
				setFilteredData(filtered);
			} else {
				// Якщо обидва параметри мають значення, то відображаємо усі товари
				setFilteredData(data);
			}
		};

		// Викликаємо функцію фільтрації при зміні параметрів
		filterProducts();
	}, [data, category, pidCategory]);
	return (
		<section className={css.prodListWrap}>
			{filteredData.map((el, index) => {
				return (
					<ProductInCat
						setSendMessage={setSendMessage}
						key={index}
						el={el}
						t={t}
					/>
				);
			})}
		</section>
	);
};
export default withFirebaseCollection('product')(ProductList);

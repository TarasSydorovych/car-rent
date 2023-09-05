import { useState } from 'react';
import withFirebaseCollection from '../../HOK/withFirebaseCollection';
import HeaderAll from '../header/headerAll';
import Footer from '../mainPage/footer/footer';
import CategoryList from './categaryList';
import css from './category.module.css';
import ContactLabel from './contactLabel';
import ProductList from './productList';
const Category = ({ data }) => {
	const [category, setCategory] = useState('');
	return (
		<>
			<HeaderAll />
			<ContactLabel />
			<CategoryList dataCat={data} setCategory={setCategory} />
			<ProductList />
			<Footer />
		</>
	);
};
export default withFirebaseCollection('category')(Category);

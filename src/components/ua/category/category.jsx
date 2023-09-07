import { useState } from 'react';
import withFirebaseCollection from '../../HOK/withFirebaseCollection';
import HeaderAll from '../header/headerAll';
import Footer from '../mainPage/footer/footer';
import CategoryList from './categaryList';
import css from './category.module.css';
import ContactLabel from './contactLabel';
import ProductList from './productList';
import SendOrder from './sendOrder';
const Category = ({ data }) => {
	const [category, setCategory] = useState('');
	const [pidCategory, setPidCategory] = useState('');
	const [sendMessage, setSendMessage] = useState(false);
	return (
		<>
			<HeaderAll />
			<ContactLabel />
			<CategoryList
				dataCat={data}
				setCategory={setCategory}
				setPidCategory={setPidCategory}
			/>
			<ProductList setSendMessage={setSendMessage} />
			{sendMessage && <SendOrder setSendMessage={setSendMessage} />}
			<Footer />
		</>
	);
};
export default withFirebaseCollection('category')(Category);

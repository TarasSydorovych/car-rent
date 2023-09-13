import { useState } from 'react';
import withFirebaseCollection from '../../HOK/withFirebaseCollection';
import HeaderAll from '../header/headerAll';
import Footer from '../mainPage/footer/footer';
import CategoryList from './categaryList';
import css from './category.module.css';
import ContactLabel from './contactLabel';
import ProductList from './productList';
import SendOrder from './sendOrder';
import { useTranslation, Trans } from 'react-i18next';
import keyWord from '../../../function/keyWord';
const Category = ({ data }) => {
	const { t, i18n } = useTranslation();
	const [category, setCategory] = useState('');
	const [pidCategory, setPidCategory] = useState('');
	const [sendMessage, setSendMessage] = useState(false);
	keyWord(
		`${t('description.seo.category.title')}`,
		`${t('description.seo.category.description')}`,
	);
	return (
		<>
			<HeaderAll />
			<ContactLabel t={t} />
			<CategoryList
				dataCat={data}
				setCategory={setCategory}
				setPidCategory={setPidCategory}
				t={t}
			/>
			<ProductList
				setSendMessage={setSendMessage}
				category={category}
				pidCategory={pidCategory}
				t={t}
			/>
			{sendMessage && <SendOrder setSendMessage={setSendMessage} />}
			<Footer />
		</>
	);
};
export default withFirebaseCollection('category')(Category);

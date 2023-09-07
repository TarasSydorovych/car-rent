import withFirebaseCollection from '../../HOK/withFirebaseCollection';
import css from './category.module.css';
import ProductInCat from './productInCat';
const ProductList = ({ data, setSendMessage }) => {
	return (
		<section className={css.prodListWrap}>
			{data.map((el, index) => {
				return (
					<ProductInCat setSendMessage={setSendMessage} key={index} el={el} />
				);
			})}
		</section>
	);
};
export default withFirebaseCollection('product')(ProductList);

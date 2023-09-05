import css from './category.module.css';
import ProductInCat from './productInCat';
export default function ProductList() {
	return (
		<section className={css.prodListWrap}>
			<ProductInCat />
		</section>
	);
}

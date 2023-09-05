import css from './firstBlock.module.css';
import HeaderFirst from './headerFirst';
import HeaderSecond from './headerSecond';

export default function HeaderAll() {
	return (
		<header className={css.headerWrap}>
			<HeaderFirst />
			<HeaderSecond />
		</header>
	);
}

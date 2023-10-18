import BlockPic from './blockPic';
import css from './firstBlock.module.css';
import HeaderFirst from './headerFirst';
import HeaderSecond from './headerSecond';

export default function Header({ windowDimensions }) {
	return (
		<header className={css.headerWrap}>
			{windowDimensions && <HeaderFirst windowDimensions={windowDimensions} />}

			<HeaderSecond windowDimensions={windowDimensions} />
		</header>
	);
}

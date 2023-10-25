import css from './firstBlock.module.css';
import HeaderFirst from './headerFirst';
import HeaderSecond from './headerSecond';
import { useState, useEffect } from 'react';
export default function HeaderAll({ selectedCurrency, setSelectedCurrency }) {
	const [windowDimensions, setWindowDimensions] = useState(false);
	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 1100) {
				setWindowDimensions(false);
			} else {
				setWindowDimensions(true);
			}
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<header className={css.headerWrap}>
			{windowDimensions && <HeaderFirst windowDimensions={windowDimensions} />}
			<HeaderSecond
				windowDimensions={windowDimensions}
				setSelectedCurrency={setSelectedCurrency}
				selectedCurrency={selectedCurrency}
			/>
		</header>
	);
}

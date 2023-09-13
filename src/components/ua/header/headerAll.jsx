import css from './firstBlock.module.css';
import HeaderFirst from './headerFirst';
import HeaderSecond from './headerSecond';
import { useState, useEffect } from 'react';
export default function HeaderAll() {
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
			<HeaderFirst />
			<HeaderSecond windowDimensions={windowDimensions} />
		</header>
	);
}

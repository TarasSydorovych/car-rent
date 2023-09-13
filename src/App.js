import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import MainPage from './components/ua/mainPage/mainPage';
import Contact from './components/ua/contact/contact';
import AboutUs from './components/ua/aboutUs/aboutUs';
import Services from './components/ua/services/services';
import Category from './components/ua/category/category';
import AdmUkr from './components/adm/admUkr/admUkr';
import Auto from './components/ua/auto/auto';
import { useState, useEffect } from 'react';

function App() {
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
		<div>
			<Routes>
				<Route
					path='/'
					element={<MainPage windowDimensions={windowDimensions} />}
				/>
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/services' element={<Services />} />
				<Route path='/category' element={<Category />} />
				<Route path='/adm' element={<AdmUkr />} />
				<Route path='/auto/:id' element={<Auto />} />
			</Routes>
		</div>
	);
}

export default App;

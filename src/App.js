import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import MainPage from './components/ua/mainPage/mainPage';
import Contact from './components/ua/contact/contact';
import AboutUs from './components/ua/aboutUs/aboutUs';
import Services from './components/ua/services/services';
import Category from './components/ua/category/category';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/services' element={<Services />} />
				<Route path='/category' element={<Category />} />
			</Routes>
		</div>
	);
}

export default App;

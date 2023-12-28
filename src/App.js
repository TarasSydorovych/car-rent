import logo from './logo.svg';
import './App.css';
import { I18nextProvider, useTranslation } from 'react-i18next';
import {
	Routes,
	Route,
	useNavigate,
	Navigate,
	Router,
	useParams,
	useLocation,
	Outlet,
} from 'react-router-dom';
import MainPage from './components/ua/mainPage/mainPage';
import Contact from './components/ua/contact/contact';
import AboutUs from './components/ua/aboutUs/aboutUs';
import Services from './components/ua/services/services';
import Category from './components/ua/category/category';
import AdmUkr from './components/adm/admUkr/admUkr';
import Auto from './components/ua/auto/auto';
import { useState, useEffect } from 'react';
import AddBooks from './components/adm/admUkr/photoEditor';
import Cabinet from './components/adm/admUkr/cabinet';

import PhotoGallery from './components/adm/admUkr/test';
import withFirebaseCollection from './components/HOK/withFirebaseCollection';
import Chat from './components/chat/chat';
import NotFound from './components/404/notFound';
const App = ({ data }) => {
	const [windowDimensions, setWindowDimensions] = useState(false);
	const location = useLocation();
	const { i18n } = useTranslation();
	const [curentCur, setCurentCur] = useState('');
	const [selectedCurrency, setSelectedCurrency] = useState('грн');
	useEffect(() => {
		if (data.length > 0 && selectedCurrency === '') {
			setCurentCur(data[0].UAH);
		} else if (data.length > 0 && selectedCurrency === 'грн') {
			setCurentCur(data[0].UAH);
		} else if (data.length > 0 && selectedCurrency === 'eur') {
			setCurentCur(data[0].EUR);
		} else if (data.length > 0 && selectedCurrency === 'usd') {
			setCurentCur(data[0].USD);
		}
	}, [selectedCurrency, data, curentCur]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
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
	function LanguagePath() {
		const { i18n } = useTranslation();
		const { lang } = useParams();
		const navigate = useNavigate();
		const curPath = location.pathname;
		useEffect(() => {
			if (lang && i18n.resolvedLanguage !== lang) {
				if (i18n.options.fallbackLng.includes(lang)) {
					i18n.changeLanguage(lang);
				} else {
					navigate('/' + i18n.resolvedLanguage + curPath, { replace: true });
				}
			}
		}, [lang]);
		return <Outlet />;
	}
	return (
		<div>
			<I18nextProvider i18n={i18n}>
				<Routes>
					<Route path='/'>
						<Route
							index
							element={
								<MainPage
									val={curentCur}
									setSelectedCurrency={setSelectedCurrency}
									selectedCurrency={selectedCurrency}
									windowDimensions={windowDimensions}
								/>
							}
						/>
						<Route path=':lang' element={<LanguagePath />}>
							<Route
								index
								element={
									<MainPage
										val={curentCur}
										setSelectedCurrency={setSelectedCurrency}
										selectedCurrency={selectedCurrency}
										windowDimensions={windowDimensions}
									/>
								}
							/>

							<Route
								path='contact'
								element={
									<Contact
										setSelectedCurrency={setSelectedCurrency}
										selectedCurrency={selectedCurrency}
									/>
								}
							/>

							<Route
								path='about'
								element={
									<AboutUs
										setSelectedCurrency={setSelectedCurrency}
										selectedCurrency={selectedCurrency}
									/>
								}
							/>
							<Route
								path='services'
								element={
									<Services
										setSelectedCurrency={setSelectedCurrency}
										selectedCurrency={selectedCurrency}
									/>
								}
							/>
							<Route
								path='category'
								element={
									<Category
										val={curentCur}
										windowDimensions={windowDimensions}
										setSelectedCurrency={setSelectedCurrency}
										selectedCurrency={selectedCurrency}
									/>
								}
							/>
							<Route
								path='category/:id'
								element={
									<Category
										val={curentCur}
										windowDimensions={windowDimensions}
										setSelectedCurrency={setSelectedCurrency}
										selectedCurrency={selectedCurrency}
									/>
								}
							></Route>

							<Route
								path='cabinet'
								element={
									<Cabinet
										setSelectedCurrency={setSelectedCurrency}
										selectedCurrency={selectedCurrency}
									/>
								}
							/>
							<Route
								path='auto/:id'
								element={
									<Auto
										val={curentCur}
										setSelectedCurrency={setSelectedCurrency}
										selectedCurrency={selectedCurrency}
									/>
								}
							/>
							<Route
								path='*'
								element={
									<NotFound
										setSelectedCurrency={setSelectedCurrency}
										selectedCurrency={selectedCurrency}
									/>
								}
							/>
						</Route>
					</Route>
				</Routes>
			</I18nextProvider>
			<Chat />
		</div>
	);
};

export default withFirebaseCollection('value')(App);

import AboutUs from './aboutUs/aboutUs';
import FirstBlock from './firstBlock/firstBlock';
import Footer from './footer/footer';
import SecondBlock from './secondBlock/secondBlock';
import SendForm from './sendForm/sendForm';
import { useTranslation, Trans } from 'react-i18next';
export default function MainPage({ windowDimensions }) {
	const { t, i18n } = useTranslation();
	document.title = `${t('description.seo.mainPage.title')}`; // Встановлюємо заголовок сторінки

	const metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription) {
		metaDescription.setAttribute(
			'content',
			`${t('description.seo.mainPage.description')}`,
		); // Встановлюємо опис сторінки
	} else {
		const newMetaDescription = document.createElement('meta');
		newMetaDescription.setAttribute('name', 'description');
		newMetaDescription.setAttribute(
			'content',
			`${t('description.seo.mainPage.description')}`,
		);
		document.head.appendChild(newMetaDescription); // Створюємо та вставляємо новий елемент <meta> з описом сторінки
	}

	return (
		<>
			<FirstBlock windowDimensions={windowDimensions} t={t} />
			<SendForm t={t} />
			<SecondBlock t={t} />
			<AboutUs t={t} />
			<Footer t={t} />
		</>
	);
}

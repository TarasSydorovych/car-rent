import keyWord from '../../../function/keyWord';
import HeaderAll from '../header/headerAll';
import { useTranslation, Trans } from 'react-i18next';
import Footer from '../mainPage/footer/footer';
import ConnectForm from './connectForm';
import css from './contact.module.css';
import ContactLabel from './contactLabel';
import MapAdnInfo from './mapAdnInfo';
export default function Contact({ selectedCurrency, setSelectedCurrency }) {
	const { t, i18n } = useTranslation();
	keyWord(
		`${t('description.seo.contact.title')}`,
		`$${t('description.seo.contact.description')}`,
	);
	return (
		<>
			<HeaderAll
				setSelectedCurrency={setSelectedCurrency}
				selectedCurrency={selectedCurrency}
			/>
			<ContactLabel t={t} />
			<ConnectForm t={t} />
			<MapAdnInfo t={t} />
			<Footer />
		</>
	);
}

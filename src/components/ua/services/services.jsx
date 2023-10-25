import keyWord from '../../../function/keyWord';
import HeaderAll from '../header/headerAll';
import Footer from '../mainPage/footer/footer';
import Advantages from './advantages';
import BlockDesc from './blockDesc';
import ContactLabel from './contactLabel';
import HowRent from './howRent';
import { useTranslation, Trans } from 'react-i18next';
import css from './services.module.css';
export default function Services({ selectedCurrency, setSelectedCurrency }) {
	const { t, i18n } = useTranslation();
	keyWord(
		`${t('description.seo.services.title')}`,
		`${t('description.seo.services.description')}`,
	);
	return (
		<section>
			<HeaderAll
				setSelectedCurrency={setSelectedCurrency}
				selectedCurrency={selectedCurrency}
			/>
			<ContactLabel t={t} />
			<BlockDesc t={t} />
			<Advantages t={t} />
			<HowRent t={t} />
			<Footer />
		</section>
	);
}

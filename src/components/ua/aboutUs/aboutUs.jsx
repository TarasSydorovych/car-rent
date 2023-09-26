import HeaderAll from '../header/headerAll';
import Footer from '../mainPage/footer/footer';
import AboutLabel from './aboutLabel';
import css from './aboutUs.module.css';
import BlockShortAb from './blockShortAb';
import ListOfQuolytu from './listOfQuolytu';
import keyWord from '../../../function/keyWord';
import { useTranslation, Trans } from 'react-i18next';
export default function AboutUs() {
	const { t, i18n } = useTranslation();
	keyWord(
		`${t('description.seo.about.title')}`,
		`${t('description.seo.about.description')}`,
	);
	return (
		<section>
			<HeaderAll />
			<AboutLabel t={t} />
			<BlockShortAb t={t} />
			<ListOfQuolytu t={t} />
			<Footer />
		</section>
	);
}

import keyWord from '../../../function/keyWord';
import HeaderAll from '../header/headerAll';
import Footer from '../mainPage/footer/footer';
import Advantages from './advantages';
import BlockDesc from './blockDesc';
import ContactLabel from './contactLabel';
import HowRent from './howRent';
import css from './services.module.css';
export default function Services() {
	keyWord(
		'Послуги з Оренди Авто в Львові | Широкий Вибір та Зручні Умови',
		'Дізнайтеся більше про послуги з оренди авто в Львові. Наша компанія пропонує різні моделі та класи автомобілів та зручні умови для вашої подорожі.',
	);
	return (
		<section>
			<HeaderAll />
			<ContactLabel />
			<BlockDesc />
			<Advantages />
			<HowRent />
			<Footer />
		</section>
	);
}

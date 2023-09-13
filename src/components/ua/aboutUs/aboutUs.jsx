import HeaderAll from '../header/headerAll';
import Footer from '../mainPage/footer/footer';
import AboutLabel from './aboutLabel';
import css from './aboutUs.module.css';
import BlockShortAb from './blockShortAb';
import ListOfQuolytu from './listOfQuolytu';
import keyWord from '../../../function/keyWord';
export default function AboutUs() {
	keyWord(
		'Car Rent Ukraine | Оренда Авто у Львові - Ваш надійний партнер',
		'Дізнайтеся більше про нас, провідну компанію з оренди авто в Львові. Ми пропонуємо високоякісний сервіс та широкий вибір автомобілів для вашої подорожі.',
	);
	return (
		<section>
			<HeaderAll />
			<AboutLabel />
			<BlockShortAb />
			<ListOfQuolytu />
			<Footer />
		</section>
	);
}

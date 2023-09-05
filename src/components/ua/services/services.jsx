import HeaderAll from '../header/headerAll';
import Footer from '../mainPage/footer/footer';
import Advantages from './advantages';
import BlockDesc from './blockDesc';
import ContactLabel from './contactLabel';
import HowRent from './howRent';
import css from './services.module.css';
export default function Services() {
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

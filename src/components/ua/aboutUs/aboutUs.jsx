import HeaderAll from '../header/headerAll';
import Footer from '../mainPage/footer/footer';
import AboutLabel from './aboutLabel';
import css from './aboutUs.module.css';
import BlockShortAb from './blockShortAb';
import ListOfQuolytu from './listOfQuolytu';
export default function AboutUs() {
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

import AboutUs from './aboutUs/aboutUs';
import FirstBlock from './firstBlock/firstBlock';
import Footer from './footer/footer';
import SecondBlock from './secondBlock/secondBlock';
import SendForm from './sendForm/sendForm';

export default function MainPage() {
	return (
		<>
			<FirstBlock />
			<SendForm />
			<SecondBlock />
			<AboutUs />
			<Footer />
		</>
	);
}

import HeaderAll from '../header/headerAll';

import Footer from '../mainPage/footer/footer';
import ConnectForm from './connectForm';
import css from './contact.module.css';
import ContactLabel from './contactLabel';
import MapAdnInfo from './mapAdnInfo';
export default function Contact() {
	return (
		<>
			<HeaderAll />
			<ContactLabel />
			<ConnectForm />
			<MapAdnInfo />
			<Footer />
		</>
	);
}

import css from './contact.module.css';
import { useState } from 'react';
export default function ConnectForm() {
	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const handlePhoneChange = (event) => {
		const value = event.target.value;
		setPhone(value);
	};
	const handleMessageChange = (event) => {
		const value = event.target.value;
		setMessage(value);
	};
	const handleEmailChange = (event) => {
		const value = event.target.value;
		setEmail(value);
	};
	const handleNameChange = (event) => {
		const value = event.target.value;
		setName(value);
	};
	const isSubmitDisabled = phone.length < 13;
	return (
		<div className={css.connectFormAllWrap}>
			<div className={css.blockWithPicS}></div>
			<div className={css.formSContact}>
				<h2 className={css.contactUsH2}>Давайте зв'яжемося</h2>
				<form className={css.contactFormik}>
					<input
						type='text'
						className={css.formicInputs}
						onChange={handleNameChange}
						id='text'
						name='name'
						required
						value={name}
						placeholder="Ваше ім'я"
					/>
					<input
						type='text'
						className={css.formicInputs}
						value={email}
						onChange={handleEmailChange}
						placeholder='Ваш Email'
					/>
					<input
						className={css.formicInputs}
						type='tel'
						id='phone'
						name='phone'
						pattern='[0-9]{10}'
						required
						value={phone}
						placeholder='Ваш телефон'
						onChange={handlePhoneChange}
					/>
					<textarea
						className={css.formicArea}
						placeholder='Ваше повідомлення'
						onChange={handleMessageChange}
						value={message}
					/>
					<button disabled={isSubmitDisabled} className={css.buttonFormicSend}>
						Відправити повідомлення
					</button>
				</form>
			</div>
		</div>
	);
}

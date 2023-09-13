import css from './contact.module.css';
import { useState } from 'react';
export default function ConnectForm({ t }) {
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
				<h2 className={css.contactUsH2}>
					{t('description.part1.contact.getConnect')}
				</h2>
				<form className={css.contactFormik}>
					<input
						type='text'
						className={css.formicInputs}
						onChange={handleNameChange}
						id='text'
						name='name'
						required
						value={name}
						placeholder={t('description.part1.contact.name')}
					/>
					<input
						type='text'
						className={css.formicInputs}
						value={email}
						onChange={handleEmailChange}
						placeholder={t('description.part1.contact.email')}
					/>
					<input
						className={css.formicInputs}
						type='tel'
						id='phone'
						name='phone'
						pattern='[0-9]{10}'
						required
						value={phone}
						placeholder={t('description.part1.contact.phone')}
						onChange={handlePhoneChange}
					/>
					<textarea
						className={css.formicArea}
						placeholder={t('description.part1.contact.message')}
						onChange={handleMessageChange}
						value={message}
					/>
					<button disabled={isSubmitDisabled} className={css.buttonFormicSend}>
						{t('description.part1.contact.buttonSend')}
					</button>
				</form>
			</div>
		</div>
	);
}

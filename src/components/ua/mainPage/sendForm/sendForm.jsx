import css from './sendForm.module.css';
import { useState } from 'react';
export default function SendForm({ t }) {
	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');
	const handlePhoneChange = (event) => {
		const value = event.target.value;
		setPhone(value);
	};
	const handleNameChange = (event) => {
		const value = event.target.value;
		setName(value);
	};
	const isSubmitDisabled = phone.length < 13;
	return (
		<section className={css.sendFormWrap}>
			<h2 className={css.formSendH2}>{t('description.part1.sendForm.orH')}</h2>
			<div className={css.formWrap}>
				<input
					type='text'
					id='text'
					name='name'
					required
					value={name}
					placeholder={`${t('description.part1.sendForm.name')}`}
					onChange={handleNameChange}
					className={css.inputName}
				/>
				<input
					type='tel'
					id='phone'
					name='phone'
					pattern='[0-9]{10}'
					required
					value={phone}
					placeholder={`${t('description.part1.sendForm.phone')}`}
					onChange={handlePhoneChange}
					className={css.inputPhone}
				/>
				<button
					className={css.buttonSend}
					type='submit'
					disabled={isSubmitDisabled}
				>
					{t('description.part1.sendForm.orB')}
				</button>
			</div>
		</section>
	);
}

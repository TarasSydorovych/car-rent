// import css from './sendForm.module.css';
// import { useState } from 'react';
// export default function SendForm({ t }) {
// 	const [phone, setPhone] = useState('');
// 	const [name, setName] = useState('');
// 	const handlePhoneChange = (event) => {
// 		const value = event.target.value;
// 		setPhone(value);
// 	};
// 	const handleNameChange = (event) => {
// 		const value = event.target.value;
// 		setName(value);
// 	};
// 	const isSubmitDisabled = phone.length < 13;
// 	return (
// 		<section className={css.sendFormWrap}>
// 			<h2 className={css.formSendH2}>{t('description.part1.sendForm.orH')}</h2>
// 			<div className={css.formWrap}>
// 				<input
// 					type='text'
// 					id='text'
// 					name='user_name'
// 					required
// 					value={name}
// 					placeholder={`${t('description.part1.sendForm.name')}`}
// 					onChange={handleNameChange}
// 					className={css.inputName}
// 				/>
// 				<input
// 					type='tel'
// 					id='phone'
// 					name='Phone'
// 					pattern='[0-9]{10}'
// 					required
// 					value={phone}
// 					placeholder={`${t('description.part1.sendForm.phone')}`}
// 					onChange={handlePhoneChange}
// 					className={css.inputPhone}
// 				/>
// 				<button
// 					className={css.buttonSend}
// 					type='submit'
// 					disabled={isSubmitDisabled}
// 				>
// 					{t('description.part1.sendForm.orB')}
// 				</button>
// 			</div>
// 		</section>
// 	);
// }
import css from './sendForm.module.css';
import { useState, useRef, useEffect } from 'react';
import sendEmail from '../../../../function/sendMessage';

export default function SendForm({ t }) {
	const form = useRef();
	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phonecheck, setPhonecheck] = useState(false);
	const [namecheck, setNamecheck] = useState(false);
	const [clickCH, setClickCH] = useState(false);
	const [clickCHErr, setClickCHErr] = useState('Заповніть усі поля');
	const [emailcheck, setEmailcheck] = useState(false);
	const [phonecheckErr, setPhonecheckErr] = useState('Ваш телефон некоректний');
	const [namecheckErr, setNamecheckErr] = useState(
		'Поле імені не може бути порожнім',
	);
	const [emailcheckErr, setEmailcheckErr] = useState(
		'Поле електронної пошти не може бути порожнім',
	);
	const [validFrom, setValidFrom] = useState(false);
	useEffect(() => {
		if (phonecheckErr || namecheckErr) {
			setValidFrom(false);

			setClickCHErr('Заповніть усі поля');
		} else {
			setValidFrom(true);
			setClickCHErr('');
		}
	}, [phonecheckErr, namecheckErr, emailcheckErr]);

	const nameHandler = (e) => {
		setName(e.target.value);
		if (e.target.value.length < 2) {
			setNamecheckErr(
				"Ім'я занадто коротка. Назва має містити більше 2 символів",
			);
			if (!e.target.value) {
				setNamecheckErr('Поле імені не може бути порожнім');
			}
		} else {
			setNamecheckErr('');
		}
	};
	const namePhone = (e) => {
		const value = e.target.value;
		setPhone(value);
		const num = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
		if (
			!value ||
			(value && value.match(/\d/g) && value.match(/\d/g).length < 10)
		) {
			setPhonecheckErr(`${t('description.part1.form.warningFirstPhone')}`);
		} else {
			setPhonecheckErr('');
		}
	};
	const blurHandle = (e) => {
		switch (e.target.name) {
			case 'user_name':
				setNamecheck(true);
				break;
			case 'Phone':
				setPhonecheck(true);
				break;
		}
	};

	return (
		<section className={css.sendFormWrap}>
			<h2 className={css.formSendH2}>{t('description.part1.sendForm.orH')}</h2>
			<form
				className={css.formWrap}
				type='submit'
				ref={form}
				onSubmit={(e) => {
					if (!validFrom) {
						e.preventDefault();
						setClickCH(true);
						setClickCHErr('Заповніть усі деталі');
					} else {
						setClickCHErr('');
						sendEmail(form, e);
						setName('');
						setPhone('');
					}
				}}
			>
				{namecheck && namecheckErr && (
					<div style={{ color: 'red' }}>{namecheckErr}</div>
				)}
				<input
					onChange={(e) => nameHandler(e)}
					onBlur={(e) => blurHandle(e)}
					type='text'
					name='user_name'
					placeholder={`${t('description.part1.sendForm.name')}`}
					className={css.inputName}
					value={name}
				/>
				<input
					onChange={(e) => namePhone(e)}
					onBlur={(e) => blurHandle(e)}
					type='text'
					name='Phone'
					placeholder={`${t('description.part1.sendForm.phone')}`}
					className={css.inputPhone}
					value={phone}
				/>

				<button className={css.buttonSend} type='submit'>
					{t('description.part1.sendForm.orB')}
				</button>
			</form>
		</section>
	);
}

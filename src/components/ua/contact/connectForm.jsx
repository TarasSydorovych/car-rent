import css from './contact.module.css';
import { useState, useRef, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import sendEmail from '../../../function/sendMessage';
export default function ConnectForm() {
	const { t, i18n } = useTranslation();
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
		`${t('description.part1.form.warningSeconPhone')}`,
	);
	const [emailcheckErr, setEmailcheckErr] = useState(
		'Поле електронної пошти не може бути порожнім',
	);
	const [validFrom, setValidFrom] = useState(false);
	const emailHandler = (e) => {
		setEmail(e.target.value);
		const re =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailcheckErr('Ваш email не коректний');
		} else {
			setEmailcheckErr('');
		}
	};
	useEffect(() => {
		if (phonecheckErr || namecheckErr) {
			setValidFrom(false);

			setClickCHErr(`${t('description.part1.form.allInp')}`);
		} else {
			setValidFrom(true);
			setClickCHErr('');
		}
	}, [phonecheckErr, namecheckErr, emailcheckErr]);

	const nameHandler = (e) => {
		setName(e.target.value);
		if (e.target.value.length < 2) {
			setNamecheckErr(`${t('description.part1.form.warningFirstName')}`);
			if (!e.target.value) {
				setNamecheckErr(`${t('description.part1.form.warningSecondName')}`);
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
	const isSubmitDisabled = phone.length < 10;
	return (
		<div className={css.connectFormAllWrap}>
			<div className={css.blockWithPicS}></div>
			<div className={css.formSContact}>
				<h2 className={css.contactUsH2}>
					{t('description.part1.contact.getConnect')}
				</h2>
				<form
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
							setEmail('');
						}
					}}
					className={css.contactFormik}
				>
					{namecheck && namecheckErr && (
						<div style={{ color: 'red' }}>{namecheckErr}</div>
					)}
					<input
						type='text'
						className={css.formicInputs}
						onChange={(e) => nameHandler(e)}
						onBlur={(e) => blurHandle(e)}
						name='user_name'
						id='text'
						required
						value={name}
						placeholder={t('description.part1.contact.name')}
					/>
					{emailcheck && emailcheckErr && (
						<div style={{ color: 'red' }}>{emailcheckErr}</div>
					)}
					<input
						type='text'
						className={css.formicInputs}
						name='user_email'
						value={email}
						onChange={(e) => emailHandler(e)}
						onBlur={(e) => blurHandle(e)}
						placeholder={t('description.part1.contact.email')}
					/>
					{phonecheck && phonecheckErr && (
						<div style={{ color: 'red' }}>{phonecheckErr}</div>
					)}
					<input
						className={css.formicInputs}
						type='tel'
						id='phone'
						name='Phone'
						value={phone}
						placeholder={t('description.part1.contact.phone')}
						onChange={(e) => namePhone(e)}
						onBlur={(e) => blurHandle(e)}
					/>
					<textarea
						className={css.formicArea}
						placeholder={t('description.part1.contact.message')}
						name='message'
					/>
					<button disabled={isSubmitDisabled} className={css.buttonFormicSend}>
						{t('description.part1.contact.buttonSend')}
					</button>
				</form>
			</div>
		</div>
	);
}

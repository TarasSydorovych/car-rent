import css from './category.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useTranslation, Trans } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import sendEmail from '../../../function/sendMessage';
export default function SendOrder({ setSendMessage }) {
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
	const closeForm = () => {
		setSendMessage(false);
	};
	const isSubmitDisabled = phone.length < 10;
	return (
		<section className={css.sendSectionWrapFull}>
			<div className={css.sendSectionWrap}>
				<AiOutlineClose className={css.aiOutlineClose} onClick={closeForm} />
				<h2 className={css.titleForForm}>
					{t('description.part1.form.title')}
				</h2>
				<form
					type='submit'
					ref={form}
					onSubmit={(e) => {
						if (!validFrom) {
							e.preventDefault();
							setClickCH(true);
							setClickCHErr(`${t('description.part1.form.allInp')}`);
						} else {
							setClickCHErr('');
							sendEmail(form, e);
							setName('');
							setPhone('');
						}
					}}
					className={css.inputWrap}
				>
					<div className={css.inpAndPWr}>
						<p className={css.inpName}>{t('description.part1.form.name')}</p>
						<input
							type='text'
							id='text'
							name='user_name'
							required
							value={name}
							className={css.inputForm}
							placeholder={`${t('description.part1.form.nameHolder')}`}
							onChange={(e) => nameHandler(e)}
							onBlur={(e) => blurHandle(e)}
						/>
						{namecheck && namecheckErr && (
							<div style={{ color: 'red' }}>{namecheckErr}</div>
						)}
					</div>
					<div className={css.inpAndPWr}>
						<p className={css.inpName}>{t('description.part1.form.phone')}</p>
						<input
							className={css.inputForm}
							type='tel'
							id='phone'
							name='Phone'
							value={phone}
							placeholder={`${t('description.part1.form.phoneHolder')}`}
							onChange={(e) => namePhone(e)}
							onBlur={(e) => blurHandle(e)}
						/>
						{phonecheck && phonecheckErr && (
							<div style={{ color: 'red' }}>{phonecheckErr}</div>
						)}
					</div>
					<button
						type='submit'
						disabled={isSubmitDisabled}
						className={css.buttonInForm}
					>
						{t('description.part1.form.button')}
					</button>
				</form>
			</div>
		</section>
	);
}

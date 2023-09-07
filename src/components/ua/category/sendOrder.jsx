import css from './category.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

export default function SendOrder({ setSendMessage }) {
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
	const closeForm = () => {
		setSendMessage(false);
	};
	const isSubmitDisabled = phone.length < 13;
	return (
		<section className={css.sendSectionWrapFull}>
			<div className={css.sendSectionWrap}>
				<AiOutlineClose className={css.aiOutlineClose} onClick={closeForm} />
				<h2 className={css.titleForForm}>
					Заповніть форму і наші менеджери звʼяжуться з Вами для підбору
					оптимального варіанту
				</h2>
				<div className={css.inputWrap}>
					<div className={css.inpAndPWr}>
						<p className={css.inpName}>Імʼя</p>
						<input
							type='text'
							id='text'
							name='name'
							required
							value={name}
							className={css.inputForm}
							placeholder='Введіть ваше імʼя'
							onChange={handleNameChange}
						/>
					</div>
					<div className={css.inpAndPWr}>
						<p className={css.inpName}>Ваш номер телефону</p>
						<input
							className={css.inputForm}
							type='tel'
							id='phone'
							name='phone'
							pattern='[0-9]{10}'
							required
							value={phone}
							placeholder='Ваш телефон'
							onChange={handlePhoneChange}
						/>
					</div>
					<button
						type='submit'
						disabled={isSubmitDisabled}
						className={css.buttonInForm}
					>
						Підібрати авто
					</button>
				</div>
			</div>
		</section>
	);
}

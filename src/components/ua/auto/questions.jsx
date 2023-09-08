import { useState } from 'react';
import css from './auto.module.css';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
export default function Questions({ oneProd }) {
	const [queOne, setqueOne] = useState(false);

	const openFistBlock = () => {
		setqueOne(!queOne);
	};
	const questions = [
		{
			title: `Скільки коштує прокат ${oneProd.autoName} у Львові?`,
			answer: `Ціна на прокат автомобіля у Львові стартує від ${oneProd.fourPrice} UAH на добу,
							все залежить від обраного Вами автомобіля та періоду прокату. Чим
							більший термін оренди, тим нижча вартість прокату на добу.
							Вартість оренди автомобілів від компанії Car Rent Ukraine.`,
		},
		{
			title: `Які умови оренди`,
			answer: `Умови дуже прості. Клієнт повинен бути старше 21 року та мати досвід водіння більше 2-х років. Якщо ці умови не дотримані, то оренда можлива зі збільшеною заставою.`,
		},
		{
			title: `Яка застава необхідна для оренди ${oneProd.autoName} у Львові?`,
			answer: `Застава для оренди ${oneProd.autoName} у Львові становить ${oneProd.rentPay} UAH. `,
		},
		{
			title: `Які документи потрібні для оренди?`,
			answer: `Перед видачею автомобіля, необхідно надати оригінал паспорта та посвідчення водія з відповідною категорією. Для іноземців — міжнародні права та закордонний паспорт.`,
		},
		{
			title: `Які умови щодо пробігу?`,
			answer: `
На всі автомобілі встановлено обмеження 100 км на добу. Можна збільшити цю цифру до 400 км/день та більше, вибравши розширений пакет на прокат авто.`,
		},
		{
			title: `Які умови страхування?`,
			answer: `Повне страхування. Автомобілі застраховані по КАСКО та ОСЦПВ.`,
		},
		{
			title: `Які способи оплати у Києві?`,
			answer: `Можлива готівкова, безготівкова форма з ПДВ та оплата на банківську картку.`,
		},
		{
			title: `Чи можна на вашому авто виїхати за кордон?`,
			answer: `Так, на наших автомобілях можно виїжджати в страни Европейського союзу. Для цього ми додатково оформлюємо пакет - доручення для виїзду на авто та страховку Зелену картку (пакет сплачується окремо). Для оформлення пакету необхідно - 1-3 дня.`,
		},
		{
			title: `Можна взяти авто на весілля?`,
			answer: `Так це можливо. Але ми не можемо гарантувати наявність конкретного авто та, в разі підміни, будемо змушені надати авто такого ж або вищого класу за раніше обумовленими домовленостями (умови та вартість).`,
		},
		{
			title: `Що, якщо я завдам шкоди автомобілю?`,
			answer: `У цьому випадку відразу телефонуйте нам. З Вами зв'яжеться наш страховий агент та розповість, що потрібно робити. Всі автомобілі повністю застраховані, вам не варто турбуватися.`,
		},
		{
			title: `Чи можливе перебування за кермом кількох людей?`,
			answer: `Так, можливо. Для цього потрібно додати додаткового водія в договір прокату. Ця послуга безкоштовна.`,
		},
		{
			title: `Яка вартість додаткових послуг, таких як: навігатор, дитяче крісло, WI-FI роутер?`,
			answer: `Так, всі ці опції є. Потрібно нас заздалегідь попередити. Оренда по 3 євро на добу або 15 євро на весь прокат при тривалій оренді.`,
		},
		{
			title: `Чи є можливість орендувати авто на юридичну особу?`,
			answer: `Так, з юр. особами працюємо. Оплату приймаємо безготівковою формою з ПДВ. `,
		},
		{
			title: `Що входить у вартість оренди?`,
			answer: `У вартість оренди авто входить: повністю застрахований, чистий автомобіль з повним баком, персональний онлайн менеджер на весь період прокату та цілодобова підтримка.`,
		},
	];
	const [openedQuestionIndex, setOpenedQuestionIndex] = useState(null);

	const toggleQuestion = (index) => {
		if (openedQuestionIndex === index) {
			setOpenedQuestionIndex(null); // Закрити відкрите питання
		} else {
			setOpenedQuestionIndex(index); // Відкрити нове питання
		}
	};
	return (
		<section className={css.sectionWrap}>
			<h3 className={css.h3InQue}>
				ПИТАННЯ І ВІДПОВІДІ ПРО ОРЕНДУ {oneProd.autoName} У ЛЬВОВІ
			</h3>
			{/*<div className={css.oneQuestionWrap}>
				<div className={css.oneQuestionWrapSmall}>
					<div className={css.questionTitle} onClick={openFistBlock}>
						<h2 className={css.queTitle}>
							Скільки коштує прокат {oneProd.autoName} у Львові?
						</h2>
						{!queOne && <AiOutlineDown className={css.aiOutlineDown} />}
						{queOne && <AiOutlineUp className={css.aiOutlineDown} />}
					</div>
					{queOne && <div className={css.questionAnswer}></div>}
				</div>
    </div>*/}
			<div className={css.oneQuestionWrap}>
				{questions.map((question, index) => (
					<div className={css.oneQuestionWrapSmall} key={index}>
						<div
							className={css.questionTitle}
							onClick={() => toggleQuestion(index)}
						>
							<h2 className={css.queTitle}>{question.title}</h2>
							{openedQuestionIndex === index ? (
								<AiOutlineUp className={css.aiOutlineDown} />
							) : (
								<AiOutlineDown className={css.aiOutlineDown} />
							)}
						</div>
						{openedQuestionIndex === index && (
							<div className={css.questionAnswer}>{question.answer}</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}

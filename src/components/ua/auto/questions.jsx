import { useState } from 'react';
import css from './auto.module.css';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
export default function Questions({ oneProd, t }) {
	const [queOne, setqueOne] = useState(false);

	const openFistBlock = () => {
		setqueOne(!queOne);
	};
	const questions = [
		{
			title: `${t('description.part1.auto.firstAnsvTitileFirst')} ${
				oneProd.autoName
			} ${t('description.part1.auto.secondTitle')}?`,
			answer: `${t('description.part1.auto.firstAnsvDescFirst')} ${
				oneProd.fourPrice * 40
			} ${t('description.part1.auto.firstAnsvDesceSecond')}`,
		},
		{
			title: `${t('description.part1.que.titleq')}`,
			answer: `${t('description.part1.que.answerq')}`,
		},
		{
			title: `${t('description.part1.auto.secondAnsvTitileFirst')} ${
				oneProd.autoName
			} ${t('description.part1.auto.secondTitle')}?`,
			answer: `${t('description.part1.auto.secondAnsvDescFirst')} ${
				oneProd.autoName
			} ${t('description.part1.auto.secondAnsvDesceSecond')} ${
				oneProd.rentPay * 40
			} UAH. `,
		},
		{
			title: `${t('description.part1.que.titlew')}`,
			answer: `${t('description.part1.que.answerw')}`,
		},
		{
			title: `${t('description.part1.que.titlee')}`,
			answer: `${t('description.part1.que.answee')}`,
		},
		{
			title: `${t('description.part1.que.titler')}`,
			answer: `${t('description.part1.que.answerr')}`,
		},
		{
			title: `${t('description.part1.que.titlet')}`,
			answer: `${t('description.part1.que.answert')}`,
		},
		{
			title: `${t('description.part1.que.titley')}`,
			answer: `${t('description.part1.que.answery')}`,
		},
		{
			title: `${t('description.part1.que.titleu')}`,
			answer: `${t('description.part1.que.answeru')}`,
		},
		{
			title: `${t('description.part1.que.titlei')}`,
			answer: `${t('description.part1.que.answeri')}`,
		},
		{
			title: `${t('description.part1.que.titleo')}`,
			answer: `${t('description.part1.que.answero')}`,
		},
		{
			title: `${t('description.part1.que.titlep')}`,
			answer: `${t('description.part1.que.answerp')}`,
		},
		{
			title: `${t('description.part1.que.titlea')}`,
			answer: `${t('description.part1.que.answera')}`,
		},
		{
			title: `${t('description.part1.que.titles')}`,
			answer: `${t('description.part1.que.answers')}`,
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
				{t('description.part1.auto.titleQuestionFirst')}&nbsp;
				{oneProd.autoName}&nbsp;{t('description.part1.auto.secondTitle')}
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

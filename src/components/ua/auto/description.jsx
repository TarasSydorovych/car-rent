import css from './auto.module.css';
export default function Description({ oneProd, t }) {
	return (
		<section className={css.someDescEnd}>
			<div className={css.theText}>
				<p className={css.theTextP}>
					{t('description.part1.description.fir')}&nbsp;
					{oneProd.autoName}&nbsp;
					{t('description.part1.description.second')}
					<br /> {t('description.part1.description.thre')}&nbsp;
					{oneProd.autoName}&nbsp;
					{t('description.part1.description.four')}
					<br /> {t('description.part1.description.five')}&nbsp;
					{oneProd.autoName}&nbsp; {t('description.part1.description.six')}
					<br />
					{t('description.part1.description.seven')}&nbsp;
					{oneProd.autoName}&nbsp;
					{t('description.part1.description.eight')}
					<br /> {t('description.part1.description.listFirst')}
					<br /> {t('description.part1.description.listSecond')}
					<br /> {t('description.part1.description.listThre')}
					<br /> {t('description.part1.description.listFour')}
					<br />
					{t('description.part1.description.rentPay')}&nbsp;
					{oneProd.autoName}&nbsp; {t('description.part1.description.dayRent')}
					<br />
					{t('description.part1.description.detalInfo')}
				</p>
			</div>
		</section>
	);
}

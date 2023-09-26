import HeaderAll from '../header/headerAll';
import Footer from '../mainPage/footer/footer';
import { useParams, useLocation } from 'react-router-dom';
import css from './auto.module.css';
import { useEffect, useState } from 'react';
import withFirebaseCollection from '../../HOK/withFirebaseCollection';
import SendOrder from '../category/sendOrder';
import Questions from './questions';
import Description from './description';
import keyWord from '../../../function/keyWord';
import { useTranslation, Trans } from 'react-i18next';
const Auto = ({ data }) => {
	const { t, i18n } = useTranslation();
	const [oneProd, setOneProd] = useState();
	const [haveProd, setHaveProd] = useState(false);
	const [sendMessage, setSendMessage] = useState(false);
	const [firstPrice, setFirstPrice] = useState();
	const [secondPrice, setSecondPrice] = useState();
	const [threePrice, setThreePrice] = useState();
	const [fourPrice, setFourPrice] = useState();
	const [rentPay, setRentPay] = useState();
	let params = useParams();
	useEffect(() => {
		let isMounted = true;
		for (let i = 0; i < data.length; i++) {
			if (data[i].uid === params.id) {
				setOneProd(data[i]);
				const numberOne = parseFloat(data[i].firstPrice) * 40;
				const numberTwo = parseFloat(data[i].secondPrice) * 40;
				const numberThree = parseFloat(data[i].threePrice) * 40;
				const numberFour = parseFloat(data[i].fourPrice) * 40;
				const numberRent = parseFloat(data[i].rentPay) * 40;
				const roundedNumberOne = Math.round(numberOne);
				const roundedNumberTwo = Math.round(numberTwo);
				const roundedNumberThree = Math.round(numberThree);
				const roundedNumberFour = Math.round(numberFour);
				const roundedNumberRent = Math.round(numberRent);
				setFirstPrice(roundedNumberOne);
				setSecondPrice(roundedNumberTwo);
				setThreePrice(roundedNumberThree);
				setFourPrice(roundedNumberFour);
				setRentPay(roundedNumberRent);
				setHaveProd(true);
			}
		}
	}, [data]);
	const openMessage = () => {
		setSendMessage(true);
	};
	if (haveProd) {
		keyWord(
			`${t('description.seo.auto.titleFirst')} ${oneProd.autoName} ${t(
				'description.seo.auto.titleSecond',
			)}`,
			`${t('description.seo.auto.descriptionFirst')} ${oneProd.autoName} ${t(
				'description.seo.auto.descriptionSecond',
			)} ${oneProd.autoName} ${t('description.seo.auto.descriptionThre')}`,
		);
	}

	return (
		<>
			<HeaderAll />
			{haveProd && (
				<div className={css.fullProductWrap}>
					<div className={css.smallWrapForAuto}>
						<div className={css.wrapAuto}>
							<img className={css.picInProd} src={oneProd.imageList[0]} />
						</div>
						<div className={css.wrapInformation}>
							<h1 className={css.titleAutoH1}>
								{t('description.part1.auto.firstTitle')}&nbsp;{oneProd.autoName}
								&nbsp; {t('description.part1.auto.secondTitle')}
							</h1>
							<p className={css.rentZa}>
								{t('description.part1.auto.rentPay')}&nbsp; {rentPay}
								{t('description.part1.auto.curency')}
							</p>
							<p className={css.rentManual}>
								{t('description.part1.auto.typManual')}&nbsp; {oneProd.manual}
							</p>
							<div className={css.priceInProdWrap}>
								<div className={css.smallWrapPrice}>
									<p className={css.price}>
										{firstPrice}
										{t('description.part1.auto.curency')}
									</p>
									<p className={css.data}>
										1-2{t('description.part1.auto.dib')}
									</p>
								</div>
								<div className={css.smallWrapPriceSec}>
									<p className={css.price}>
										{secondPrice}
										{t('description.part1.auto.curency')}
									</p>
									<p className={css.data}>
										3-7{t('description.part1.auto.dib')}
									</p>
								</div>
								<div className={css.smallWrapPrice}>
									<p className={css.price}>
										{threePrice}
										{t('description.part1.auto.curency')}
									</p>
									<p className={css.data}>
										8+{t('description.part1.auto.dib')}
									</p>
								</div>
								<div className={css.smallWrapPriceSec}>
									<p className={css.price}>
										{fourPrice}
										{t('description.part1.auto.curency')}
									</p>
									<p className={css.data}>
										30+{t('description.part1.auto.dib')}
									</p>
								</div>
							</div>
							<button onClick={openMessage} className={css.sendAnyMess}>
								{t('description.part1.auto.buttonRent')}
							</button>
						</div>
					</div>
				</div>
			)}
			{sendMessage && <SendOrder setSendMessage={setSendMessage} />}
			{haveProd && <Questions oneProd={oneProd} t={t} />}
			{haveProd && <Description oneProd={oneProd} t={t} />}
			<Footer />
		</>
	);
};
export default withFirebaseCollection('product')(Auto);

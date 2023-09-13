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
const Auto = ({ data }) => {
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
			`Найкраща пропозиція: оренда ${oneProd.autoName} у Львові Car Rent Ukraine`,
			`Орендуйте ${oneProd.autoName} в Львові від Car Rent Ukraine за доступною ціною. Забронюйте ${oneProd.autoName} прямо зараз та отримайте найкращу пропозицію.`,
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
								Оренда&nbsp;{oneProd.autoName}&nbsp; у Львові
							</h1>
							<p className={css.rentZa}>Вартість застави&nbsp; {rentPay}грн</p>
							<p className={css.rentManual}>
								Тип трансмісії&nbsp; {oneProd.manual}
							</p>
							<div className={css.priceInProdWrap}>
								<div className={css.smallWrapPrice}>
									<p className={css.price}>{firstPrice}грн</p>
									<p className={css.data}>1-2діб</p>
								</div>
								<div className={css.smallWrapPriceSec}>
									<p className={css.price}>{secondPrice}грн</p>
									<p className={css.data}>3-7діб</p>
								</div>
								<div className={css.smallWrapPrice}>
									<p className={css.price}>{threePrice}грн</p>
									<p className={css.data}>8+діб</p>
								</div>
								<div className={css.smallWrapPriceSec}>
									<p className={css.price}>{fourPrice}грн</p>
									<p className={css.data}>30+діб</p>
								</div>
							</div>
							<button onClick={openMessage} className={css.sendAnyMess}>
								Замовити автомобіль
							</button>
						</div>
					</div>
				</div>
			)}
			{sendMessage && <SendOrder setSendMessage={setSendMessage} />}
			{haveProd && <Questions oneProd={oneProd} />}
			{haveProd && <Description oneProd={oneProd} />}
			<Footer />
		</>
	);
};
export default withFirebaseCollection('product')(Auto);

import HeaderAll from '../header/headerAll';
import Footer from '../mainPage/footer/footer';
import { useParams, useLocation } from 'react-router-dom';
import css from './auto.module.css';
import { useEffect, useState } from 'react';
import withFirebaseCollection from '../../HOK/withFirebaseCollection';
import SendOrder from '../category/sendOrder';
import Questions from './questions';
import Description from './description';
import { PhotoProvider, PhotoSlider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import keyWord from '../../../function/keyWord';
import { useTranslation, Trans } from 'react-i18next';
const Auto = ({ data, val }) => {
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
				const cur = parseFloat(val[0].val);
				setOneProd(data[i]);
				const numberOne = parseFloat(data[i].firstPrice) * cur;
				const numberTwo = parseFloat(data[i].secondPrice) * cur;
				const numberThree = parseFloat(data[i].threePrice) * cur;
				const numberFour = parseFloat(data[i].fourPrice) * cur;
				const numberRent = parseFloat(data[i].rentPay) * cur;
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
					{val.length > 0 && (
						<div className={css.smallWrapForAuto}>
							<div className={css.wrNew}>
								<div className={css.wrapAuto}>
									<img
										src={oneProd.imageList[0]}
										alt=''
										className={css.picInProd}
									/>
								</div>
								<PhotoProvider
									speed={() => 800}
									easing={(type) =>
										type === 2
											? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
											: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
									}
									toolbarRender={({ rotate, onRotate }) => {
										return (
											<svg
												className='PhotoView-Slider__toolbarIcon'
												onClick={() => onRotate(rotate + 90)}
											/>
										);
									}}
								>
									<div className={css.allFotoWrap}>
										{oneProd.imageList.map((item, index) => (
											<PhotoView key={index} src={item}>
												<div className={css.fotoWr}>
													<img src={item} alt='' className={css.picInProdAll} />
												</div>
											</PhotoView>
										))}
									</div>
								</PhotoProvider>
							</div>
							<div className={css.wrapInformation}>
								<h1 className={css.titleAutoH1}>
									{t('description.part1.auto.firstTitle')}&nbsp;
									{oneProd.autoName}
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
											1-2{t('description.part1.auto.doba')}
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
					)}
				</div>
			)}
			{sendMessage && <SendOrder setSendMessage={setSendMessage} />}
			{val.length > 0 && (
				<>{haveProd && <Questions oneProd={oneProd} t={t} val={val} />}</>
			)}
			{val.length > 0 && (
				<>{haveProd && <Description oneProd={oneProd} t={t} val={val} />}</>
			)}
			<Footer />
		</>
	);
};
export default withFirebaseCollection('product')(Auto);

import css from './aboutUs.module.css';
import img1 from '../../../../img/auto1.jpeg';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
export default function AboutUs({ t }) {
	return (
		<div className={css.aboutUsWrap}>
			<div className={css.aboutUsSmallWrap}>
				<h3 className={css.aboutUsH3}>
					{' '}
					{t('description.part1.aboutBlock.abou')}
				</h3>
				<p className={css.aboutUsP}>{t('description.part1.aboutBlock.desc')}</p>
				<div className={css.picAndTextWr}>
					<img
						src={img1}
						className={css.abouttPic}
						alt='Про компанію CarRentUkraine'
					/>
					<div className={css.wrapPIn}>
						<div className={css.firstPWrap}>
							<IoMdCheckmarkCircleOutline className={css.styleP} />
							<p className={css.styleP}>
								{t('description.part1.aboutBlock.desOne')}
							</p>
						</div>
						<div className={css.firstPWrap}>
							<IoMdCheckmarkCircleOutline className={css.styleP} />
							<p className={css.styleP}>
								{t('description.part1.aboutBlock.desTwo')}
							</p>
						</div>
						<div className={css.firstPWrap}>
							<IoMdCheckmarkCircleOutline className={css.styleP} />
							<p className={css.styleP}>
								{' '}
								{t('description.part1.aboutBlock.desThre')}
							</p>
						</div>
						<Link to='/about' className={css.buttonDetail}>
							{t('description.part1.aboutBlock.but')}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

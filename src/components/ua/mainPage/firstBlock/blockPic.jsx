import { Link } from 'react-router-dom';
import css from './firstBlock.module.css';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export default function BlockPic({ t }) {
	return (
		<section className={css.hero}>
			<div className={css.blockWithAutoWrap}>
				<div className={css.hWrap}>
					<h1 className={css.topH1InFirst}>
						{t('description.part1.blockPic.rentT')}
					</h1>
					<h1 className={css.topH1InFirstSecond}>
						{t('description.part1.blockPic.wall')}
					</h1>
					<div className={css.wrapPIn}>
						<div className={css.firstPWrap}>
							<IoMdCheckmarkCircleOutline className={css.styleP} />
							<p className={css.styleP}>
								{t('description.part1.blockPic.new')}
							</p>
						</div>
						<div className={css.firstPWrap}>
							<IoMdCheckmarkCircleOutline className={css.styleP} />
							<p className={css.styleP}>
								{t('description.part1.blockPic.disc')}
							</p>
						</div>
						<div className={css.firstPWrap}>
							<IoMdCheckmarkCircleOutline className={css.styleP} />
							<p className={css.styleP}>
								{t('description.part1.blockPic.auto')}
							</p>
						</div>
					</div>
					<Link to='/category' className={css.titleButton}>
						{t('description.part1.blockPic.chos')}
					</Link>
				</div>
				<div></div>
			</div>
		</section>
	);
}

import css from './contact.module.css';
import { IoIosPin } from 'react-icons/io';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

export default function MapAdnInfo({ t }) {
	return (
		<section className={css.wrapMapAdnLocal}>
			<h5 className={css.mapH5}>
				{t('description.part1.contact.beInContact')}
			</h5>
			<h1 className={css.ourContactInf}>
				{t('description.part1.contact.ourInfo')}
			</h1>
			<div className={css.wrapMapInf}>
				<div className={css.wrapSmSm}>
					<div className={css.wrapSmSmSm}>
						<div className={css.informWrapText}>
							<IoIosPin className={css.iconFirst} />
							<div className={css.informWrapTextSm}>
								<h4 className={css.titleAdr}>
									{t('description.part1.contact.adressFir')}
								</h4>
								<p className={css.titleP}>
									{t('description.part1.contact.adressTwo')}
								</p>
							</div>
						</div>
						<div className={css.informWrapText}>
							<AiOutlinePhone className={css.iconFirst} />
							<div className={css.informWrapTextSm}>
								<h4 className={css.titleAdr}>
									{t('description.part1.contact.tel')}
								</h4>
								<p className={css.titleP}>
									<a href='tel:+380984549929' className={css.titleP}>
										+380984549929
									</a>
								</p>
							</div>
						</div>
						<div className={css.informWrapText}>
							<AiOutlineMail className={css.iconFirst} />
							<div className={css.informWrapTextSm}>
								<h4 className={css.titleAdr}>Email</h4>
								<p className={css.titleP}>rentautoukraine.com@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
				<div className={css.pictureFon}></div>
			</div>
		</section>
	);
}

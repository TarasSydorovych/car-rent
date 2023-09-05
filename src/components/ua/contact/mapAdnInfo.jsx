import css from './contact.module.css';
import { IoIosPin } from 'react-icons/io';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

export default function MapAdnInfo() {
	return (
		<section className={css.wrapMapAdnLocal}>
			<h5 className={css.mapH5}>ЗАЛИШАЙТЕСЯ З НАМИ НА ЗВ'ЯЗКУ</h5>
			<h1 className={css.ourContactInf}>Наша контактна інформація</h1>
			<div className={css.wrapMapInf}>
				<div className={css.wrapSmSm}>
					<div className={css.wrapSmSmSm}>
						<div className={css.informWrapText}>
							<IoIosPin className={css.iconFirst} />
							<div className={css.informWrapTextSm}>
								<h4 className={css.titleAdr}>Адреса</h4>
								<p className={css.titleP}>Львів, вул. Личаківськ, 1А</p>
							</div>
						</div>
						<div className={css.informWrapText}>
							<AiOutlinePhone className={css.iconFirst} />
							<div className={css.informWrapTextSm}>
								<h4 className={css.titleAdr}>Телефон</h4>
								<p className={css.titleP}>+380939994499</p>
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

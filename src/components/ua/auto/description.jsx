import css from './auto.module.css';
export default function Description({ oneProd }) {
	return (
		<section className={css.someDescEnd}>
			<div className={css.theText}>
				<p className={css.theTextP}>
					Відчуйте себе за кермом стильного та елегантного авто
					{oneProd.autoName}, доступного для оренди.
					<br /> Цей автомобіль вражає своєю зовнішністю та витонченим салоном ,
					що гарантує якість. Він забезпечить вам комфортне переміщення як в
					міських, так і позаміських умовах. Плануєте взяти в оренду
					{oneProd.autoName} у Львові для подорожі?
					<br /> Можемо вас заверити, що ви не будете хвилюватися про витрату
					пального. Цей автомобіль дуже економічний. Для тих, хто цінує
					швидкість, оренда {oneProd.autoName} гарантує відчуття безпеки навіть
					при максимальній швидкості. <br />
					Обираючи оренду {oneProd.autoName} на carrentukraine.com, ви отримуєте
					низку переваг:
					<br /> Повне страхування автомобіля;
					<br /> Онлайн-підтримка 24/7;
					<br /> Автомобіль з повним баком бензину;
					<br /> Доставка авто за потребою. <br />
					Вартість оренди
					{oneProd.autoName} залежить від кількості днів оренди. <br />
					Для отримання більш детальної інформації звертайтеся до нас. Для
					оренди цього автомобіля ваш вік повинен бути не менше 21 року, а стаж
					водіння - не менше 2 років. Якщо ви не відповідаєте цим критеріям, ми
					готові розглянути індивідуальний підхід і запропонувати вам варіанти.
				</p>
			</div>
		</section>
	);
}
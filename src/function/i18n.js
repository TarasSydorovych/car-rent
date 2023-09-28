import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: 'ua',
		interpolation: {
			escapeValue: false,
		},
		resources: {
			en: {
				translation: {
					description: {
						part1: {
							headerFirst: {
								location: 'Our Location',
								order: 'Order a car',
								cool: 'Best Rental Deals and Top Cars',
								contact: 'Contact Us',
								main: 'Home',
								auto: 'Fleet',
								serv: 'Services',
								about: 'About Us',
								inf: 'Contact',
							},
							blockPic: {
								rentT: 'CAR RENTAL',
								wall: 'FOR ANY BUDGET',
								new: 'New Cars',
								disc: 'Flexible Discount System',
								auto: 'Wide Range of Vehicles',
								chos: 'Choose a Car',
							},
							sendForm: {
								orH: 'Order a car',
								name: 'Name',
								phone: 'Phone',
								orB: 'Order a car',
							},
							secondBlock: {
								clas: 'Car Class',
								vid: 'From',
								uah: 'UAH',
								econ: 'Economy',
								bussi: 'Business',
								prem: 'Premium',
							},
							aboutBlock: {
								abou: 'About Us',
								desc: 'We at Car Rent Ukraine are a team of professionals in the car rental industry! Our managers will ensure your satisfaction with the level of services provided.',
								desOne: 'Premium Class Cars',
								desTwo: 'Impeccable Condition of All Vehicles',
								desThre: 'European-Level Service',
								but: 'More details',
							},
							footer: {
								auto: 'Fleet',
								serv: 'Services',
								about: 'About Us',
								inf: 'Contact',
								phone: 'Phone',
								adress: 'Address: Lviv, Chornovola Avenue 59',
							},
							contact: {
								title: 'CONTACT US',
								getConnect: "Let's get in touch",
								name: 'Your name',
								email: 'Your Email',
								phone: 'Your phone',
								message: 'Your message',
								buttonSend: 'Send a message',
								beInContact: 'STAY IN TOUCH WITH US',
								ourInfo: 'Our contact information',
								adressFir: 'Address',
								adressTwo: 'Lviv, Chornovola Avenue 59',
								tel: 'Phone',
							},
							category: {
								title: 'Our cars',
								econom: 'Economy',
								busines: 'Business',
								premium: 'Premium',
								bus: 'Minibuses',
								Vned: 'SUV',
								legcov: 'Light vehicles',
								automat: 'Automaton',
								manual: 'Mechanical',
								uah: 'UAH',
								dib: 'days',
								button: 'Order a car',
							},
							services: {
								title: 'Our Services',
								blockDesTit: 'Car Rental - a convenient opportunity for you',
								blockDesDesc:
									'Welcome to our car rental services. We offer a wide selection of cars for various needs and budgets. Our cars are always ready for trips, business journeys, and vacations. Explore our car gallery and learn more about the benefits of using our service.',
								advTitle: 'Our Advantages',
								advTitleTwo: 'Variety of Cars',
								advDescOne:
									'Choose from a wide range of cars, including economy class, comfortable sedans, SUVs, and many more.',
								advDescTwo: 'Transparent Pricing',
								advDescThre:
									'We have no hidden fees or unexpected expenses. You know exactly how much each car costs.',
								advDescFour: 'Convenient Booking',
								advDescFive:
									'Renting a car is easy and fast. Reserve your car online or contact our team.',
								howRentOne: 'How to Rent a Car',
								howRentOneTit: 'Submit an Application:',
								howRentOneDesc:
									'Contact our team and fill out an application on our website.',
								howRentTwoTit: 'Choose a Car:',
								howRentTwoDesc:
									'Select a car from our range that suits your needs and budget.',
								howRentThreTit: 'Prepare Necessary Documents:',
								howRentThreDesc:
									'To complete the rental agreement, you will need driver documents and other required paperwork.',
								howRentFourTit: 'Pick Up the Car:',
								howRentFourDesc:
									'Come to us to pick up the keys to your car and start your journey.',
							},
							about: {
								title: 'About Us',
								description:
									'As the market leader in car rental in Ukraine, we offer the highest standard of service and fleet reliability. We specialize in providing our customers with various automotive solutions for travel and business. Our fleet includes a wide range of vehicles, from comfortable passenger cars to stylish crossovers and luxury cars. We aim to provide our customers with high-quality transportation solutions, offering convenience and reliability at every stage of the rental process.',
								opDeTitleOne: '10 Years in the Market',
								opDeDescOne:
									'Car Rent Ukraine - your reliable partner in car rental.',
								opDeTitleTwo: '1000+ Satisfied Customers',
								opDeDescTwo:
									'Car Rent Ukraine - the best service at a reasonable price.',
								opDeTitleThre: 'Excellent Performance',
								opDeDescThre:
									'With us, you will get a car that meets your expectations to the fullest.',
							},
							form: {
								title:
									'Fill out the form, and our managers will contact you to find the optimal option',
								name: 'Name',
								nameHolder: 'Enter your name',
								phone: 'Your phone number',
								phoneHolder: 'Your phone number',
								button: 'Find a Car',
								warningFirstName:
									'Name is too short. The name must contain more than 2 characters.',
								warningSecondName: 'Name field cannot be empty.',

								warningFirstPhone: 'Your phone number is incorrect.',
								warningSeconPhone: 'Name field cannot be empty.',
								warningSecondPhone: 'Phone field cannot be empty.',
								allInp: 'Fill in all fields.',
							},
							auto: {
								firstTitle: 'Rent',
								secondTitle: 'in Lviv',
								rentPay: 'Security Deposit',
								curency: 'UAH',
								typManual: 'Transmission Type',
								dib: 'days',
								buttonRent: 'Order a Car',
								titleQuestionFirst: 'QUESTIONS AND ANSWERS ABOUT RENTAL',
								firstAnsvTitileFirst: 'How much does rental cost',

								firstAnsvDescFirst:
									'The price of renting a car in Lviv starts from',
								firstAnsvDesceSecond:
									'UAH per day, depending on the car you choose and the rental period. The longer the rental period, the lower the daily rental rate. Car rental rates from Car Rent Ukraine.',
								secondAnsvTitileFirst: 'What deposit is required for rental',

								secondAnsvDescFirst: 'The deposit for rental',
								secondAnsvDesceSecond: 'in Lviv is',
							},
							que: {
								titleq: 'What are the rental conditions',
								answerq:
									'The conditions are very simple. The client must be over 21 years old and have a driving experience of more than 2 years. If these conditions are not met, the rental is possible with an increased deposit.',
								titlew: 'What documents are required for rental',
								answerw:
									"Before receiving the car, you need to provide the original passport and a driver's license with the appropriate category. For foreigners - international driver's licenses and a foreign passport.",
								titlee: 'What are the mileage conditions',
								answee:
									'All cars have a mileage limit of 100 km per day. You can increase this limit to 400 km/day or more by choosing an extended car rental package.',
								titler: 'What are the insurance conditions',
								answerr:
									'Full insurance. Cars are insured under CASCO and OSAGO.',
								titlet: 'What payment methods are available in Kyiv',
								answert:
									'Cash, non-cash payment with VAT, and payment by bank card are possible.',
								titley: 'Can I take your car abroad',
								answery:
									'Yes, you can take our cars to European Union countries. For this, we additionally arrange a package - a power of attorney for driving a car and a Green Card insurance (the package is paid separately). To arrange the package, you need 1-3 days.',
								titleu: 'Can I rent a car for a wedding',
								answeru:
									'Yes, it is possible. But we cannot guarantee the availability of a specific car and, in case of substitution, we will have to provide a car of the same or higher class under previously agreed terms and conditions (conditions and cost).',
								titlei: 'What if I damage the car',
								answeri:
									'In this case, please call us immediately. Our insurance agent will contact you and explain what needs to be done. All cars are fully insured, so you should not worry.',
								titleo: 'Is it possible for multiple people to drive the car',
								answero:
									'Yes, it is possible. To do this, you need to add an additional driver to the rental agreement. This service is free of charge.',
								titlep:
									'What is the cost of additional services such as a navigator, child seat, WI-FI router',
								answerp:
									'Yes, all these options are available. You need to inform us in advance. Rent for 3 euros per day or 15 euros for the entire rental period for long-term rentals.',
								titlea: 'Is it possible to rent a car for a legal entity',
								answera:
									'Yes, we work with legal entities. We accept payment by non-cash method with VAT.',
								titles: 'What is included in the rental price',
								answers:
									'The rental price includes: a fully insured, clean car with a full tank, a personal online manager for the entire rental period, and 24/7 support.',
							},
							description: {
								fir: 'Feel the thrill of driving a stylish and elegant car',
								second: ', available for rent.',
								thre: 'This car impresses with its exterior and sophisticated interior, ensuring quality. It will provide you with comfortable transportation both in urban and suburban conditions. Planning to rent',
								four: ' in Lviv for a trip?',
								five: " We can assure you that you won't have to worry about fuel consumption. This car is highly fuel-efficient. For those who value speed, renting a",
								six: ' ensures a feeling of safety even at maximum speed. ',
								seven: 'When choosing to rent a',
								eight: ' on carrentukraine.com, you get a range of benefits:',
								listFirst: 'Full car insurance;',
								listSecond: '24/7 online support;',
								listThre: 'Car with a full tank of gas;',
								listFour: 'Car delivery as needed.',
								rentPay: 'The cost of rental',
								dayRent: 'depends on the number of days rented.',
								detalInfo:
									'For more detailed information, please contact us. To rent this car, you must be at least 21 years old, with a driving experience of at least 2 years. If you do not meet these criteria, we are ready to consider an individual approach and offer you options.',
							},
						},
						seo: {
							mainPage: {
								title: 'Car Rental in Lviv: Fast, Easy, Affordable!',
								description:
									'The Best Car Rental in Lviv. A wide selection of vehicles, convenient terms, and professional service. Book today and explore Lviv in your own car!',
							},
							contact: {
								title: 'Contact Us - Car Rental in Lviv: Contact Information',
								description:
									'We are always ready to answer your questions and help you rent a car in Lviv. Find contact information and contact us now.',
							},
							category: {
								title:
									'Choice of Cars for Rent in Lviv: economy, business and premium cars',
								description:
									'Check out our wide selection of cars for rent in Lviv. Book the perfect economy, business and premium car for your trip today.',
							},
							services: {
								title:
									'Car Rental Services in Lviv | Wide Selection and Convenient Terms',
								description:
									'Learn more about car rental services in Lviv. Our company offers various car models and classes, as well as convenient terms for your journey.',
							},
							about: {
								title:
									'Car Rent Ukraine | Car Rental in Lviv - Your Reliable Partner',
								description:
									'Learn more about us, the leading car rental company in Lviv. We offer high-quality service and a wide selection of cars for your journey.',
							},
							auto: {
								titleFirst: 'Best Deal: Rent',
								titleSecond: 'in Lviv Car Rent Ukraine',
								descriptionFirst: 'Rent a',
								descriptionSecond:
									'in Lviv from Car Rent Ukraine at an affordable price. Book a',
								descriptionThre: 'right now and get the best offer.',
							},
						},
					},
				},
			},
			ua: {
				translation: {
					description: {
						part1: {
							headerFirst: {
								location: 'Наша локація',
								order: 'Замовити авто',
								cool: 'НАЙДЕШЕВША ОРЕНДА ТА НАЙКРАЩІ МАШИНИ',
								contact: 'КОНТАКТИ',
								main: 'Головна',
								auto: 'Автопарк',
								serv: 'Послуги',
								about: 'Про нас',
								inf: 'Контакти',
							},
							blockPic: {
								rentT: 'ОРЕНДА АВТОМОБІЛІВ',
								wall: 'НА БУДЬ-ЯКИЙ ГАМАНЕЦЬ',
								new: 'Нові автомобілі',
								disc: 'Гнучка система знижок',
								auto: 'Широкий вибір авто',
								chos: 'Обрати автомобіль',
							},
							sendForm: {
								orH: 'Замовити авто',
								name: 'Імʼя',
								phone: 'Телефон',
								orB: 'Замовити авто',
							},
							secondBlock: {
								clas: 'Клас авто',
								vid: 'Від',
								uah: 'грн',
								econ: 'Економ',
								bussi: 'Бізнес',
								prem: 'Преміум',
							},
							aboutBlock: {
								abou: 'Про нас',
								desc: 'Ми в Car Rent Ukraine - команда професіоналів в сфері оренди автомобілів! Наші менеджери гарантовано залишать Вас задоволеними рівнем наданих послуг.',
								desOne: 'Автомобілі преміум класу',
								desTwo: 'Бездоганний стан всіх автомобілів',
								desThre: 'Сервіс європейського рівня',
								but: 'Детальніше',
							},
							footer: {
								auto: 'Автопарк',
								serv: 'Послуги',
								about: 'Про нас',
								inf: 'Контакти',
								phone: 'Телефон',
								adress: 'Адрес: Львів, Проспект Чорновола 59',
							},
							contact: {
								title: "ЗВ'ЯЖІТЬСЯ З НАМИ",
								getConnect: "Давайте зв'яжемося",
								name: "Ваше ім'я",
								email: 'Ваш Email',
								phone: 'Ваш телефон',
								message: 'Ваше повідомлення',
								buttonSend: 'Відправити повідомлення',
								beInContact: "ЗАЛИШАЙТЕСЯ З НАМИ НА ЗВ'ЯЗКУ",
								ourInfo: 'Наша контактна інформація',
								adressFir: 'Адреса',
								adressTwo: 'Львів, Проспект Чорновола 59',
								tel: 'Телефон',
							},
							category: {
								title: 'Наші автомобілі',
								econom: 'Економ',
								busines: 'Бізнес',
								premium: 'Преміум',
								bus: 'Мікроавтобуси',
								Vned: 'Позашляховик',
								legcov: 'Легкові',
								automat: 'Автомат',
								manual: 'Механічна',
								uah: 'грн',
								dib: 'діб',
								button: 'Замовити авто',
							},
							services: {
								title: 'Наші послуги',
								blockDesTit: 'Здача авто в прокат - вигідна можливість для вас',
								blockDesDesc:
									'Ласкаво просимо до наших послуги з здачі автомобілів в прокат. Ми пропонуємо широкий вибір авто для різних потреб і бюджетів. Наші автомобілі завжди готові до подорожей, ділових поїздок та відпусток. Роздивіться нашу галерею авто і дізнайтеся більше про переваги користування нашою послугою.',
								advTitle: 'Наші переваги',
								advTitleTwo: 'Різноманітність автомобілів',
								advDescOne:
									'Вибирайте з великого асортименту авто, включаючи економ-клас, комфортабельні седани, позашляховики та багато інших.',
								advDescTwo: 'Прозора ціноутворення',
								advDescThre:
									'У нас немає прихованих платежів або непередбачуваних витрат. Ви знаєте, скільки коштує кожен автомобіль.',
								advDescFour: 'Зручне бронювання',
								advDescFive:
									"Замовлення авто - це легко і швидко. Забронюйте автомобіль онлайн або зв'яжіться з нашою командою.",
								howRentOne: 'Як отримати авто в прокат',
								howRentOneTit: 'Заповніть заявку:',
								howRentOneDesc:
									'зверніться до нашої команди та заповніть заявку на нашому веб-сайті.',
								howRentTwoTit: 'Оберіть авто:',
								howRentTwoDesc:
									'виберіть автомобіль з нашого асортименту, який вам підходить за типом і бюджетом.',
								howRentThreTit: 'Підготуйте необхідні документи:',
								howRentThreDesc:
									'для оформлення договору прокату вам знадобляться документи водія та інші необхідні документи.',
								howRentFourTit: 'Заберіть авто:',
								howRentFourDesc:
									'приходьте до нас, щоб отримати ключі від вашого автомобіля і почати подорож.',
							},
							about: {
								title: 'Про нас',
								description:
									'Компанія лідер на ринку прокату автомобілів в Україні, ми пропонуємо найвищий стандарт обслуговування та надійність автопарку. Ми спеціалізуємося на забезпеченні наших клієнтів різноманітними автомобільними рішеннями для подорожей та бізнесу. Наш автопарк включає в себе широкий вибір автомобілів різних класів, від комфортних легкових авто до стильних кросоверів і розкішних машин. Ми прагнемо забезпечити наших клієнтів високоякісними транспортними рішеннями, надаючи зручність та надійність на кожному етапі оренди.',
								opDeTitleOne: '10 років на ринку',
								opDeDescOne:
									'Car Rent Ukraine - ваш надійний партнер у прокаті авто.',
								opDeTitleTwo: '1000+ Задоволених клієнтів',
								opDeDescTwo:
									'Car Rent Ukraine - найкращий сервіс за помірну ціну',
								opDeTitleThre: 'Чудова продуктивність',
								opDeDescThre:
									'З нами Ви отримаєте авто яке максимально підійде Вашим очікуванням',
							},
							form: {
								title:
									'Заповніть форму і наші менеджери звʼяжуться з Вами для підбору оптимального варіанту',
								name: 'Імʼя',
								nameHolder: 'Введіть ваше імʼя',
								phone: 'Ваш номер телефону',
								phoneHolder: 'Ваш телефон',
								button: 'Підібрати авто',
								warningFirstName:
									"Ім'я занадто короткe. Імʼя має містити більше 2 символів",
								warningSecondName: 'Поле імені не може бути порожнім',
								warningFirstPhone: 'Ваш телефон некоректний',
								warningSeconPhone: 'Поле імені не може бути порожнім',
								allInp: 'Заповніть усі поля',
							},
							auto: {
								firstTitle: 'Оренда',
								secondTitle: 'у Львові',
								rentPay: 'Вартість застави',
								curency: 'грн',
								typManual: 'Тип трансмісії',
								dib: 'діб',
								buttonRent: 'Замовити автомобіль',
								titleQuestionFirst: 'ПИТАННЯ І ВІДПОВІДІ ПРО ОРЕНДУ',
								firstAnsvTitileFirst: 'Скільки коштує прокат',

								firstAnsvDescFirst:
									'Ціна на прокат автомобіля у Львові стартує від',
								firstAnsvDesceSecond:
									'UAH на добу, все залежить від обраного Вами автомобіля та періоду прокату. Чим більший термін оренди, тим нижча вартість прокату на добу. Вартість оренди автомобілів від компанії Car Rent Ukraine.',
								secondAnsvTitileFirst: 'Яка застава необхідна для оренди',

								secondAnsvDescFirst: 'Застава для оренди',
								secondAnsvDesceSecond: 'у Львові становить',
							},
							que: {
								titleq: `Які умови оренди`,
								answerq: `Умови дуже прості. Клієнт повинен бути старше 21 року та мати досвід водіння більше 2-х років. Якщо ці умови не дотримані, то оренда можлива зі збільшеною заставою.`,
								titlew: `Які документи потрібні для оренди?`,
								answerw: `Перед видачею автомобіля, необхідно надати оригінал паспорта та посвідчення водія з відповідною категорією. Для іноземців — міжнародні права та закордонний паспорт.`,
								titlee: `Які умови щодо пробігу?`,
								answee: `
На всі автомобілі встановлено обмеження 100 км на добу. Можна збільшити цю цифру до 400 км/день та більше, вибравши розширений пакет на прокат авто.`,
								titler: `Які умови страхування?`,
								answerr: `Повне страхування. Автомобілі застраховані по КАСКО та ОСЦПВ.`,
								titlet: `Які способи оплати у Києві?`,
								answert: `Можлива готівкова, безготівкова форма з ПДВ та оплата на банківську картку.`,
								titley: `Чи можна на вашому авто виїхати за кордон?`,
								answery: `Так, на наших автомобілях можно виїжджати в страни Европейського союзу. Для цього ми додатково оформлюємо пакет - доручення для виїзду на авто та страховку Зелену картку (пакет сплачується окремо). Для оформлення пакету необхідно - 1-3 дня.`,
								titleu: `Можна взяти авто на весілля?`,
								answeru: `Так це можливо. Але ми не можемо гарантувати наявність конкретного авто та, в разі підміни, будемо змушені надати авто такого ж або вищого класу за раніше обумовленими домовленостями (умови та вартість).`,
								titlei: `Що, якщо я завдам шкоди автомобілю?`,
								answeri: `У цьому випадку відразу телефонуйте нам. З Вами зв'яжеться наш страховий агент та розповість, що потрібно робити. Всі автомобілі повністю застраховані, вам не варто турбуватися.`,
								titleo: `Чи можливе перебування за кермом кількох людей?`,
								answero: `Так, можливо. Для цього потрібно додати додаткового водія в договір прокату. Ця послуга безкоштовна.`,
								titlep: `Яка вартість додаткових послуг, таких як: навігатор, дитяче крісло, WI-FI роутер?`,
								answerp: `Так, всі ці опції є. Потрібно нас заздалегідь попередити. Оренда по 3 євро на добу або 15 євро на весь прокат при тривалій оренді.`,
								titlea: `Чи є можливість орендувати авто на юридичну особу?`,
								answera: `Так, з юр. особами працюємо. Оплату приймаємо безготівковою формою з ПДВ. `,
								titles: `Що входить у вартість оренди?`,
								answers: `У вартість оренди авто входить: повністю застрахований, чистий автомобіль з повним баком, персональний онлайн менеджер на весь період прокату та цілодобова підтримка.`,
							},
							description: {
								fir: 'Відчуйте себе за кермом стильного та елегантного авто',
								second: ', доступного для оренди.',
								thre: 'Цей автомобіль вражає своєю зовнішністю та витонченим салоном, що гарантує якість. Він забезпечить вам комфортне переміщення як в міських, так і позаміських умовах. Плануєте взяти в оренду',
								four: ' у Львові для подорожі?',
								five: ' Можемо вас заверити, що ви не будете хвилюватися про витрату пального. Цей автомобіль дуже економічний. Для тих, хто цінує швидкість, оренда ',
								six: ' гарантує відчуття безпеки навіть при максимальнійшвидкості. ',
								seven: 'Обираючи оренду ',
								eight: ' на carrentukraine.com, ви отримуєте низку переваг:',
								listFirst: 'Повне страхування автомобіля;',
								listSecond: 'Онлайн-підтримка 24/7;',
								listThre: 'Автомобіль з повним баком бензину;',
								listFour: 'Доставка авто за потребою. ',
								rentPay: 'Вартість оренди',
								dayRent: 'залежить від кількості днів оренди.',
								detalInfo:
									'Для отримання більш детальної інформації звертайтеся до нас. Для оренди цього автомобіля ваш вік повинен бути не менше 21 року, а стаж водіння - не менше 2 років. Якщо ви не відповідаєте цим критеріям, ми готові розглянути індивідуальний підхід і запропонувати вам варіанти.',
							},
						},
						seo: {
							mainPage: {
								title: 'Оренда, прокат авто у Львові: швидко, просто, дешево!',
								description:
									'Найкраща оренда авто в Львові. Широкий вибір автомобілів, зручні умови та професійний сервіс. Забронюйте вже сьогодні та відкрийте Львів на власному автомобілі!',
							},
							contact: {
								title:
									"Зв'яжіться з Нами - Оренда Автомобілів в Львові: Контактна Інформація",
								description:
									"Ми завжди готові відповісти на ваші питання та допомогти з орендою автомобіля в Львові. Знайдіть контактну інформацію та зв'яжіться з нами прямо зараз.",
							},
							category: {
								title:
									'Вибір Авто для Оренди у Львові: економ, бізнес та преміум авто',
								description:
									'Ознайомтеся з нашим широким вибором автомобілів для оренди в Львові. Забронюйте ідеальне авто економ, бізнес та преміум класу для вашої подорожі вже сьогодні.',
							},
							services: {
								title:
									'Послуги з Оренди Авто в Львові | Широкий Вибір та Зручні Умови',
								description:
									'Дізнайтеся більше про послуги з оренди авто в Львові. Наша компанія пропонує різні моделі та класи автомобілів та зручні умови для вашої подорожі.',
							},
							about: {
								title:
									'Car Rent Ukraine | Оренда Авто у Львові - Ваш надійний партнер',
								description:
									'Дізнайтеся більше про нас, провідну компанію з оренди авто в Львові. Ми пропонуємо високоякісний сервіс та широкий вибір автомобілів для вашої подорожі.',
							},
							auto: {
								titleFirst: 'Найкраща пропозиція: оренда',
								titleSecond: 'у Львові Car Rent Ukraine',
								descriptionFirst: 'Орендуйте',
								descriptionSecond:
									'в Львові від Car Rent Ukraine за доступною ціною. Забронюйте',
								descriptionThre:
									'прямо зараз та отримайте найкращу пропозицію.',
							},
						},
					},
				},
			},
		},
	});

export default i18n;

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
								adress: 'Address: Lviv, Lychakivska Street, 1A',
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
								adressTwo: 'Lviv, str. Lychakivsk, 1A',
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
								adress: 'Адрес: Львів, вул. Личаківська, 1А',
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
								adressTwo: 'Львів, вул. Личаківськ, 1А',
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
						},
					},
				},
			},
		},
	});

export default i18n;

import HeaderAll from '../../ua/header/headerAll';
import Footer from '../../ua/mainPage/footer/footer';
import css from './cabiner.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	useAuth,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { auth, googleAuthProvider } from '../../../function/firebase';
import AdmUkr from './admUkr';
import ProductList from './photoEditor';
import DataEditor from './dataEditor';
export default function Cabinet() {
	const navigate = useNavigate();
	const [adminIn, setAdminIn] = useState(false);
	const [addAuto, setAddAuto] = useState(false);
	const [changeAuto, setChangeAuto] = useState(false);
	const [changeFoto, setChangeFoto] = useState(false);

	// const signInWithGoogle = async () => {
	// 	try {
	// 		// Починаємо процес входу через Google у спливаючому вікні
	// 		const result = await signInWithPopup(auth, googleAuthProvider);

	// 		// Отримуємо дані користувача з результату входу
	// 		const user = result.user;
	// 		const email = user.email; // Email користувача

	// 		if (email === 'rentautoukraine.com@gmail.com') {
	// 			setAdminIn(true);
	// 		} else {
	// 			navigate('/');
	// 		}
	// 	} catch (error) {
	// 		console.error('Помилка входу через Google:', error);
	// 	}
	// };
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (authUser) => {
			if (authUser) {
				const email = authUser.email;
				if (email === 'rentautoukraine.com@gmail.com') {
					setAdminIn(true);
				} else {
					navigate('/');
				}
			} else {
				// Користувач вийшов, робіть необхідні дії
				setAdminIn(false);
				navigate('/');
			}
		});

		return () => unsubscribe();
	}, [auth, navigate]);
	const signInWithGoogle = async (e) => {
		e.preventDefault();
		signInWithPopup(auth, googleAuthProvider)
			.then(async (result) => {
				const user = result.user;
				const email = user.email;
				if (email === 'rentautoukraine.com@gmail.com') {
					setAdminIn(true);
				} else {
					navigate('/');
				}
				console.log(result);
			})
			.catch((err) => {
				console.log('Error');
			});
	};
	// const signOutUser = async () => {
	// 	try {
	// 		// Виконуємо вихід користувача
	// 		await signOut(auth);
	// 		window.location.reload();
	// 	} catch (error) {
	// 		console.error('Помилка виходу:', error);
	// 	}
	// };
	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				navigate('/');
			})
			.catch((err) => {
				console.error(err);
			});
	};
	const addAutoFunc = () => {
		setAddAuto(!addAuto);
		setChangeAuto(false);
		setChangeFoto(false);
	};
	const changeAutoFunc = () => {
		setAddAuto(false);
		setChangeAuto(!changeAuto);
		setChangeFoto(false);
	};
	const changePicFunc = () => {
		setAddAuto(false);
		setChangeAuto(false);
		setChangeFoto(!changeFoto);
	};

	return (
		<>
			<HeaderAll />
			<div className={css.wrapButtonIn}>
				<button className={css.buttonLog} onClick={signInWithGoogle}>
					Авторизуйтесь
				</button>
				{adminIn && (
					<button className={css.buttonLog} onClick={signOutUser}>
						Вийти
					</button>
				)}
			</div>
			{adminIn && (
				<div className={css.listCorrect}>
					<ul className={css.ulList}>
						<li className={css.liList} onClick={addAutoFunc}>
							Додати авто
						</li>
						<li className={css.liList} onClick={changeAutoFunc}>
							Корегувати авто
						</li>
						<li className={css.liList} onClick={changePicFunc}>
							Змінити зображення
						</li>
					</ul>
				</div>
			)}
			<div className={css.wrapCha}>
				{addAuto && <AdmUkr />}
				{changeFoto && <ProductList />}
				{changeAuto && <DataEditor />}
			</div>
		</>
	);
}

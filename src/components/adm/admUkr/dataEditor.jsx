import { useEffect, useState } from 'react';
import { db } from '../../../function/firebase';
import {
	collection,
	getDocs,
	doc,
	updateDoc,
	serverTimestamp,
} from 'firebase/firestore';

export default function DataEditor() {
	const [products, setProducts] = useState([]);
	const [editFields, setEditFields] = useState({});

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, 'product'));
				const productsData = [];
				querySnapshot.forEach((doc) => {
					const product = doc.data();
					product.uid = doc.id;
					productsData.push(product);
				});
				setProducts(productsData);
			} catch (error) {
				console.error('Помилка завантаження продуктів:', error);
			}
		};

		fetchProducts();
	}, []);

	const handleEditFieldChange = (event, uid, fieldName) => {
		const { value } = event.target;
		setEditFields((prevEditFields) => ({
			...prevEditFields,
			[uid]: {
				...prevEditFields[uid],
				[fieldName]: value,
			},
		}));
	};

	const handleEditClick = (uid) => {
		setEditFields((prevEditFields) => ({
			...prevEditFields,
			[uid]: { ...products.find((product) => product.uid === uid) },
		}));
	};

	const handleUpgradeClick = async (uid) => {
		const updatedFields = editFields[uid];

		try {
			await updateDoc(doc(collection(db, 'product'), uid), {
				...updatedFields,
				updatedAt: serverTimestamp(),
			});

			setEditFields((prevEditFields) => {
				delete prevEditFields[uid];
				return { ...prevEditFields };
			});

			// Оновлюємо products з оновленими даними
			setProducts((prevProducts) =>
				prevProducts.map((product) =>
					product.uid === uid ? { ...product, ...updatedFields } : product,
				),
			);
		} catch (error) {
			console.error('Помилка оновлення продукту:', error);
		}
	};

	return (
		<div>
			<h2>Список продуктів</h2>
			<table>
				<thead>
					<tr>
						<th>UID</th>
						<th>Назва авто</th>
						<th>Коробка передач</th>
						<th>1-2 Діб</th>
						<th>3-7 Діб</th>
						<th>8+ Діб</th>
						<th>30+ Діб</th>
						<th>Клас авто</th>
						<th>Під клас авто</th>
						<th>Фото</th>
						<th>Застава</th>
						<th>Дії</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product.uid}>
							<td>{product.uid}</td>
							<td>
								{editFields[product.uid] ? (
									<input
										type='text'
										value={editFields[product.uid].autoName}
										onChange={(e) =>
											handleEditFieldChange(e, product.uid, 'autoName')
										}
									/>
								) : (
									product.autoName
								)}
							</td>
							<td>
								{editFields[product.uid] ? (
									<input
										type='text'
										value={editFields[product.uid].manual}
										onChange={(e) =>
											handleEditFieldChange(e, product.uid, 'manual')
										}
									/>
								) : (
									product.manual
								)}
							</td>
							<td>
								{editFields[product.uid] ? (
									<input
										type='text'
										value={editFields[product.uid].firstPrice}
										onChange={(e) =>
											handleEditFieldChange(e, product.uid, 'firstPrice')
										}
									/>
								) : (
									product.firstPrice
								)}
							</td>
							<td>
								{editFields[product.uid] ? (
									<input
										type='text'
										value={editFields[product.uid].secondPrice}
										onChange={(e) =>
											handleEditFieldChange(e, product.uid, 'secondPrice')
										}
									/>
								) : (
									product.secondPrice
								)}
							</td>
							<td>
								{editFields[product.uid] ? (
									<input
										type='text'
										value={editFields[product.uid].threePrice}
										onChange={(e) =>
											handleEditFieldChange(e, product.uid, 'threePrice')
										}
									/>
								) : (
									product.threePrice
								)}
							</td>
							<td>
								{editFields[product.uid] ? (
									<input
										type='text'
										value={editFields[product.uid].fourPrice}
										onChange={(e) =>
											handleEditFieldChange(e, product.uid, 'fourPrice')
										}
									/>
								) : (
									product.fourPrice
								)}
							</td>
							<td>
								{editFields[product.uid] ? (
									<input
										type='text'
										value={editFields[product.uid].classAuto}
										onChange={(e) =>
											handleEditFieldChange(e, product.uid, 'classAuto')
										}
									/>
								) : (
									product.classAuto
								)}
							</td>
							<td>
								{editFields[product.uid] ? (
									<input
										type='text'
										value={editFields[product.uid].pidClassAuto}
										onChange={(e) =>
											handleEditFieldChange(e, product.uid, 'pidClassAuto')
										}
									/>
								) : (
									product.pidClassAuto
								)}
							</td>
							<td>
								{editFields[product.uid] ? (
									<input
										type='text'
										value={editFields[product.uid].bookFoto}
										onChange={(e) =>
											handleEditFieldChange(e, product.uid, 'bookFoto')
										}
									/>
								) : (
									product.bookFoto
								)}
							</td>
							<td>
								{editFields[product.uid] ? (
									<input
										type='text'
										value={editFields[product.uid].rentPay}
										onChange={(e) =>
											handleEditFieldChange(e, product.uid, 'rentPay')
										}
									/>
								) : (
									product.rentPay
								)}
							</td>
							<td>
								{editFields[product.uid] ? (
									<button onClick={() => handleUpgradeClick(product.uid)}>
										Зберегти
									</button>
								) : (
									<button onClick={() => handleEditClick(product.uid)}>
										Редагувати
									</button>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

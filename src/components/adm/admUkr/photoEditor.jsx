import React, { useState, useEffect } from 'react';
import {
	getStorage,
	ref,
	deleteObject,
	getDownloadURL,
	uploadBytes,
} from 'firebase/storage';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../../function/firebase';

// const ProductList = () => {
// 	const storage = getStorage();
// 	const [products, setProducts] = useState([]); // Стан для збереження списку товарів
// 	const [selectedProduct, setSelectedProduct] = useState(null); // Стан для вибраного товару
// 	const [newImage, setNewImage] = useState(null); // Стан для нового фото

// 	// Отримати список товарів з Firebase Firestore
// 	useEffect(() => {
// 		const fetchProducts = async () => {
// 			const productsCollection = collection(db, 'product');
// 			const productsSnapshot = await getDocs(productsCollection);
// 			const productsData = productsSnapshot.docs.map((doc) => ({
// 				id: doc.id,
// 				...doc.data(),
// 			}));
// 			setProducts(productsData);
// 		};

// 		fetchProducts();
// 	}, []);

// 	// Функція для оновлення фото товару
// 	// const handleUpdateImage = async (product) => {
// 	// 	if (newImage) {
// 	// 		const imageRef = ref(storage, `images/${newImage.name}`);
// 	// 		await uploadBytes(imageRef, newImage);
// 	// 		const imageUrl = await getDownloadURL(imageRef);

// 	// 		// Оновити поле imageList товару в Firestore
// 	// 		const productRef = doc(db, 'product', product.id);
// 	// 		await updateDoc(productRef, {
// 	// 			imageList: [...product.imageList, imageUrl],
// 	// 		});

// 	// 		// Скинути значення newImage та selectedProduct
// 	// 		setNewImage(null);
// 	// 		setSelectedProduct(null);
// 	// 	}
// 	// };
// 	const handleUpdateImage = async (product, index) => {
// 		if (newImage) {
// 			const imageRef = ref(storage, `images/${newImage.name}`);
// 			await uploadBytes(imageRef, newImage);
// 			const imageUrl = await getDownloadURL(imageRef);

// 			// Оновити поле imageList товару в Firestore
// 			const productRef = doc(db, 'product', product.id);

// 			// Спочатку скопіюйте imageList, щоб мати копію з оновленою фотографією
// 			const updatedImageList = [...product.imageList];

// 			// Оновити фотографію у вибраному індексі
// 			updatedImageList[index] = imageUrl;

// 			await updateDoc(productRef, {
// 				imageList: updatedImageList,
// 			});

// 			// Скинути значення newImage та selectedProduct
// 			setNewImage(null);
// 			setSelectedProduct(null);
// 		}
// 	};
// 	// Функція для видалення фото зі списку товару
// 	const handleDeleteImage = async (product, imageIndex) => {
// 		const updatedImageList = [...product.imageList];
// 		updatedImageList.splice(imageIndex, 1);

// 		// Оновити поле imageList товару в Firestore
// 		const productRef = doc(db, 'product', product.id);
// 		await updateDoc(productRef, {
// 			imageList: updatedImageList,
// 		});
// 	};

// 	return (
// 		<div>
// 			<h2>Product List</h2>
// 			<ul>
// 				{products.map((product) => (
// 					<li key={product.id}>
// 						<h3>{product.autoName}</h3>
// 						<h2>{product.uid}</h2>
// 						<button onClick={() => setSelectedProduct(product)}>
// 							View Images
// 						</button>
// 					</li>
// 				))}
// 			</ul>
// 			{selectedProduct && (
// 				<div>
// 					<h3>{selectedProduct.name} Images</h3>
// 					{selectedProduct.imageList.map((imageUrl, index) => {
// 						console.log('imageUrl', imageUrl);
// 						return (
// 							<>
// 								<div key={index}>
// 									<img src={imageUrl} alt={`Product ${index}`} />
// 									<button
// 										onClick={() => handleDeleteImage(selectedProduct, index)}
// 									>
// 										Delete
// 									</button>
// 								</div>
// 								<input
// 									type='file'
// 									accept='image/*'
// 									onChange={(e) => setNewImage(e.currentTarget.files[0])}
// 								/>
// 								<button
// 									onClick={() => handleUpdateImage(selectedProduct, index)}
// 								>
// 									Update Image
// 								</button>
// 							</>
// 						);
// 					})}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default ProductList;
const ProductList = () => {
	const storage = getStorage();
	const [products, setProducts] = useState([]); // Стан для збереження списку товарів
	const [selectedProduct, setSelectedProduct] = useState(null); // Стан для вибраного товару
	const [newImage, setNewImage] = useState(null); // Стан для нового фото

	// Отримати список товарів з Firebase Firestore
	useEffect(() => {
		const fetchProducts = async () => {
			const productsCollection = collection(db, 'product');
			const productsSnapshot = await getDocs(productsCollection);
			const productsData = productsSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setProducts(productsData);
		};

		fetchProducts();
	}, []);
	const handleDeleteImage = async (product, imageIndex) => {
		const updatedImageList = [...product.imageList];
		updatedImageList.splice(imageIndex, 1);

		// Оновити поле imageList товару в Firestore
		const productRef = doc(db, 'product', product.id);
		await updateDoc(productRef, {
			imageList: updatedImageList,
		});
	};
	// Функція для оновлення фото товару
	const handleUpdateImage = async (product, imageIndex) => {
		if (newImage) {
			const imageRef = ref(storage, `images/${newImage.name}`);
			await uploadBytes(imageRef, newImage);
			const imageUrl = await getDownloadURL(imageRef);

			// Оновити поле imageList товару в Firestore
			const productRef = doc(db, 'product', product.id);
			const updatedImageList = [...product.imageList];
			updatedImageList[imageIndex] = imageUrl;

			await updateDoc(productRef, {
				imageList: updatedImageList,
			});

			// Скинути значення newImage
			setNewImage(null);
		}
	};

	// Функція для додавання нової фотографії до вибраного товару
	const handleAddImage = async () => {
		if (selectedProduct && newImage) {
			const imageRef = ref(storage, `images/${newImage.name}`);
			await uploadBytes(imageRef, newImage);
			const imageUrl = await getDownloadURL(imageRef);

			// Оновити поле imageList товару в Firestore
			const productRef = doc(db, 'product', selectedProduct.id);

			const updatedImageList = [...selectedProduct.imageList, imageUrl];

			await updateDoc(productRef, {
				imageList: updatedImageList,
			});

			// Очистити поле вводу нової фотографії після додавання
			setNewImage(null);
		}
	};

	return (
		<div>
			<h2>Product List</h2>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<h3>{product.autoName}</h3>
						<h2>{product.uid}</h2>
						<button onClick={() => setSelectedProduct(product)}>
							View Images
						</button>
					</li>
				))}
			</ul>
			{selectedProduct && (
				<div>
					<h3>{selectedProduct.name} Images</h3>
					{selectedProduct.imageList.map((imageUrl, index) => {
						return (
							<div key={index}>
								<img src={imageUrl} alt={`Product ${index}`} />
								<button
									onClick={() => handleUpdateImage(selectedProduct, index)}
								>
									Update Image
								</button>
								<input
									type='file'
									accept='image/*'
									onChange={(e) => setNewImage(e.currentTarget.files[0])}
								/>
								<button onClick={handleAddImage}>Add Image</button>
								<button
									onClick={() => handleDeleteImage(selectedProduct, index)}
								>
									Delete
								</button>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default ProductList;

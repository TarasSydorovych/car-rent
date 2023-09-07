import { useState } from 'react';
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { auth, db } from '../../../function/firebase';
import {
	doc,
	setDoc,
	addDoc,
	collection,
	serverTimestamp,
} from 'firebase/firestore';

export default function AdmUkr() {
	const storage = getStorage();

	const objList = [
		{
			name: 'Назва авто',
			transliter: 'autoName',
		},
		{
			name: 'Коробка передач',
			transliter: 'manual',
		},
		{
			name: '1-2 Діб',
			transliter: 'firstPrice',
		},
		{
			name: '3-7 Діб',
			transliter: 'secondPrice',
		},
		{
			name: '8+ Діб',
			transliter: 'threePrice',
		},
		{
			name: '30+ Діб',
			transliter: 'fourPrice',
		},
		{
			name: 'Клас авто',
			transliter: 'classAuto',
		},
		{
			name: 'Під клас авто',
			transliter: 'pidClassAuto',
		},

		{
			name: 'фото',
			transliter: 'bookFoto',
		},
	];

	const [photoInputs, setPhotoInputs] = useState([1]);
	const [formData, setFormData] = useState({});
	const [photoURLs, setPhotoURLs] = useState([]);
	const [heroFotoUrl, setHeroFotoUrl] = useState('');
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handlePhotoInputChange = (e, index) => {
		if (e.target.files[0]) {
			const image = e.target.files[0];
			const fieldName = `bookFoto${index}`;

			const uploadTask = uploadBytesResumable(
				ref(storage, `images/${image.name}`),
				image,
			);
			uploadTask.on(
				'state_changed',
				null,
				(error) => {
					console.log(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((url) => {
						if (url) {
							setPhotoURLs((prevURLs) => {
								const updatedURLs = [...prevURLs];
								updatedURLs[index] = url;
								return updatedURLs.filter((url) => url !== undefined);
							});
						}
					});
				},
			);
		}
	};
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		const form = event.target;
		const data = new FormData(form);
		const formDataObj = Object.fromEntries(data.entries());

		// Перевірка кожного елементу formDataObj
		for (const key in formDataObj) {
			if (Object.prototype.hasOwnProperty.call(formDataObj, key)) {
				const value = formDataObj[key];
				if (value instanceof File) {
					formDataObj[key] = '';
				}
			}
		}

		if (photoInputs.length > 0) {
			formDataObj.imageList = photoURLs;
		}

		formDataObj.uid = uuidv4();
		formDataObj.audio = audioURL;
		formDataObj.pdf = pdfURL;
		formDataObj.heroFoto = heroFotoUrl;
		await setDoc(doc(collection(db, 'product'), formDataObj.uid), formDataObj);
		window.location.reload();
	};

	const [audioURL, setAudioURL] = useState('');
	const [pdfURL, setPdfURL] = useState('');

	// Решта вашого коду

	const handleAudioInputChange = (e) => {
		if (e.target.files[0]) {
			const audioFile = e.target.files[0];

			const uploadTask = uploadBytesResumable(
				ref(storage, `audio/${audioFile.name}`),
				audioFile,
			);
			uploadTask.on(
				'state_changed',
				null,
				(error) => {
					console.log(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((url) => {
						if (url) {
							setAudioURL(url);
						}
					});
				},
			);
		}
	};

	const handlePdfInputChange = (e) => {
		if (e.target.files[0]) {
			const pdfFile = e.target.files[0];

			const uploadTask = uploadBytesResumable(
				ref(storage, `pdf/${pdfFile.name}`),
				pdfFile,
			);
			uploadTask.on(
				'state_changed',
				null,
				(error) => {
					console.log(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((url) => {
						if (url) {
							setPdfURL(url);
						}
					});
				},
			);
		}
	};
	const handleHeroFotoChange = (e) => {
		if (e.target.files[0]) {
			const pdfFile = e.target.files[0];

			const uploadTask = uploadBytesResumable(
				ref(storage, `${pdfFile.name}`),
				pdfFile,
			);
			uploadTask.on(
				'state_changed',
				null,
				(error) => {
					console.log(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((url) => {
						if (url) {
							setHeroFotoUrl(url);
						}
					});
				},
			);
		}
	};
	const renderAudioInput = () => {
		return (
			<div>
				<label>Аудіо</label>
				<input
					type='file'
					accept='audio/*'
					onChange={handleAudioInputChange}
					name='audio'
				/>
			</div>
		);
	};

	const renderPdfInput = () => {
		return (
			<div>
				<label>Пдф файл</label>
				<input
					type='file'
					accept='.pdf'
					onChange={handlePdfInputChange}
					name='pdfFile'
				/>
			</div>
		);
	};
	const renderHeroFoto = () => {
		return (
			<div>
				<label>ФотоГероя</label>
				<input type='file' onChange={handleHeroFotoChange} name='heroFoto' />
			</div>
		);
	};
	const uploadPhoto = (photo) => {
		console.log('photo', photo);
		return new Promise((resolve, reject) => {
			const storageRef = ref(storage, `images/${photo.name}`);
			const uploadTask = uploadBytesResumable(storageRef, photo);

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log(`Upload progress: ${progress}%`);
				},
				(error) => {
					console.log('Error uploading photo:', error);
					reject(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref)
						.then((downloadURL) => {
							resolve(downloadURL);
						})
						.catch((error) => {
							console.log('Error getting photo URL:', error);
							reject(error);
						});
				},
			);
		});
	};

	const addPhotoInput = () => {
		setPhotoInputs((prevInputs) => [...prevInputs, prevInputs.length + 1]);
	};

	const renderInputs = () => {
		return objList.map((obj) => (
			<div key={obj.transliter}>
				<label>{obj.name}</label>
				<input
					type='text'
					name={obj.transliter}
					onChange={handleInputChange}
					value={formData[obj.transliter] || ''}
				/>
			</div>
		));
	};

	const renderPhotoInputs = () => {
		return photoInputs.map((index) => (
			<div key={`photoInput_${index}`}>
				<label>Book Photo {index}</label>
				<input
					type='file'
					accept='image/*'
					onChange={(e) => handlePhotoInputChange(e, index)}
					name={`bookFoto${index}`}
				/>
			</div>
		));
	};

	return (
		<div>
			<h2>Add Books</h2>
			<form onSubmit={handleFormSubmit}>
				{renderInputs()}
				{renderPhotoInputs()}

				<button type='button' onClick={addPhotoInput}>
					Add Photo Input
				</button>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

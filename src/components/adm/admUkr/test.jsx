import React, { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

const PhotoGallery = () => {
	const [photos, setPhotos] = useState([]);
	const storage = getStorage();

	useEffect(() => {
		const fetchPhotos = async () => {
			const storageRef = ref(storage);
			const photoList = await listAll(storageRef);
			const photoUrls = await Promise.all(
				photoList.items.map(async (item) => {
					const photoUrl = await getDownloadURL(item);
					return photoUrl;
				}),
			);
			setPhotos(photoUrls);
		};

		fetchPhotos();
	}, [storage]);

	return (
		<div>
			{photos.map((photoUrl, index) => (
				<img key={index} src={photoUrl} alt={`Photo ${index}`} />
			))}
		</div>
	);
};

export default PhotoGallery;

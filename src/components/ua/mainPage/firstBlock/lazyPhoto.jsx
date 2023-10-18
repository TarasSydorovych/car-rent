import React, { lazy, Suspense } from 'react';

const ActualPhoto = lazy(() => import('./actualPhoto'));

const LazyPhoto = (props) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ActualPhoto {...props} />
		</Suspense>
	);
};

export default LazyPhoto;

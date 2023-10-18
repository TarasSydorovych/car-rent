import React, { lazy, Suspense } from 'react';

const ActualImage = lazy(() => import('./actualImage'));

const LazyImage = (props) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ActualImage {...props} />
		</Suspense>
	);
};

export default LazyImage;

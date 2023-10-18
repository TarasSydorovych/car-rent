import React, { lazy, Suspense } from 'react';

const ActualSecondBlock = lazy(() => import('./secondBlock'));

const LazySecondBlock = (props) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ActualSecondBlock {...props} />
		</Suspense>
	);
};

export default LazySecondBlock;

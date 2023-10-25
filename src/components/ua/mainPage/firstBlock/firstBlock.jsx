import BlockInPic from './blockInPic';
import BlockPic from './blockPic';
import Header from './header';

export default function FirstBlock({
	windowDimensions,
	t,
	setSelectedCurrency,
	selectedCurrency,
}) {
	return (
		<>
			<Header
				setSelectedCurrency={setSelectedCurrency}
				selectedCurrency={selectedCurrency}
				windowDimensions={windowDimensions}
			/>
			<BlockPic t={t} windowDimensions={windowDimensions} />
			<BlockInPic />
		</>
	);
}

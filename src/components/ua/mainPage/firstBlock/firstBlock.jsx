import BlockInPic from './blockInPic';
import BlockPic from './blockPic';
import Header from './header';

export default function FirstBlock({ windowDimensions, t }) {
	return (
		<>
			<Header windowDimensions={windowDimensions} />
			<BlockPic t={t} />
			<BlockInPic />
		</>
	);
}

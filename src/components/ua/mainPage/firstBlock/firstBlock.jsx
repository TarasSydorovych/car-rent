import BlockInPic from './blockInPic';
import BlockPic from './blockPic';
import Header from './header';

export default function FirstBlock() {
	return (
		<>
			<Header />
			<BlockPic />
			<BlockInPic />
		</>
	);
}
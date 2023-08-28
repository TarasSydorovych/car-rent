import logo from './logo.svg';
import './App.css';
import FirstBlock from './components/firstBlock/firstBlock';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<FirstBlock />} />
			</Routes>
		</div>
	);
}

export default App;

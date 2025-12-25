import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				{/* Additional routes can be added here easily */}
			</Routes>
		</Router>
	);
}

export default App;

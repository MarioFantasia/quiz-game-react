import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Game from "./views/game/game";
import "./App.scss";
function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/game" element={<Game />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

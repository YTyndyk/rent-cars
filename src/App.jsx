import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./modules/Navbar/Navbar";
import store from "./redux/store";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import navbarMenuItems from "./data/navbarMenuItems.json";
// import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar menuItems={navbarMenuItems} />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/catalog" element={<CatalogPage />} />
					<Route path="/favorites" element={<FavoritesPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;

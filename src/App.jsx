import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./modules/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import navbarMenuItems from "./data/navbarMenuItems.json";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Navbar menuItems={navbarMenuItems} />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/catalog" element={<CatalogPage />} />
				<Route path="/favorites" element={<FavoritesPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

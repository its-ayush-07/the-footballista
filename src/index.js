import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./pages/Browse";
import Country from "./pages/Country";
import Tournaments from "./pages/Tournaments";
import Team from "./pages/Team";
import "./index.css";

const root = document.getElementById("root");

const wrapper = (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="browse" element={<Browse />} />
			<Route path="browse/:countryCode" element={<Country />} />
			<Route
				path="browse/:countryCode/:tournamentId"
				element={<Tournaments />}
			/>
			<Route path=":tournamentId/:teamId" element={<Team />} />
		</Routes>
	</BrowserRouter>
);

render(wrapper, root);

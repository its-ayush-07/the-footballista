import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BreadCrumbs from "../components/BreadCrumbs";
import axios from "axios";
import primary_color from "../constants";

const Browse = () => {
	const [countryList, setCountryList] = useState(null);

	useEffect(() => {
		var config = {
			method: "get",
			url: new URL("/countries", process.env.REACT_APP_API_URL).href,
			headers: {
				"x-rapidapi-key": process.env.REACT_APP_API_KEY,
				"x-rapidapi-host": process.env.REACT_APP_API_HOST,
			},
		};

		axios(config)
			.then((response) => {
				console.log(response.data["response"]);
				setCountryList(response.data["response"]);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<NavBar />
			<BreadCrumbs />
			<h2
				style={{ padding: 10, backgroundColor: primary_color, color: "white" }}
			>
				Browse countries
			</h2>
			<div class="card" style={{ width: "18rem", margin: 10 }}>
				<ul class="list-group list-group-flush">
					{countryList ? (
						countryList.map((country) => (
							<li class="list-group-item">
								<Link to={`${country["code"]}`} className="link">
									<img
										src={country["flag"]}
										alt={`${country["code"]}-flag`}
										width={40}
										style={{ padding: 5 }}
									/>
									{country["name"]}
								</Link>
							</li>
						))
					) : (
						<p style={{ textAlign: "center" }}>Country data unavailable</p>
					)}
				</ul>
			</div>
			<Footer />
		</>
	);
};

export default Browse;

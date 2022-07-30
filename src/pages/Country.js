import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BreadCrumbs from "../components/BreadCrumbs";
import primary_color from "../constants";

const Country = () => {
	const countryCode = useParams().countryCode;
	const [tournamentList, setTournamentList] = useState(null);

	useEffect(() => {
		var config = {
			method: "get",
			url: new URL("/leagues", process.env.REACT_APP_API_URL).href,
			headers: {
				"x-rapidapi-key": process.env.REACT_APP_API_KEY,
				"x-rapidapi-host": process.env.REACT_APP_API_HOST,
			},
			params: {
				code: countryCode,
				current: true,
			},
		};

		axios(config)
			.then((response) => {
				console.log(response.data["response"]);
				setTournamentList(response.data["response"]);
			})
			.catch((error) => console.log(error));
	}, [countryCode]);

	return (
		<>
			<NavBar />
			<BreadCrumbs />
			<h2
				style={{ padding: 10, backgroundColor: primary_color, color: "white" }}
			>
				Browse tournaments
			</h2>
			{tournamentList ? (
				<h3 style={{ padding: 10 }}>
					<img
						src={tournamentList[0]["country"]["flag"]}
						alt={tournamentList[0]["country"]["name"]}
						width={30}
					/>{" "}
					{tournamentList[0]["country"]["name"]}
				</h3>
			) : (
				""
			)}
			<div class="card" style={{ width: "18rem", margin: 10 }}>
				<ul class="list-group list-group-flush">
					{tournamentList ? (
						tournamentList.map((tournament) => (
							<li class="list-group-item">
								<Link to={`${tournament["league"]["id"]}`} className="link">
									<img
										src={tournament["league"]["logo"]}
										alt={`${tournament["league"]["id"]}`}
										width={40}
										style={{ padding: 5 }}
									/>
									{tournament["league"]["name"]}
								</Link>
							</li>
						))
					) : (
						<p style={{ textAlign: "center" }}>Tournament data unavailable</p>
					)}
				</ul>
			</div>
			<Footer />
		</>
	);
};

export default Country;

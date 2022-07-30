import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Fixtures from "../components/Fixtures";
import Results from "../components/Results";
import Table from "../components/Table";
import BreadCrumbs from "../components/BreadCrumbs";
import axios from "axios";

const Tournaments = () => {
	const tournamentId = useParams().tournamentId;
	const [tournamentInfo, setTournamentInfo] = useState(null);

	useEffect(() => {
		var config = {
			method: "get",
			url: new URL("/leagues", process.env.REACT_APP_API_URL).href,
			headers: {
				"x-rapidapi-key": process.env.REACT_APP_API_KEY,
				"x-rapidapi-host": process.env.REACT_APP_API_HOST,
			},
			params: {
				id: tournamentId,
			},
		};

		axios(config)
			.then(function (response) {
				console.log(response.data);
				if (response.data["response"]) {
					setTournamentInfo(response.data["response"][0]);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [tournamentId]);

	return (
		<>
			<NavBar />
			<BreadCrumbs />
			{tournamentInfo ? (
				<div>
					<h1 style={{ padding: 10 }}>
						<img src={tournamentInfo["league"]["logo"]} alt="" width={50} />{" "}
						{tournamentInfo["league"]["name"]}
					</h1>
					<h2 style={{ paddingLeft: 20 }}>
						<img
							src={tournamentInfo["country"]["flag"]}
							alt="country-flag"
							width={30}
							style={{ marginRight: 10 }}
						/>{" "}
						{tournamentInfo["country"]["name"]}
					</h2>
				</div>
			) : (
				<p style={{ textAlign: "center" }}>
					Tournament information unavailable
				</p>
			)}
			<Table tournamentId={tournamentId} />
			<Fixtures id={tournamentId} />
			<Results id={tournamentId} />
			<Footer />
		</>
	);
};

export default Tournaments;

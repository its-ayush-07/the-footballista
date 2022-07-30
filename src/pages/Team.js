import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BreadCrumbs from "../components/BreadCrumbs";
import primary_color from "../constants";

const Team = () => {
	const teamId = useParams().teamId;
	const tournamentId = useParams().tournamentId;

	const [teamInfo, setTeamInfo] = useState(null);
	const [teamSquad, setTeamSquad] = useState(null);

	useEffect(() => {
		var config = {
			method: "get",
			url: new URL("/teams", process.env.REACT_APP_API_URL).href,
			headers: {
				"x-rapidapi-key": process.env.REACT_APP_API_KEY,
				"x-rapidapi-host": process.env.REACT_APP_API_HOST,
			},
			params: {
				id: teamId,
				league: tournamentId,
				season: 2022,
			},
		};

		axios(config)
			.then((response) => {
				console.log(response.data["response"]);
				setTeamInfo(response.data["response"][0]);
			})
			.catch((error) => console.log(error));
	}, [teamId, tournamentId]);

	useEffect(() => {
		var config = {
			method: "get",
			url: new URL("/players/squads", process.env.REACT_APP_API_URL).href,
			headers: {
				"x-rapidapi-key": process.env.REACT_APP_API_KEY,
				"x-rapidapi-host": process.env.REACT_APP_API_HOST,
			},
			params: {
				team: teamId,
			},
		};

		axios(config)
			.then((response) => {
				console.log(response.data["response"]);
				setTeamSquad(response.data["response"][0]["players"]);
			})
			.catch((error) => console.log(error));
	}, [teamId]);

	return (
		<>
			<NavBar />

			{teamInfo ? (
				<>
					<div style={{ position: "relative", textAlign: "center" }}>
						<img
							src={teamInfo["venue"]["image"]}
							alt={`${teamInfo["venue"]["name"]}-img`}
							style={{ width: "100vw", height: "60vh" }}
						/>

						<img
							src={teamInfo["team"]["logo"]}
							alt={`${teamInfo["team"]["name"]}-img`}
							style={{
								position: "absolute",
								right: "30%",
								left: "30%",
								bottom: "-25%",
								width: "40%",
								height: "50%",
							}}
						/>
					</div>
					<h2 style={{ marginTop: "17vh", textAlign: "center" }}>
						{teamInfo["team"]["name"]}
					</h2>
					<h5 style={{ textAlign: "center" }}>{teamInfo["venue"]["name"]}</h5>
				</>
			) : (
				<p style={{ textAlign: "center" }}>Team information unavailable</p>
			)}
			<BreadCrumbs />
			<h3 style={{ padding: 10 }}>Squad</h3>
			<table class="table">
				<thead>
					<tr style={{ backgroundColor: primary_color, color: "white" }}>
						<th scope="col">No.</th>
						<th scope="col">Photo</th>
						<th scope="col">Name</th>
						<th scope="col">Position</th>
						<th scope="col">Age</th>
					</tr>
				</thead>
				<tbody>
					{teamSquad ? (
						teamSquad.map((player) => (
							<tr>
								<td>{player["number"]}</td>
								<td>
									<img src={player["photo"]} width={30} alt="" />
								</td>
								<td>{player["name"]}</td>
								<td>{player["position"]}</td>
								<td>{player["age"]}</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={5} align="center">
								Team squad data unavailable
							</td>
						</tr>
					)}
				</tbody>
			</table>

			<Footer />
		</>
	);
};

export default Team;

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import primary_color from "../constants";

function createData(id, rank, logo, team, played, win, lost, draw, gd, pts) {
	return { id, rank, logo, team, played, win, lost, draw, gd, pts };
}

export default function Table({ tournamentId }) {
	const [rawTable, setRawTable] = useState(null);

	useEffect(() => {
		var config = {
			method: "get",
			url: new URL("/standings", process.env.REACT_APP_API_URL).href,
			headers: {
				"x-rapidapi-key": process.env.REACT_APP_API_KEY,
				"x-rapidapi-host": process.env.REACT_APP_API_HOST,
			},
			params: {
				season: "2022",
				league: `${tournamentId}`,
			},
		};

		axios(config)
			.then(function (response) {
				console.log(response.data);
				if (response.data["response"]) {
					setRawTable(response.data["response"][0]["league"]["standings"][0]);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [tournamentId]);

	const table = rawTable
		? rawTable.map((row) =>
				createData(
					row["team"]["id"],
					row["rank"],
					row["team"]["logo"],
					row["team"]["name"],
					row["all"]["played"],
					row["all"]["win"],
					row["all"]["lose"],
					row["all"]["draw"],
					row["goalsDiff"],
					row["points"]
				)
		  )
		: null;

	return (
		<div className="table-responsive">
			<table class="table" style={{ marginTop: 40, marginBottom: 40 }}>
				<thead>
					<tr
						style={{
							backgroundColor: primary_color,
							color: "white",
						}}
					>
						<th scope="col">Rank</th>
						<th scope="col">Team</th>
						<th scope="col">Played</th>
						<th scope="col">Won</th>
						<th scope="col">Lost</th>
						<th scope="col">Draw</th>
						<th scope="col">GD</th>
						<th scope="col">Points</th>
					</tr>
				</thead>
				<tbody>
					{table ? (
						table.map((row) => (
							<tr key={row.id}>
								<td>{row.rank}</td>
								<td>
									<Link to={`/${tournamentId}/${row.id}`} className="link">
										<img src={row.logo} width="20px" alt={`${row.team}-logo`} />{" "}
										{row.team}
									</Link>
								</td>
								<td>{row.played}</td>
								<td>{row.win}</td>
								<td>{row.lost}</td>
								<td>{row.draw}</td>
								<td>{row.gd}</td>
								<td>{row.pts}</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={8} align="center">
								Table data unavailable
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}

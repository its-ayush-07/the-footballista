import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import primary_color from "../constants";

const Results = ({ id }) => {
	const [results, setResults] = useState(null);
	useEffect(() => {
		var config = {
			method: "get",
			url: new URL("/fixtures", process.env.REACT_APP_API_URL).href,
			headers: {
				"x-rapidapi-key": process.env.REACT_APP_API_KEY,
				"x-rapidapi-host": process.env.REACT_APP_API_HOST,
			},
			params: {
				league: `${id}`,
				season: "2022",
				last: "10",
				timezone: "Asia/Kolkata",
			},
		};

		axios(config)
			.then(function (response) {
				console.log(response.data);
				if (response.data["response"]) {
					setResults(response.data["response"]);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [id]);

	return (
		<>
			<h3
				style={{
					textAlign: "center",
					backgroundColor: primary_color,
					color: "white",
					padding: 10,
				}}
			>
				Results
			</h3>
			<div className="row" style={{ marginBottom: 40 }}>
				{results != null ? (
					results.map((result) => (
						<div className="col-sm-6" key={result["fixture"]["id"]}>
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">
										<Link
											to={`/${result["league"]["id"]}/${result["teams"]["home"]["id"]}`}
											className="link"
										>
											<img
												src={result["teams"]["home"]["logo"]}
												alt="home-team-logo"
												width="40px"
											/>{" "}
											{result["teams"]["home"]["name"]}{" "}
										</Link>
										{result["goals"]["home"]}-{result["goals"]["away"]}{" "}
										<Link
											to={`/${result["league"]["id"]}/${result["teams"]["away"]["id"]}`}
											className="link"
										>
											{result["teams"]["away"]["name"]}{" "}
											<img
												src={result["teams"]["away"]["logo"]}
												alt="away-team-logo"
												width="40px"
											/>
										</Link>
									</h5>
									<p className="card-text">
										{result["fixture"]["status"]["short"]}
									</p>
									<p className="card-text">
										{result["fixture"]["venue"]["name"]},{" "}
										{result["fixture"]["venue"]["city"]}
									</p>
									<p className="card-text">{result["league"]["round"]}</p>
								</div>
							</div>
						</div>
					))
				) : (
					<p style={{ textAlign: "center" }}>
						Results unavailable for this tournament
					</p>
				)}
			</div>
		</>
	);
};

export default Results;

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import primary_color from "../constants";

const Fixtures = ({ id }) => {
	const [fixtures, setFixtures] = useState(null);
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
				next: "10",
				timezone: "Asia/Kolkata",
			},
		};

		axios(config)
			.then(function (response) {
				console.log(response.data["response"]);
				setFixtures(response.data["response"]);
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
				Fixtures
			</h3>
			<div className="row" style={{ marginBottom: 40 }}>
				{fixtures ? (
					fixtures.map((fixture) => (
						<div className="col-sm-6" key={fixture["fixture"]["id"]}>
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">
										<Link
											to={`/${fixture["league"]["id"]}/${fixture["teams"]["home"]["id"]}`}
											className="link"
										>
											<img
												src={fixture["teams"]["home"]["logo"]}
												width="40px"
												alt="home-team-logo"
											/>{" "}
											{fixture["teams"]["home"]["name"]}
										</Link>{" "}
										vs{" "}
										<Link
											to={`/${fixture["league"]["id"]}/${fixture["teams"]["away"]["id"]}`}
											className="link"
										>
											{fixture["teams"]["away"]["name"]}{" "}
											<img
												src={fixture["teams"]["away"]["logo"]}
												width="40px"
												alt="away-team-logo"
											/>
										</Link>
									</h5>
									<p className="card-text">{fixture["fixture"]["date"]}</p>
									<p className="card-text">
										{fixture["fixture"]["venue"]["name"]},{" "}
										{fixture["fixture"]["venue"]["city"]}
									</p>
									<p className="card-text">{fixture["league"]["round"]}</p>
								</div>
							</div>
						</div>
					))
				) : (
					<p style={{ textAlign: "center" }}>
						Fixtures unavailable for this tournament
					</p>
				)}
			</div>
		</>
	);
};

export default Fixtures;

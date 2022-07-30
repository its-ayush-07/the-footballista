const LiveScores = () => {
	return (
		<>
			<h2 style={{ padding: 10 }}>Live Scores</h2>
			<div className="cont cont-live">
				<div
					id="wg-api-football-livescore"
					data-host="v3.football.api-sports.io"
					data-refresh="180"
					data-key="70d0719034fc0e657bf9c27a8ab9f787"
					data-theme=""
					data-show-errors="true"
					class="api_football_loader"
				></div>
			</div>
		</>
	);
};

export default LiveScores;

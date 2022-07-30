import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import primary_color from "../constants";

const CoverPicture = () => {
	return (
		<div className="image-container">
			<img
				src="https://ak6.picdn.net/shutterstock/videos/2530226/thumb/5.jpg"
				alt="cover-pic"
				style={{ width: "100vw", maxHeight: "70vh" }}
			/>
			<p className="image-text">
				Follow all the football action around the world.
				<span style={{ fontSize: "150%", fontWeight: "bold" }}>
					<Typewriter
						options={{
							strings: [
								"Live scores",
								"Tables",
								"Fixtures",
								"Results",
								"Squads",
							],
							autoStart: true,
							loop: true,
							pauseFor: 2000,
						}}
					/>
				</span>
				<Link
					to="browse"
					type="button"
					class="btn"
					style={{
						backgroundColor: primary_color,
						color: "white",
						width: 100,
						marginTop: 10,
					}}
				>
					Browse
				</Link>
			</p>
		</div>
	);
};

export default CoverPicture;

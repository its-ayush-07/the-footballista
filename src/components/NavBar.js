import { Link } from "react-router-dom";
import primary_color from "../constants";

const NavBar = () => {
	return (
		<nav class="navbar" style={{ backgroundColor: primary_color }}>
			<div class="container-fluid">
				<Link
					to="/"
					class="navbar-brand"
					style={{ color: "white", display: "flex", alignItems: "center" }}
				>
					<img
						src="https://pbs.twimg.com/profile_images/1057138054672969728/HM4TcYxQ_400x400.jpg"
						alt="app-logo"
						width="50"
						height="50"
						class="d-inline-block align-text-top"
						style={{ marginRight: 10 }}
					/>
					<span style={{ fontWeight: "bold", fontSize: 30 }}>
						The Footballista
					</span>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;

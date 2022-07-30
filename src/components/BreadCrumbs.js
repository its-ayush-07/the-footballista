import { Link } from "react-router-dom";

const BreadCrumbs = () => {
	return (
		<nav aria-label="breadcrumb" style={{ padding: 20, fontSize: 17 }}>
			<ol className="breadcrumb">
				<li className="breadcrumb-item">
					<Link to="/" className="link">
						Home
					</Link>
				</li>
				<li className="breadcrumb-item">
					<Link className="link" to="/browse">
						Browse
					</Link>
				</li>
			</ol>
		</nav>
	);
};

export default BreadCrumbs;

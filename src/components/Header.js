import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/logo.png";
const Header = ({ handleSearch }) => {
	return (
		<>
			<div className="logo-div">
				<img src={logo} alt="logo" />
			</div>
			<input
				onChange={handleSearch}
				className="form-control search"
				placeholder="Type to search..."></input>
		</>
	);
};

export default Header;

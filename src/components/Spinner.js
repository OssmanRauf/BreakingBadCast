import spinner from "../img/spinner.gif";
const Spinner = () => {
	return (
		<div className="spinner-div">
			<img className="spinner" src={spinner} alt="loading..." />
		</div>
	);
};

export default Spinner;

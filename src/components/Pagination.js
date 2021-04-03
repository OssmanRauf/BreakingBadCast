import "bootstrap/dist/css/bootstrap.min.css";
const Pagination = ({ cardsPerPage, totalCards, changePage, currentPage }) => {
	const pageNumbers = [];
	console.log("im at pagination");
	console.log(Math.ceil(totalCards / cardsPerPage), totalCards);
	for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
		console.log(i);
		pageNumbers.push(i);
	}
	return (
		// <div className="pagination">
		<nav aria-label="..." className="pagination-nav">
			<ul className="pagination">
				{" "}
				{pageNumbers.map((number) => {
					console.log(number, "hh");
					return (
						<li
							key={number}
							className="page-item"
							// if the page active is the same as the current page disable some styles
							style={currentPage === number ? activated : {}}>
							<a
								onClick={() => changePage(number)}
								className="page-link"
								href="/">
								{" "}
								{number}{" "}
							</a>{" "}
						</li>
					);
				})}{" "}
			</ul>{" "}
		</nav>
		// </div>
	);
};
// style for active page
const activated = {
	cursor: "default",
	pointerEvents: "none",
	textDecoration: "none",
};

export default Pagination;

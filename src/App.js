import { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./components/Header";
import CharactersGrid from "./components/CharactersGrid";
import Pagination from "./components/Pagination";
// import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [characters, setCharacters] = useState([]);
	const [isLoading, setisLoading] = useState(true);
	const [query, setQuery] = useState("");
	const cardsPerPage = 12;
	useEffect(() => {
		let source = Axios.CancelToken.source();
		const apiUrl = `https://www.breakingbadapi.com/api/characters?name=${query}`;
		const getData = async () => {
			try {
				const resp = await Axios.get(apiUrl, {
					cancelToken: source.token,
				});
				console.log("got response");
				setCharacters(resp.data);
				setisLoading(false);
				console.log(resp.data);
			} catch (error) {
				if (Axios.isCancel(error)) {
					console.log("fetch cancelled");
				} else {
					throw error;
				}
			}
		};
		getData();
		return () => {
			source.cancel();
		};
	}, [query]);

	const handleSearch = (e) => {
		setQuery(e.target.value);
	};

	// to get the index of the last card we multiply current page at the beginning is 1 and the limit per page thats 12
	const indexOfLastCard = currentPage * cardsPerPage;
	// if we are in the 2 page the indexOfLastCard is 24 and indexOfFirstCard is 24- the limit per page thats 10 so the index of the first card is 12
	const indexOfirstCard = indexOfLastCard - cardsPerPage;
	// list of cards that we can show:
	const currentCards = characters.slice(indexOfirstCard, indexOfLastCard);

	//change page
	const changePage = (pageNumber) => setCurrentPage(pageNumber);
	return (
		<div className="container">
			<Header handleSearch={handleSearch} />{" "}
			<CharactersGrid showSpinner={isLoading} data={currentCards} />{" "}
			<Pagination
				cardsPerPage={cardsPerPage}
				totalCards={characters.length}
				changePage={changePage}
				currentPage={currentPage}
			/>{" "}
		</div>
	);
};

export default App;

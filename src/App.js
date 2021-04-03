import { useState, useEffect } from "react";
import axios from "axios";
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
		const apiUrl = `https://www.breakingbadapi.com/api/characters?name=${query}`;
		const getData = async () => {
			const resp = await axios.get(apiUrl);
			setCharacters(resp.data);
			setisLoading(false);
		};
		getData();
	}, [query]);
	const handleSearch = (value) => {
		setQuery(value);
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
			<Header handleSearch={handleSearch} />
			<CharactersGrid showSpinner={isLoading} data={currentCards} />
			<Pagination
				cardsPerPage={cardsPerPage}
				totalCards={characters.length}
				changePage={changePage}
				currentPage={currentPage}
			/>
		</div>
	);
};

export default App;

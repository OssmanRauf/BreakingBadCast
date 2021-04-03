import Character from "./Character";
import Spinner from "./Spinner";
const CharactersGrid = ({ showSpinner, data }) => {
	// if data is loading show spinner loading when data is available show content
	return showSpinner ? (
		<Spinner />
	) : (
		<section className="cards">
			{data.map((character) => {
				return <Character key={character.char_id} character={character} />;
			})}
		</section>
	);
};

export default CharactersGrid;

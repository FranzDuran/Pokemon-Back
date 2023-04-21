import "./searchResult.css";
import { getNamePokemon } from "../../redux/action/index"
import { useDispatch } from "react-redux";
import { useState } from "react";

export const SearchResult = ({ result }) => {

    const [, setCurrentPage] = useState(1);
    const dispatch = useDispatch()

    function handleSubmit() {
        dispatch(getNamePokemon(result))
        setCurrentPage(1)
    }
    return (
        <div
            className="search-result"
            onClick={() => handleSubmit(result)}
        >
            {result}
        </div>
    );
};
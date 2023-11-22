import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    return(
        <div className="boxSearch border rounded-full md:w-1/3 p-2 flex items-center w-full">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5 px-2 " />
            <input type="text" placeholder="Type here" className="input input-ghost rounded-full w-full" />
        </div>
    );
}

export default SearchBar;
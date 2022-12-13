import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Paginate from "../Paginate/Paginate";

function StarShipList() {

    const API_URL = "https://swapi.dev/api/starships/";
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        axios
            .get(`${API_URL}?page=${currentPage}`)
            .then(response => {
                setData(response.data.results);
                setTotalItems(response.data.count);
                setSearchParams({ "page": currentPage });
            })
            .catch(error => setError(error));
    }, [currentPage]);

    if (error) return `Error: ${error.message}`;

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const prevPage = () => currentPage !== 1 ? setCurrentPage(currentPage - 1) : false;
    const nextPage = () => currentPage !== Math.ceil(totalItems / itemsPerPage) ? setCurrentPage(currentPage + 1) : false;

    const getStarShipId = url => {
        const arr = url.split(API_URL);
        const id = arr[arr.length - 1].slice(0, arr[arr.length - 1].length - 1);
        return id;
    }

    return (
        <div>
            {console.clear()}
            {console.log(data)}
            <div className="starship-list">
                {data.map((element, index) => {
                    return (
                        <Link to={getStarShipId(data[index].url)} className="starship-item" key={index}>
                            <p className="starship-name">{element.name}</p>
                            <p>{element.model}</p>
                        </Link>
                    );
                }
                )}
            </div>
            <Paginate itemsPerPage={itemsPerPage} totalItems={totalItems} paginate={paginate} currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} />
        </div>
    );
}

export default StarShipList;
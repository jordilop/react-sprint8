import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Paginate from "../Paginate/Paginate";

function StarShips() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/?page=${currentPage}`)
            .then(response => {
                setData(response.data.results);
                setTotalItems(response.data.count);
            })
            .catch(error => setError(error));
    }, [currentPage]);

    if (error) return `Error: ${error.message}`;

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const prevPage = () => currentPage !== 1 ? setCurrentPage(currentPage - 1) : false;
    const nextPage = () => currentPage !== Math.ceil(totalItems / itemsPerPage) ? setCurrentPage(currentPage + 1) : false;

    return (
        <div>
            {console.log(data)}
            <div className="starship-list">
                {data.map((element, index) => {
                    return (
                        <div className="starship-item" key={index}>
                            <p className="starship-name">{element.name}</p>
                            <p>{element.model}</p>
                        </div>
                    );
                }
                )}
            </div>
            <Paginate itemsPerPage={itemsPerPage} totalItems={totalItems} paginate={paginate} currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} />
        </div>
    );
}

export default StarShips;
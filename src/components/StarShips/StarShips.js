import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function StarShips() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/starships/')
            .then(response => {
                setData(response.data.results);
            })
            .catch(error => setError(error));
    }, []);

    if (error) return `Error: ${error.message}`;

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
        </div>
    );
}

export default StarShips;
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Pilots from "../Pilots/Pilots";

function StarShip() {

    const API_URL = "https://swapi.dev/api/starships/";
    const IMAGE_URL = "https://starwars-visualguide.com/assets/img/starships/";
    const IMAGE_URL_NOIMG = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(`${IMAGE_URL + id}.jpg`);

    useEffect(() => {
        axios
            .get(`${API_URL + id}`)
            .then(response => setData(response.data))
            .catch(error => setError(error));
        axios
            .get(`${image}`)
            .then(response => console.log("Image OK!"))
            .catch(error => setImage(IMAGE_URL_NOIMG));
    }, [id, image]);

    if (error) return `Error: ${error.message}`;

    return (
        <div>
            <img src={image} alt="starship-img" />
            <h1>{data.name}</h1>
            <p>Model: {data.model}</p>
            <p>Manufacturer: {data.manufacturer}</p>
            <p>Cost in credits: {data.cost_in_credits}</p>
            <p>Length: {data.length}</p>
            <p>Max Atmosphering Speed: {data.max_atmosphering_speed}</p>
            <p>Crew: {data.crew}</p>
            <p>Passengers: {data.passengers}</p>
            <p>Starship Class: {data.starship_class}</p>
            <p>Hyperdrive Rating: {data.hyperdrive_rating}</p>
            <p>Consumables: {data.consumables}</p>
            <p>MGLT: {data.MGLT}</p>
            <p>
                Pilots:
                {
                    (data.pilots && data.pilots.length > 0 && data.pilots.map(url => <Pilots url={url} />))
                    || "No data"
                }
            </p>
        </div>
    );
}

export default StarShip;
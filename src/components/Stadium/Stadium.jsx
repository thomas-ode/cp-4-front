import React, { useState, useEffect } from 'react';
import './Stadium.css';
import axios from "axios";
import { FETCH } from '../../Fetch';

function Stadium() {

    const [stade, setStade] = useState([])

    useEffect(() => {
        axios
            .get(`${FETCH}/stadiums`)
            .then((res) => setStade(res.data));
    }, []);

    return (
        <div className='all-stadium'>
            <h1 className="stad-title">Stade</h1>
            {stade.map((stadiums) =>
                <div className="stads">
                    <ul className="stade-list">
                        <li className="single-stade">💺 Nom : {stadiums.name}</li>
                        <li className="single-stade">💺 Année de construction : {stadiums.creation_date}</li>
                        <li className="single-stade">💺 Nombre de places : {stadiums.seats}</li>
                    </ul>
                    <div className="contain-img">
                        <img src={stadiums.img} alt="Stadium" className="stadium-img" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Stadium

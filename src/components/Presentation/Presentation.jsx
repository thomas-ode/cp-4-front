import React, { useState, useEffect } from 'react';
import './Presentation.css';
import axios from "axios";
import { FETCH } from '../../Fetch';

function Presentation() {

    const [info, setInfos] = useState([])

    useEffect(() => {
        axios
            .get(`${FETCH}/presentations`)
            .then((res) => setInfos(res.data));
    }, []);

    return (
        <div className='presentation'>
            <h1 className='big-title'>SEATTLE SEAHAWKS</h1>
            <div className='all-infos'>
                {info.map((infos) =>
                    <div className="info-list">
                        <img src={infos.logo} alt='Seahawks group' className="img-info" />
                        <ul className="list-info">
                            <li className='li-infos'><span className='logo-ball'>🏈 </span> Date de création : {infos.creation_date}</li>
                            <li className='li-infos'><span className='logo-ball'>🏈 </span> Division : {infos.division}</li>
                            <li className='li-infos'><span className='logo-ball'>🏈 </span> Stade : {infos.stadium}</li>
                            <li className='li-infos'><span className='logo-ball'>🏈 </span> Propriétaire : {infos.owner}</li>
                            <li className='li-infos'><span className='logo-ball'>🏈 </span> Head coach : {infos.coach}</li>
                            <li className='li-infos'><span className='logo-ball'>🏈 </span> SuperBowl gagné : {infos.championship}</li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="separation"></div>
        </div>
    )
}

export default Presentation

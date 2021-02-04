import React, { useState, useEffect } from 'react';
import './Roster.css';
import axios from "axios";
import { FETCH } from '../../Fetch';

function RosterList() {

    const [player, setPlayers] = useState([])

    useEffect(() => {
        axios
            .get(`${FETCH}/rosters/players`)
            .then((res) => setPlayers(res.data));
    }, []);

    return (
        <div className='roster-all'>
            <h1 className='roster-title'>ROSTER</h1>
            <h2 className='player-title'>Joueurs</h2>
            <table>
                <tr>
                    <td>Nom</td>
                    <td>Position</td>
                    <td>Âge</td>
                    <td>Expérience</td>
                    <td>Numéro</td>
                </tr>
                {player.map((players) => 
                    <tr>
                        <td>{players.name}</td>
                        <td>{players.position}</td>
                        <td>{players.age}</td>
                        <td>{players.experience}</td>
                        <td>{players.number}</td>
                    </tr>
                )}
            </table>
            

        </div>
    )
}

export default RosterList;

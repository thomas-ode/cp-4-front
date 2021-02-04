import React, { useState, useEffect } from 'react';
import './Roster.css';
import axios from "axios";
import { FETCH } from '../../Fetch';


function RosterList() {

    const [player, setPlayers] = useState([])
    const [coach, setCoach] = useState([])

    useEffect(() => {
        axios
            .get(`${FETCH}/rosters/players`)
            .then((res) => setPlayers(res.data));
    }, []);

    useEffect(() => {
        axios
            .get(`${FETCH}/rosters/coaches`)
            .then((res) => setCoach(res.data));
    }, []);

    return (
        <div className='roster-all'>
            <h1 className='roster-title'>ROSTER</h1>
            <h2 className='player-title'>Joueurs</h2>
            <table>
                <tr>
                    <th>Nom</th>
                    <th>Position</th>
                    <th>Âge</th>
                    <th>Expérience</th>
                    <th>Numéro</th>
                </tr>
                {player.map((players) => 
                    <tr>
                        <td>{players.name}</td>
                        <td>{players.position}</td>
                        <td>{players.age}</td>
                        <td>{players.experience}</td>
                        <td>#{players.number}</td>
                    </tr>
                )}
            </table>
            <h2 className='player-title'>Coaches</h2>
            <table>
                <tr>
                    <th>Nom</th>
                    <th>Rôle</th>
                    <th>Expérience</th>
                </tr>
                {coach.map((coaches) => 
                    <tr>
                        <td>{coaches.name}</td>
                        <td>{coaches.position}</td>
                        <td>{coaches.experience}</td>
                    </tr>
                )}
            </table>
            

        </div>
    )
}

export default RosterList;

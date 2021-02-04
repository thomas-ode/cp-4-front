import React, { useState, useEffect } from 'react';
import './Administrator.css';
import axios from "axios";
import { FETCH } from '../../Fetch';

function Administrator() {

    const [player, setPlayer] = useState([]);
    const [coach, setCoach] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [playerPosition, setPlayerPosition] = useState('');
    const [playerAge, setPlayerAge] = useState('');
    const [playerExpe, setPlayerExpe] = useState('');
    const [playerNum, setPlayerNum] = useState('');
    const [coachName, setCoachName] = useState('');
    const [coachPosition, setCoachPosition] = useState('');
    const [coachExp, setCoachExp] = useState('');

    useEffect(() => {
        axios
            .get(`${FETCH}/rosters/players`)
            .then((res) => setPlayer(res.data));
    }, []);

    useEffect(() => {
        axios
            .get(`${FETCH}/rosters/coaches`)
            .then((res) => setCoach(res.data));
    }, []);

    const handleRejectPlayer = (e, players) => {
        e.preventDefault();
        axios.delete(`${FETCH}/rosters/admin/delete-player/${players}`)
    }

    const handleRejectCoach = (e, coaches) => {
        e.preventDefault();
        axios.delete(`${FETCH}/rosters/admin/delete-coach/${coaches}`)
    }

    const handleSubmitPlayer = (e) => {
        e.preventDefault();

        axios
            .post(`${FETCH}/rosters`, {
                name: playerName,
                role: 'player',
                position: playerPosition,
                age: playerAge,
                experience: playerExpe,
                number: playerNum,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    const handleSubmitCoach = (e) => {
        e.preventDefault();

        axios
            .post(`${FETCH}/rosters`, {
                name: coachName,
                role: 'coach',
                position: coachPosition,
                experience: coachExp,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    return (
        <div className='all-admin'>
            <h1 className='admin-title'>ADMINISTRATEUR</h1>
            <h2 className='section-title'>Supprimer un joueur</h2>
            <table>
                <tr>
                    <th>Nom</th>
                    <th>Position</th>
                    <th>Âge</th>
                    <th>Expérience</th>
                    <th>Numéro</th>
                    <th style={{ textAlign: 'center' }} >Suppression</th>
                </tr>
                {player.map((players) =>
                    <tr>
                        <td>{players.name}</td>
                        <td>{players.position}</td>
                        <td>{players.age}</td>
                        <td>{players.experience}</td>
                        <td>#{players.number}</td>
                        <td style={{ textAlign: 'center' }} ><button onClick={(e) => handleRejectPlayer(e, players.id)}>🗑</button></td>
                    </tr>
                )}
            </table>
            <h2 className='section-title'>Supprimer un coach</h2>
            <table>
                <tr>
                    <th>Nom</th>
                    <th>Rôle</th>
                    <th>Expérience</th>
                    <th style={{ textAlign: 'center' }} >Suppression</th>
                </tr>
                {coach.map((coaches) =>
                    <tr>
                        <td>{coaches.name}</td>
                        <td>{coaches.position}</td>
                        <td>{coaches.experience}</td>
                        <td style={{ textAlign: 'center' }} ><button onClick={(e) => handleRejectCoach(e, coaches.id)}>🗑</button></td>
                    </tr>
                )}
            </table>
            <h2 className='section-title'>Ajouter un joueur</h2>
            <form onSubmit={handleSubmitPlayer} className='form-roster'>
                <label>
                    Nom:
                <input type="text" name="name" value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)} />
                </label>
                <label>
                    Position:
                <input type="text" name="position" value={playerPosition}
                        onChange={(e) => setPlayerPosition(e.target.value)} />
                </label>
                <label>
                    Age:
                <input type="text" name="âge" value={playerAge}
                        onChange={(e) => setPlayerAge(e.target.value)} />
                </label>
                <label>
                    Expérience:
                <input type="text" name="expérience" value={playerExpe}
                        onChange={(e) => setPlayerExpe(e.target.value)} />
                </label>
                <label>
                    Numéro:
                <input type="text" name="numéro" value={playerNum}
                        onChange={(e) => setPlayerNum(e.target.value)} />
                </label>
                <button
                    type="submit"
                    value="Submit"
                >✅</button>
            </form>
            <h2 className='section-title'>Ajouter un coach</h2>
            <form onSubmit={handleSubmitCoach} className='form-roster'>
                <label>
                    Nom:
                <input type="text" name="name" value={coachName}
                        onChange={(e) => setCoachName(e.target.value)} />
                </label>
                <label>
                    Rôle:
                <input type="text" name="position" value={coachPosition}
                        onChange={(e) => setCoachPosition(e.target.value)} />
                </label>
                <label>
                    Expérience:
                <input type="text" name="expérience" value={coachExp}
                        onChange={(e) => setCoachExp(e.target.value)} />
                </label>
                <button
                    type="submit"
                    value="Submit"
                >✅</button>
            </form>
        </div>
    )
}

export default Administrator

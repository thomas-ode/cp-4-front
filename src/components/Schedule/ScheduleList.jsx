import React, { useState, useEffect } from 'react';
import './Schedule.css';
import axios from "axios";
import { FETCH } from '../../Fetch';

function ScheduleList() {

    const [regular, setRegular] = useState([])
    const [post, setPost] = useState([])

    useEffect(() => {
        axios
            .get(`${FETCH}/schedules/regulars`)
            .then((res) => setRegular(res.data));
    }, []);

    useEffect(() => {
        axios
            .get(`${FETCH}/schedules/post-seasons`)
            .then((res) => setPost(res.data));
    }, []);

    return (
        <div className='schedule-all'>
            <h1 className='schedule-title'>MATCHES</h1>
            <h2 className='regular-title'>Saison Régulière</h2>
            {regular.map((regulars) =>
                <div className='all-games'>
                    <h3 className="week-game">{regulars.week}</h3>
                    <div className="date-game">{regulars.date}</div>
                    <div className="scoreboard">
                        <img src={regulars.home_logo} alt='home team' className="logo-team" />
                        <div className="team-name">{regulars.home}</div>
                        <div className="score">{regulars.home_score}</div>
                        <div className="middle-bar">⥊</div>
                        <div className="score">{regulars.away_score}</div>
                        <div className="team-name">{regulars.away}</div>
                        <img src={regulars.away_logo} alt="away team" className="logo-team" />
                    </div>
                    <div className="sepa"></div>
                </div>
            )}
            <h2 className='regular-title'>Postseason</h2>
            {post.map((posts) =>
                <div className='all-games'>
                    <h3 className="week-game">{posts.week}</h3>
                    <div className="date-game">{posts.date}</div>
                    <div className="scoreboard">
                        <img src={posts.home_logo} alt='home team' className="logo-team" />
                        <div className="team-name">{posts.home}</div>
                        <div className="score">{posts.home_score}</div>
                        <div className="middle-bar">⥊</div>
                        <div className="score">{posts.away_score}</div>
                        <div className="team-name">{posts.away}</div>
                        <img src={posts.away_logo} alt="away team" className="logo-team" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ScheduleList

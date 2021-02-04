import React, { useState, useEffect } from 'react';
import './Jersey.css';
import axios from "axios";
import { FETCH } from '../../Fetch';

function Jersey() {

    const [uniform, setUniform] = useState([])

    useEffect(() => {
        axios
            .get(`${FETCH}/jerseys`)
            .then((res) => setUniform(res.data));
    }, []);

    return (
        <div className='all-jersey'>
            <h1 className="title-jersey">Uniformes</h1>
            <div className="around-uni">
                {uniform.map((uniforms) =>
                    <div className="card-uni">
                        <img src={uniforms.img} alt={uniforms.name} className="uni-img" />
                        <div className="uni-name">{uniforms.name}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Jersey

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GiftPacage.css';
import PacageData from './PacageData/PacageData.json';

const GiftPacage = () => {

    const [pacage, setPacage] = useState([]);
    useEffect(() => {
        setPacage(PacageData);
    }, []);

    return (
        <div className="gift_pacage">
            <h3>Pacage For Gift</h3>
            <div className="pacage_content">
                {
                    pacage.map(gift =>
                        <Link to={`/pacage/${gift.id}`} key={gift.id}>
                            <div className="gift_item">
                                <img src={gift.image} alt="" />
                                <h4>{gift.title}</h4>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default GiftPacage;
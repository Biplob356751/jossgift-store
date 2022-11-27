import React, { useEffect, useRef, useState } from 'react';
import './Deals.css';

const Deals = () => {
    const [days, setDayes] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    let interval = useRef();

    const startCounters = () => {
        const countDownDate = new Date('february 31, 2023 00:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const dayes = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setDayes(dayes);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }

        }, 1000)
    };

    useEffect(() => {
        startCounters();
        return () => {
            clearInterval(interval.current);
        };
    }, []);
    return (
        <div className="day_of_deals_page">
            <h3>Day Of Deals</h3>
            <div className="deals_content">
                <h1>FLASH SALE <span>50% OFF</span> ALL PRODUCTS</h1>
                <div className="deals">
                    <div className="day_deals">
                        <h4>{days}</h4>
                        <p>Day</p>
                    </div>
                    <div className="day_deals">
                        <h4>{hours}</h4>
                        <p>Hours</p>
                    </div>
                    <div className="day_deals">
                        <h4>{minutes}</h4>
                        <p>Miniutes</p>
                    </div>
                    <div className="day_deals">
                        <h4>{seconds}</h4>
                        <p>Secounds</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;
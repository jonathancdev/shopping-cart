import React, { useState, useEffect } from 'react';
import './Home.css'

const Home = () => {

    return (
        <div className='page home'>
            <h1>This is the homepage</h1>
            <div className="home-grid">
                <div className="home-item-wrap">color</div>
                <div className="home-item-wrap">black and white</div>
                <div className="home-item-wrap">35mm</div>
                <div className="home-item-wrap">120</div>
            </div>
        </div>
    )
}

export default Home;
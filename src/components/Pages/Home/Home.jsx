import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import './Home.css'
import home1 from '../../../img/rect-home/home1.png'
import home2 from '../../../img/rect-home/home2.png'
import home3 from '../../../img/rect-home/home3.png'
import home4 from '../../../img/rect-home/home4.png'
import SearchBar from './SearchBar'


const Home = (props) => {

    return (
        <div className='page home'>

            <div className="home-grid">
                <div className="home-item-wrap">
                <Link to='/shop/category/color/black-and-white'>
                    <div className="home-item-img-wrap">
                        <img src={home1} className="home-item-img" alt="black and white film" />
                    </div>
                    <p className="home-item-title">black and white</p>
                    </Link>
                </div>

                <div className="home-item-wrap">
                <Link to='/shop/category/color/color-all'>
                    <div className="home-item-img-wrap">
                        <img src={home2} className="home-item-img" alt="color film" />
                    </div>
                    <p className="home-item-title">color & slide</p>
                    </Link>
                </div>

                <div className="home-item-wrap">
                <Link to='/shop/category/format/35mm'>
                    <div className="home-item-img-wrap">
                        <img src={home3} className="home-item-img" alt="35mm film" />
                    </div>
                    <p className="home-item-title">35mm</p>
                    </Link>
                </div>

                <div className="home-item-wrap">
                <Link to='/shop/category/format/120'>
                    <div className="home-item-img-wrap">
                        <img src={home4} className="home-item-img" alt="120 film" />
                    </div>
                    <p className="home-item-title">medium format</p>
                    </Link>
                </div>
            </div>

            <div className="home-banner-wrap">
            <Link to='/shop'>
                    <div className="home-banner">
                        <h1 className="home-banner-title">browse all film</h1>
                    <i className="home-banner-arrow far fa-arrow-alt-circle-right"></i>
                </div>
            </Link>
            </div>
            <div className="home-banner-wrap search">
                <div className="home-banner search">

                        

                </div>
                <SearchBar items={props.items}/>
            </div>

        </div>
    )
}

export default Home;
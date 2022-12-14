import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Products = () => {
    return (
        <>
            <section className="slide-option" id="comments">
                <div id="stffull" className="highway-slider">
                    <div className="container highway-barrier">
                        <ul className="highway-lane">
                            <li id="red" className="highway-car">
                                <div className="user__card">
                                    <div className="user__name__section" id="user-name-section1">
                                        <h1>Mariam Belafuente</h1>
                                        <div className="stars__section">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        </div>
                                    </div>
                                    <div className="comments__section">
                                        <img className="user__image" src="https://randomuser.me/api/portraits/women/22.jpg" alt="user" title="user"></img>
                                        <q className="user__comments" id="user-comments1">Nice to talk with them, my husband must to travel every week and we always trust in this company for their excellent service.</q>
                                    </div>
                                </div>                            
                            </li>
                            <li id="orange" className="highway-car">
                                <div className="user__card">
                                    <div className="user__name__section" id="user-name-section2">
                                        <h1>Josh Garnett</h1>
                                        <div className="stars__section">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star "></span>
                                            <span className="fa fa-star "></span>
                                            <span className="fa fa-star "></span>
                                        </div>
                                    </div>
                                    <div className="comments__section">
                                        <img className="user__image" src="https://randomuser.me/api/portraits/men/22.jpg" alt="user" title="user"></img>
                                        <q className="user__comments" id="user-comments2">Incredible service, as always! You guys are better day by day</q>
                                    </div>
                                </div>
                            </li>
                            <li id="yellow" className="highway-car">
                                <div className="user__card">
                                    <div className="user__name__section" id="user-name-section3">
                                        <h1>Anna Lang</h1>
                                        <div className="stars__section">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star "></span>
                                            <span className="fa fa-star "></span>
                                            <span className="fa fa-star "></span>
                                            <span className="fa fa-star "></span>
                                        </div>
                                    </div>
                                    <div className="comments__section">
                                        <img className="user__image" src="https://randomuser.me/api/portraits/women/21.jpg" alt="user" title="user"></img>
                                        <q className="user__comments" id="user-comments3">Thanks a lot for a wonderful service to my bf.</q>
                                    </div>
                                </div>
                            </li>
                            <li id="green" className="highway-car logo__container">
                                <div className='user--card'>
                                    <h4>Leave us your comments!</h4>
                                </div>
                            </li>
                            <li id="blue" className="highway-car logo__container">
                                <h4>
                                    Many thanks!
                                </h4>
                                <div className='logo' alt='logo' />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Products = () => {
    return (
        <>
            <div className="testimonials--section" id="comments">
                <div className="testimonials__title" id='testimonials-title'>
                    <h1 className='title'>Testimonials</h1>
                    <span className='subtitle'>Top ratings</span>
                </div>
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
            </div>
        </>
    );
};

export default Products;
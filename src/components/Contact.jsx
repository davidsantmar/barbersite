import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
        starsRated: ''
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_qt6uher',
            'template_h7gucd8',
            toSend,
            'mZFlYH32MWGNn7UKB'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });   
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            for (let i = 1; i <= 5; i++){
                document.getElementById(i).style.color = 'black';
            }
    };
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    const handleRated = (e) =>{
        e.preventDefault();
        for (let i = 1; i <= Number(e.target.id); i++){
            document.getElementById(i).style.color = 'orange';
        }
        toSend.starsRated = 'Stars: ' + Number(document.getElementById(e.target.id).id);
    }
    return (
        <div className='feedback--form' id="contact">
            <form className='form--container' 
            onSubmit={onSubmit}>
                <div className='sub--title' id='sub-title'>
                    <h1 id='contact-title'>Contact form</h1>
                </div>
                <input
                    className='name__field'
                    type='text'
                    name='from_name'
                    placeholder=' Type your name'
                    value={toSend.from_name}
                    onChange={handleChange}
                    id='name'
                />
                <input
                    className='email__field'
                    type='email'
                    name='reply_to'
                    placeholder=' Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                    id='email'
                />
                <textarea
                    className='text__field'
                    name='message'
                    placeholder=' Your message or schedule'
                    value={toSend.message}
                    onChange={handleChange}
                    id='message'
                />
                <div className='rating--container' id='rating-container'>
                    <span className='title' id='rating-title'>Your rating</span>
                    <div className="stars__section">
                        <button className="fa fa-star" id='1' onClick={handleRated}></button>
                        <button className="fa fa-star" id='2' onClick={handleRated}></button>
                        <button className="fa fa-star" id='3' onClick={handleRated}></button>
                        <button className="fa fa-star" id='4' onClick={handleRated}></button>
                        <button className="fa fa-star" id='5' onClick={handleRated}></button>
                    </div>
                </div>
                <button 
                    className='submit__button navbar--animation' 
                    type='submit'
                    id='submit-button'
                >
                    Submit
                </button>
            </form>
            <div className='contact--details'>
                    <ul className='details__list' id='details-list'>
                        <li>Pl. Catalunya, 1</li>
                        <li>Barcelona</li>
                        <li>Spain</li>
                        <li>loremipsum@loremipsum.com</li>
                        <li>935551122</li>
                    </ul>
                    <div className='social__media'>
                        <a className="insta" href="https://www.instagram.com" target="_blank" alt='instagram logo' title="instagram logo"></a>
                        <a className='face' href='https://www.facebook.com' target="_blank" alt='facebook logo' title="facebook logo"></a>
                        <a className='twit' href='https://www.twitter.com' target="_blank" alt='twitter logo' title="twitter logo"></a>
                    </div>
                </div>
                <div className='google--map'>
                    <iframe className='map__frame' title='google-map'
                    src='https://maps.google.com/maps?q=plaza%20catalunya,%201%20Barcelona&t=&z=13&ie=UTF8&iwloc=&output=embed'>
                    </iframe>
                </div>
        </div>
    );
};

export default Contact;
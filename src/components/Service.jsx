import React from 'react';

const Service = () => {
    return (
        <div className='service--section'id='service'>
            <div className='shaving--container' id='shaving-container'>
                <span className='container__info' id='container-info1'>
                    We work with the most qualified professionals and the high standing products to provide and keep the higher level 
                    service on industry. Moreover, we are always trying to improve our skills and we are checking the american styles 
                    and state-of-the-art technologies to adapt ourselves to the last. 
                    To achieve the best service you got to use the best products and tools 
                </span>
                <div className='shaving__image' title='shaving' alt='shaving'></div>
            </div>
            <div className='cutting--container' id='cutting-container'>
                <div className='cutting__image' title='cutting' alt='cutting'></div>
                <span className='container__info' id='container-info2'>
                    We work with the most qualified professionals and the high standing products to provide and keep the higher level 
                    service on industry. Moreover, we are always trying to improve our skills and we are checking the american styles 
                    and state-of-the-art technologies to adapt ourselves to the last. 
                </span>
            </div>
        </div>
    );
};

export default Service;
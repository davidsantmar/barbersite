import React from 'react';

const Hamburger = () => {
    const closeMenu = () => {
        document.getElementById('menu-toggle').checked = false;
    }
    return (
        <>
            <nav className='hamburguer--container' id='hamburguer-container'>
                <div className='logo'>
                </div>
                  <input id='menu-toggle' type='checkbox' />
                  <label className='menu-button-container' htmlFor='menu-toggle'> {/* htmlFor only for React */}
                  <div className='menu-button' id='menu-button'>
                  </div>
                  </label>
                <ul className='menu'>
                    <li onClick={closeMenu}>
                        <a href='#aboutus' className='nav__link__hamburguer'>
                            About us
                        </a>
                    </li>
                    <li onClick={closeMenu}>
                        <a href='#service' className='nav__link__hamburguer'>                      
                        Service
                        </a>
                    </li>
                    <li onClick={closeMenu}>
                        <a href='#comments' className='nav__link__hamburguer'>
                            Comments
                        </a>
                    </li>
                    <li onClick={closeMenu}>
                        <a href='#contact' className='nav__link__hamburguer nav__link__contact'>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Hamburger;
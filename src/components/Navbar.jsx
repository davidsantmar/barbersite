import React from 'react';

const Navbar = () => {
    const toTop = () => {
        if (window.scrollY >= 100) {
          document.getElementById('top--button').classList.add('show');
        } else {
          document.getElementById('top--button').classList.remove('show');
        }
    }
    window.addEventListener("scroll", toTop);
    window.addEventListener("resize", toTop);
    const handleButton = () => {
        const button = document.getElementById('switch-label');
        if (button.checked === true){   //light mode
            document.getElementById('header-container').style.backgroundColor = 'whitesmoke';
            document.getElementById('hamburguer-container').style.backgroundColor = 'whitesmoke';
            document.getElementById('menu-button').style.backgroundColor = 'lightcoral';
            document.getElementById('nav-link1').style.color = 'rgb(45, 44, 44)';
            document.getElementById('nav-link2').style.color = 'rgb(45, 44, 44)';
            document.getElementById('nav-link3').style.color = 'rgb(45, 44, 44)';
            document.getElementById('nav-link4').style.color = 'rgb(45, 44, 44)';
            document.getElementById('title').style.backgroundColor = 'whitesmoke';
            document.getElementById('title').style.color = 'rgb(45, 44, 44)';
            document.getElementById('about-us-info').style.color = 'rgb(45, 44, 44)';
            document.getElementById('about-us-info').style.backgroundColor = 'whitesmoke';
            document.getElementById('title-button').innerHTML= 'Dark';
            document.getElementById('title-button').style.color= 'rgb(45, 44, 44)';
            document.getElementById('shaving-container').style.backgroundColor = 'whitesmoke';
            document.getElementById('container-info1').style.color = 'rgb(45, 44, 44)';
            document.getElementById('cutting-container').style.backgroundColor = 'whitesmoke';
            document.getElementById('container-info2').style.color = 'rgb(45, 44, 44)';
            document.getElementById('comments').style.backgroundColor = 'whitesmoke';
            document.getElementById('testimonials-title').style.color = 'rgb(45, 44, 44)';
            document.getElementById('user-name-section1').style.color = 'rgb(45, 44, 44)';
            document.getElementById('user-comments1').style.color = 'rgb(45, 44, 44)';
            document.getElementById('user-name-section2').style.color = 'rgb(45, 44, 44)';
            document.getElementById('user-comments2').style.color = 'rgb(45, 44, 44)';
            document.getElementById('user-name-section3').style.color = 'rgb(45, 44, 44)';
            document.getElementById('user-comments3').style.color = 'rgb(45, 44, 44)';
            document.getElementById('sub-title').style.backgroundColor = 'whitesmoke';
            document.getElementById('sub-title').style.color = 'rgb(45, 44, 44)';
            document.getElementById('name').style.backgroundColor = 'whitesmoke';
            document.getElementById('email').style.backgroundColor = 'whitesmoke';
            document.getElementById('message').style.backgroundColor = 'whitesmoke';
            document.getElementById('name').style.color = 'rgb(45, 44, 44)';
            document.getElementById('email').style.color = 'rgb(45, 44, 44)';
            document.getElementById('message').style.color = 'rgb(45, 44, 44)';
            document.getElementById('rating-container').style.color = 'rgb(45, 44, 44)';
            document.getElementById('rating-container').style.backgroundColor = 'whitesmoke';
            document.getElementById('submit-button').style.color = 'rgb(45, 44, 44)';
            document.getElementById('submit-button').style.backgroundColor = 'whitesmoke';
            document.getElementById('details-list').style.color = 'rgb(45, 44, 44)';
            document.getElementById('details-list').style.backgroundColor = 'whitesmoke';
        }else{  //dark mode
            document.getElementById('header-container').style.backgroundColor = 'rgb(45, 44, 44)';
            document.getElementById('hamburguer-container').style.backgroundColor = 'rgb(45, 44, 44)';
            document.getElementById('menu-button').style.backgroundColor = 'lightcoral';
            document.getElementById('nav-link1').style.color = 'whitesmoke';
            document.getElementById('nav-link2').style.color = 'whitesmoke';
            document.getElementById('nav-link3').style.color = 'whitesmoke';
            document.getElementById('nav-link4').style.color = 'whitesmoke';
            document.getElementById('title').style.backgroundColor = 'rgb(45, 44, 44)';
            document.getElementById('title').style.color = 'whitesmoke';
            document.getElementById('about-us-info').style.color = 'whitesmoke';
            document.getElementById('about-us-info').style.backgroundColor = 'rgb(45, 44, 44)';
            document.getElementById('title-button').innerHTML= 'Light';
            document.getElementById('title-button').style.color= 'whitesmoke';
            document.getElementById('shaving-container').style.backgroundColor= 'rgb(45, 44, 44)';
            document.getElementById('container-info1').style.color= 'whitesmoke';
            document.getElementById('cutting-container').style.backgroundColor = 'rgb(45, 44, 44)';
            document.getElementById('container-info2').style.color = 'whitesmoke';
            document.getElementById('comments').style.backgroundColor = 'rgb(45, 44, 44)';
            document.getElementById('testimonials-title').style.color = 'whitesmoke';
            document.getElementById('user-name-section1').style.color = 'whitesmoke';
            document.getElementById('user-comments1').style.color = 'whitesmoke';
            document.getElementById('user-name-section2').style.color = 'whitesmoke';
            document.getElementById('user-comments2').style.color = 'whitesmoke';
            document.getElementById('user-name-section3').style.color = 'whitesmoke';
            document.getElementById('user-comments3').style.color = 'whitesmoke';
            document.getElementById('sub-title').style.backgroundColor = 'rgb(45, 44, 44)';
            document.getElementById('sub-title').style.color = 'whitesmoke';
            document.getElementById('name').style.backgroundColor = 'rgb(45, 44, 44)';
            document.getElementById('email').style.backgroundColor = 'rgb(45, 44, 44)';
            document.getElementById('message').style.backgroundColor = 'rgb(45, 44, 44)';
            document.getElementById('name').style.color = 'whitesmoke';
            document.getElementById('email').style.color = 'whitesmoke';
            document.getElementById('message').style.color = 'whitesmoke';
            document.getElementById('rating-container').style.color = 'white';
            document.getElementById('rating-container').style.backgroundColor = 'rgb(45, 44, 44)';
            document.getElementById('submit-button').style.color = 'whitesmoke';
            document.getElementById('submit-button').style.backgroundColor = 'rgb(45, 44, 44)';
            document.getElementById('details-list').style.color = 'whitesmoke';
            document.getElementById('details-list').style.backgroundColor = 'rgb(45, 44, 44)';
        }
    }
    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }  
    return (
        <>
            <div className='button--top' id='top--button' onClick={topFunction} title='Go to top'>
                <div className='primary text'>&#x21EA;</div>
                <div className='secondary text'>Top</div>
            </div> 
            <nav className='header--container' id='header-container'>
              <div className="logo">
              </div>
              <a href="#aboutus" className="nav__link navbar--animation" id='nav-link1'>
                About us
              </a>
              <a href="#service" className="nav__link navbar--animation" id='nav-link2'>
                  Service
              </a>
              <a href="#comments" className="nav__link navbar--animation" id='nav-link3'>
                  Comments
              </a>
              <a href="#contact" className="nav__link navbar--animation" id='nav-link4'>
                  Contact
              </a>
            </nav>
            <div className='switch--button--container'>
                <div className="title--button--container">
                    <span className="title__button" id="title-button">Light</span>
                </div>
                <div className="switch-button" id="switch-button">
                    <input type="checkbox" name="switch-button" id="switch-label" 
                    className="switch-button__checkbox" onClick={handleButton}/>
                    <label htmlFor="switch-label" className="switch-button__label" id="button-label"></label>
                </div>
           </div> 
        </>
    );
};

export default Navbar;
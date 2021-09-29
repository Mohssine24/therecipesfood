import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
// import { GiWhirlpoolShuriken } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


const Header = () => {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {

  //   showButton();

  // }, []);

  // window.addEventListener('resize', showButton);



  return (
    <header>
      <IconContext.Provider value={
        {
          color: '#FA843C'
        }
      } >
        <nav className={click ? 'navbar active' : 'navbar'}>
          <div className='navbar-container container-header'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              {/* <GiWhirlpoolShuriken className='navbar-icon' /> */}
              <img alt="The recipes food" src="http://therecipesfood.com/the-recipes-food-logo-mo-2x.png" style={{ height: '80%' }} />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className={click ? 'nav-item active' : 'nav-item'}>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              {/* <li className={click ? 'nav-item2 active' : 'nav-item2'}>
                <Link
                  to='/blog'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
              </li> */}
              <li className={click ? 'nav-item4 active' : 'nav-item4'}>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </header>
  );
}

export default Header;

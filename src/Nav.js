import React, {useEffect, useState} from 'react';
import './Nav.css'

const netflixLogoUrl = process.env.REACT_APP_NETFLIX_LOGO_URL;
const netflixAvatarUrl = process.env.REACT_APP_NETFLIX_AVATAR_URL;

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    }
    window.addEventListener('scroll', handleShow);

    return () => {
      window.removeEventListener('scroll', handleShow);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className="nav__logo"
        src={netflixLogoUrl}
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src={netflixAvatarUrl}
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
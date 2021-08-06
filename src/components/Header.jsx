import React from 'react';
import {Link} from 'react-router-dom'
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logoPlatziVideo2.png';
import userIcon from '../assets/static/userIcon.png';

const Header = () => (
    <header className="header">
    <Link to="/">
    <img className="header__img" src={logo} alt="Platzi Video" />
    </Link>  

    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <Link to="#">
        <li>Cuenta</li>
        </Link>
        <Link to="/login">
        <li>Iniciar Sesión</li>
        </Link>
      </ul>
    </div>
  </header>
);

export default Header;
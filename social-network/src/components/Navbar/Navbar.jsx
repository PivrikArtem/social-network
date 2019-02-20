import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>

        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div>
        <NavLink to='/music'>Music</NavLink>
      </div>
      <div>
        <NavLink to='/setting'>Setting</NavLink>
      </div>
    </nav>
  )
}
export default Navbar;
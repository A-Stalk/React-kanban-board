import React from 'react';
import { Link } from 'react-router-dom';
import User from './User/User';
import css from './header.module.scss';

const Header = () => {
  return (
    <header className={css.header}>
      <Link className={css.link} to={'/'}>
        <h1 className={css.title}>Awesome Kanban Board</h1>
      </Link>
      <User />
    </header>
  );
};

export default Header;

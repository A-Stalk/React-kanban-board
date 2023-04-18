import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-down.svg';
import { ReactComponent as Cube } from '../../../assets/icons/menu.svg';
import { ReactComponent as Avatar } from '../../../assets/icons/user-avatar.svg';
import css from './User.module.scss';

const User = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  let menuField = useRef();
  useEffect(() => {
    let handler = e => {
      if (!menuField.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
  });

  return (
    <div className={css.profile} ref={menuField}>
      <div className={css.user} onClick={() => setMenuOpen(!isMenuOpen)}>
        <Avatar className={css.avatar} width={40} height={40} />
        <Arrow className={`${css.arrow} ${isMenuOpen ? css.up : ''}`} />
      </div>
      {isMenuOpen && (
        <div className={css.menu}>
          <Cube className={css.cube} width={30} height={30} />
          <button className={css.buttons}>Profile</button>
          <button className={css.buttons}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default User;

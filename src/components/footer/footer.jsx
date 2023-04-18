import React from 'react';
import { LIST_TYPES } from '../../config';
import css from './footer.module.scss';

const Footer = props => {
  const { tasks } = props;
  const listFinished = tasks.filter(
    task => task.status === LIST_TYPES.FINISHED,
  );
  const listActive = tasks.filter(task => task.status !== LIST_TYPES.FINISHED);
  return (
    <footer className={css.footer}>
      <div className={css.left}>
        <span>Active tasks: {listActive.length}</span>
        <span>Finished tasks: {listFinished.length}</span>
      </div>
      <div>
        Kanban board by {``}
        <a href='https://github.com/A-Stalk' target='_blank' rel='noreferrer'>
          @A_Stalk
        </a>
        , {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;

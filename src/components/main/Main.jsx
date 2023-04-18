import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Board from '../board/Board';
import FullWindowCard from '../board/FullWindowCard/FullWindowCard';
import css from './Main.module.scss';

const Main = props => {
  return (
    <main className={css.main}>
      <Routes>
        <Route exact path={'/'} element={<Board {...props} />} />
        <Route path={'tasks/:taskId'} element={<FullWindowCard {...props} />} />
      </Routes>
    </main>
  );
};

export default Main;

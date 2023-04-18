import React from 'react';
import uniqid from 'uniqid';
import { LIST_COPY, LIST_TYPES } from '../../config';
import css from './board.module.scss';
import Column from './column/Column';

const Board = props => {
  const { tasks, setTasks } = props;
  const id = uniqid.time('task-');

  const addNewTask = title => {
    const newTask = {
      id: id,
      title: title,
      description: '',
      status: LIST_TYPES.BACKLOG,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className={css.board}>
      {Object.values(LIST_TYPES).map(type => {
        const listColumns = tasks.filter(task => task.status === type);
        return (
          <Column
            key={type}
            type={type}
            title={LIST_COPY[type]}
            tasks={tasks || []}
            addNewTask={addNewTask}
            setTasks={setTasks}
          />
        );
      })}
    </div>
  );
};

export default Board;

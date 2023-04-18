import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LIST_TYPES } from '../../../config';
import Selector from '../buttons/Selector/Selector';
import AddButton from '../buttons/AddButton/AddButton';
import FormAddNewTask from '../forms/FormAddNewTask';
import css from './column.module.scss';
const Column = props => {
  const { type, title, tasks, addNewTask, setTasks } = props;
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const getCurrentTasks = listType =>
    tasks.filter(task => task.status === listType);

  const getPreviousTask = list => {
    switch (list) {
      case LIST_TYPES.READY:
        return tasks.filter(task => task.status === LIST_TYPES.BACKLOG);
      case LIST_TYPES.IN_PROGRESS:
        return tasks.filter(task => task.status === LIST_TYPES.READY);
      case LIST_TYPES.FINISHED:
        return tasks.filter(task => task.status === LIST_TYPES.IN_PROGRESS);
      default:
        return [];
    }
  };

  return (
    <div className={css.column}>
      <div className={css.header}>{title}</div>
      <div className={css.wrapper}>
        <div className={css.body}>
          {getCurrentTasks(type).map(task => {
            return (
              <Link className={css.link} to={`/tasks/${task.id}`} key={task.id}>
                <div key={task.id} className={css.card}>
                  {task.title}
                </div>
              </Link>
            );
          })}
        </div>

        <div className={css.footer}>
          {type === LIST_TYPES.BACKLOG && isFormVisible && (
            <FormAddNewTask
              toggleFormVisibility={toggleFormVisibility}
              addNewTask={addNewTask}
            />
          )}

          {!isFormVisible && (
            <AddButton
              toggleFormVisibility={toggleFormVisibility}
              getPreviousTask={getPreviousTask}
              type={type}
            />
          )}

          {type !== LIST_TYPES.BACKLOG && isFormVisible && (
            <Selector
              getPreviousTask={getPreviousTask}
              setTasks={setTasks}
              tasks={tasks}
              type={type}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Column;

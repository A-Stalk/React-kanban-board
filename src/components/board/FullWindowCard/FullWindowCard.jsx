import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as Svg } from '../../../assets/icons/exit.svg';
import css from './FullWindowCard.module.scss';

const FullWindowCard = props => {
  const { tasks, setTasks } = props;
  const { taskId } = useParams();
  const task = tasks.find(task => task.id === taskId);

  const handleChange = e => {
    const newDescription = e.target.value;
    const updatedTask = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, description: newDescription };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  return (
    <div className={css.card}>
      <div className={css.header}>
        <h2 className={css.title}>{task.title}</h2>
        <Link to='/'>
          <button className={css.button}>
            <Svg className={css.exit} width={35} height={35} />
          </button>
        </Link>
      </div>
      <textarea
        className={css.description}
        type='text'
        autoFocus={true}
        defaultValue={
          task.description ? task.description : 'This task has no description'
        }
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default FullWindowCard;

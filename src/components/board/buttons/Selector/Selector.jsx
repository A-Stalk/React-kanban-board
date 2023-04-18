import React from 'react';
import css from './Selector.module.scss';

const Selector = props => {
  const { type, tasks, setTasks, getPreviousTask } = props;

  const handleChange = e => {
    const taskId = e.target.value;
    const findedTask = tasks.find(task => task.id === taskId);
    findedTask.status = type;

    setTasks([...tasks]);
  };
  return (
    <select className={css.select} onChange={handleChange}>
      <option value='options'>select task here</option>.
      {getPreviousTask(type).map(task => {
        return (
          <option className={css.optionList} key={task.id} value={task.id}>
            {task.title}
          </option>
        );
      })}
    </select>
  );
};

export default Selector;

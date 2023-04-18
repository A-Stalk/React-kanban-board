import React, { useCallback, useState } from 'react';
import css from './Forms.module.scss';

const FormAddNewTask = props => {
  const { addNewTask, toggleFormVisibility } = props;
  const [values, setValues] = useState({
    title: '',
  });

  const handleChange = useCallback(
    e => {
      const fieldName = e.target.name;
      setValues({ ...values, [fieldName]: e.target.value });
    },
    [setValues, values],
  );

  const handleSubmit = e => {
    e.preventDefault();
    if (values.title) {
      addNewTask(values.title);
    } else alert(`введите название`);
    toggleFormVisibility(false);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        id='taskTitle'
        name='title'
        type='text'
        placeholder='New task title... '
        autoFocus={true}
        value={values.title}
        onChange={handleChange}
      />
      <button className={css.submit} type='submit'>
        Submit
      </button>
    </form>
  );
};

export default FormAddNewTask;

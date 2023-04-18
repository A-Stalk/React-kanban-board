import { LIST_TYPES } from '../../../../config';
import css from './AddButton.module.scss';

const AddButton = props => {
  const { toggleFormVisibility, type, getPreviousTask } = props;

  return (
    <button
      className={css.addButton}
      disabled={type !== LIST_TYPES.BACKLOG && !getPreviousTask(type).length}
      onClick={toggleFormVisibility}
    >
      {<div className={css.plus}>+</div>} Add card
    </button>
  );
};

export default AddButton;

import React from 'react';
import PropTypes from 'prop-types';

// stylesheet
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleOnChange() {
    const { todo, handleChangeProps } = this.props;
    handleChangeProps(todo.id);
  }

  deleteTodo() {
    const { todo, deleteTodoProps } = this.props;
    deleteTodoProps(todo.id);
  }

  render() {
    const { todo } = this.props;
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={this.handleOnChange}
        />
        <button
          type="button"
          onClick={this.deleteTodo}
        >
          Delete
        </button>
        {todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;

import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange() {
    const { todo, handleChangeProps } = this.props;
    handleChangeProps(todo.id);
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <input type="checkbox" checked={todo.completed} onChange={this.handleOnChange} />
        {todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
};

export default TodoItem;
